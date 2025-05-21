import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { Readable } from "stream";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key:    process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
  secure:     true,
});

export const runtime = "nodejs"; // Edge runtime no soporta streams de Node

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file") as File | null;
  if (!file || !file.type.startsWith("image/")) {
    return NextResponse.json({ error: "No es una imagen válida" }, { status: 400 });
  }
  const MAX_SIZE = 5 * 1024 * 1024;
  if (file.size > MAX_SIZE) {
    return NextResponse.json({ error: "El archivo excede 5 MB" }, { status: 413 });
  }

  // Convertir File a Buffer
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  try {
    // Subir con upload_stream envuelto en Promise
    const result = await new Promise<any>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: "fotografos", resource_type: "image" },
        (error, uploaded) => {
          if (error) {
            reject(error);
          } else {
            resolve(uploaded);
          }
        }
      );
      // Pipe buffer al stream
      Readable.from(buffer).pipe(uploadStream);
    });

    return NextResponse.json({ url: (result as any).secure_url });
  } catch (err) {
    console.error("Cloudinary upload error:", err);
    return NextResponse.json({ error: "Error al subir imagen" }, { status: 500 });
  }
}
