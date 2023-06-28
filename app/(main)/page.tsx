import { Inter } from "next/font/google";
import { images } from "@/helper/menu-items";
import Carousel from "@/components/carousel/slider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="mt-14">
      <Carousel images={images} />
    </div>
  );
}
