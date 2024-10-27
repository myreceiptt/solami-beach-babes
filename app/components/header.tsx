import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* Header Section */}
      <header
        id="header"
        className="w-full flex flex-row sm:flex-col items-center justify-center"
      >
        <Link href="/">
          {" "}
          {/* Make the logo clickable */}
          <Image
            priority
            src="/solami-logo.png"
            alt="This is Logo of Solami Beach Babes"
            width={63}
            height={63}
            className="rounded-full w-[5vw] hover-scale"
          />
        </Link>
      </header>
    </>
  );
}
