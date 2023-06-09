import Image from "next/image";

export const MyImage = ({ image }) => {
  return (
    <Image
      src={image}
      alt="image"
      width={100}
      height={100}
      className="aspect-[2/1] w-full rounded-lg bg-gray-100 object-cover sm:aspect-[16/9] sm:h-32 lg:h-auto"
      // className="aspect-[2/1] w-full rounded-lg bg-gray-100 object-cover sm:aspect-[16/9] sm:h-32 lg:h-auto"
    />
  );
};
