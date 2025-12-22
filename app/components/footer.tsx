import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* Footer Section */}
      <footer id="footer" className="w-full">
        <div className="flex justify-center items-center bg-solami-bg-wave pt-[20vw] pb-[4vw]">
          <Link
            href="https://x.com/SolamiBeachBabe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/twitter-logo.png"
              alt="Visit Solami Beach Babes on Twitter"
              width={139}
              height={126}
              className="rounded-full w-[6vw] mx-[4vw] mr-[5vw] hover-scale"
            />
          </Link>
          <div className="flex flex-col items-center justify-center font-bobaland">
            <Link href="/">
              <p className="text-bobacolor1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl hover-scale">
                Solami Beach Babes © 2024.
              </p>
            </Link>
            <Link href="/">
              <p className="text-bobacolor1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl hover-scale">
                All Rights Reserved.
              </p>
            </Link>
          </div>
          <Link
            href="https://discord.gg/X5QEm6xGsY"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/discord-logo.png"
              alt="Join Solami Beach Babes on Discord Server"
              width={123}
              height={114}
              className="rounded-full w-[6vw] mx-[4vw] ml-[5vw] hover-scale"
            />
          </Link>
        </div>
      </footer>
    </>
  );
}
