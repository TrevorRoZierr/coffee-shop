import Image from "next/image";

interface MidProps {
  image: any;
  alt: string;
}

const MidImage = ({ image, alt }: MidProps) => {
  return (
    <Image
      src={image}
      alt={alt}
      className="w-[400px] h-auto hover:animate-bounce hover:w-[500px] duration-1000 cursor-none"
    />
  );
};

export default MidImage;
