import { images } from "@/helper/menu-items";
import Carousel from "@/components/carousel/slider";

export default function Home() {
  return (
    <div className="mt-14">
      <Carousel images={images} />
    </div>
  );
}
