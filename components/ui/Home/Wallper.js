import Image from "next/image";

export default function Wallper() {
  return (
    <div className="relative h-72 w-full">
      <Image src="/landing/wallpaperflare-cropped.jpg" alt="" fill={true} />
    </div>
  );
}
