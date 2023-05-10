import Image from "next/image";
import { Inter } from "next/font/google";
import Carousel from "@/components/helper/carousel";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="mt-2">
      <Carousel />
    </div>
  );
}
