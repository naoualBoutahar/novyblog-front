import Image from "next/image";

export default function IntroPicture() {
  return (
    <Image
      width={400}
      height={400}
      alt="application logo"
      src="/images/novyblog.png"
    />
  );
}
