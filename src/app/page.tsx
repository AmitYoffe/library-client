import Image from "next/image";

export default function Home() {
  return (
    <Image
      src="/next.svg"
      alt="Next.js logo"
      width={180}
      height={38}
      priority
    />
  );
}
