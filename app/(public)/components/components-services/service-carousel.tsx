// components/service-carousel.tsx
import Image from "next/image";
import { PhotoService } from "../../types";
import AnimatedCard from "../animated-card";

export default function ServiceCarousel({ services }: { services: PhotoService[] }) {
  return (
    <div className="flex space-x-4 overflow-x-auto scrollbar-none py-4 px-2">
      {services.map((svc) => (
        <div key={svc.id} className="min-w-[80%] sm:min-w-[45%] md:hidden">
          <AnimatedCard>
            <div className="overflow-hidden rounded-lg shadow-lg h-full flex flex-col">
              <div className="relative h-48 w-full">
                <Image
                  src={svc.img || "/placeholder.svg"}
                  alt={svc.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4 flex-1">
                <h3 className="text-lg font-semibold mb-2">{svc.name}</h3>
                <p className="text-gray-600 line-clamp-3">{svc.description}</p>
              </div>
            </div>
          </AnimatedCard>
        </div>
      ))}
    </div>
  );
}
