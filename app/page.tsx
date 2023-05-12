import { Inter } from "next/font/google";
import Carousel from "@/helper/carousel";
import { images } from "@/helper/menu-items";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="mt-2">
      <Carousel images={images} />
    </div>
  );
}
