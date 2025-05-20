// app/api/upload/route.ts
import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import path from "path";
import fs from "fs";
import sharp from "sharp";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  // Leemos el buffer original
  const originalBuffer = Buffer.from(await file.arrayBuffer());

  // Convertimos a WebP con sharp (podrías hacer resize, calidad, etc.)
  const webpBuffer = await sharp(originalBuffer)
    .webp({ quality: 80 })    // ajusta calidad: 0–100
    .toBuffer();

  // Generamos nombre y ruta
  const fileName = `${randomUUID()}.webp`;
  const uploadsDir = path.join(process.cwd(), "public", "uploads");
  const filePath = path.join(uploadsDir, fileName);

  // Aseguramos existencia de la carpeta
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }

  // Guardamos el buffer WebP en disco
  fs.writeFileSync(filePath, webpBuffer);

  // Devolvemos la URL pública
  return NextResponse.json({ url: `/uploads/${fileName}` });
}
export async function GET(req: Request, { params }: { params: { filename: string } }) {
  const filePath = path.join(process.cwd(), "public", "uploads", params.filename);
  if (!fs.existsSync(filePath)) {
    return new NextResponse("Not found", { status: 404 });
  }
  const buffer = fs.readFileSync(filePath);
  const ext = path.extname(filePath).slice(1);
  return new NextResponse(buffer, {
    status: 200,
    headers: { "Content-Type": `image/${ext}` },
  });
}
