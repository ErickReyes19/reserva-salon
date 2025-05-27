import { Camera } from "lucide-react";

export default function StaticHeader() {
  return (
    <div className="flex items-center space-x-2">
      <Camera className="h-6 w-6 text-purple-600" />
      <span className="font-bold text-xl">ElStudio</span>
    </div>
  );
}
