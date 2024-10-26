import Image from "next/image"; // Import Image from Next.js
import Link from "next/link"; // Import Link from Next.js

export default function Minting() {
  return (
    <div className="min-h-screen bg-bobacolor4 relative flex flex-col">
      {/* Full-width background image */}
      <div className="w-full absolute inset-0 bg-solami-bg-0" />

      {/* Left Background Image */}
      <div className="absolute inset-y-[45vw] left-0 w-[30vw] bg-left-image" />

      {/* Right Background Image */}
      <div className="absolute inset-y-[55vw] right-0 w-[40vw] bg-right-image" />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-start z-10 mt-[2vw] xs:mt-[3vw] md:mt-[4vw]">
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

        {/* Minting Section */}
        <section
          id="minting"
          className="w-full flex flex-col items-center justify-center my-[7vw]"
        >
          <Image
            priority
            unoptimized
            src="/nft-collections-2.gif"
            alt="This is Sneak Peek of NFT Collections"
            width={1071}
            height={1020}
            className="w-[75vw]"
          />
        </section>

        {/* Description Section */}
        <section
          id="description"
          className="w-full px-[4vw] sm:px-[6vw] md:px-[8vw] lg:px-[10vw] mb-[7vw]"
        >
          <h1 className="text-center text-black text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-impact leading-5 xs:leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-10">
            Soon <span className="text-bobacolor1">Solami Beach Babes</span>{" "}
            will be available.
          </h1>
          <h1 className="text-center text-black text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-impact leading-5 xs:leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-10">
            In the meanwhile, read our roadmap below.
          </h1>
          <h1 className="text-center text-black text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-impact leading-5 xs:leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-10">
            Chill out with us in our Discord.
          </h1>
          <h1 className="text-center text-black text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-impact leading-5 xs:leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-10">
            Stay tune on our X account.
          </h1>
          <h1 className="text-center text-black text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-impact leading-5 xs:leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-10">
            Stay alert and beware of the full frontal degeneracy!
          </h1>
        </section>

        {/* Roadmap Section */}
        <section id="roadmap" className="w-full -mt-[15vw] z-0">
          <Image
            src="/road-map-wood.png"
            alt="This is Roadmap Wood Sign"
            width={2000}
            height={1029}
            className="w-full h-full mb-[2vw]"
          />
          <div className="flex flex-col items-center justify-center text-center px-[4vw] sm:px-[8vw] md:px-[12vw] lg:px-[16vw]">
            <h3 className="text-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-normal xs:leading-normal sm:leading-snug md:leading-snug lg:leading-relaxed xl:leading-relaxed">
              Degen Mint <span className="text-bobacolor4">3,333ish</span> Babes
            </h3>
            <h4 className="text-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none xs:leading-none sm:leading-none md:leading-none lg:leading-tight xl:leading-tight">
              Get to Solami &quot;Beach Island&quot;
            </h4>
            <h4 className="text-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none xs:leading-none sm:leading-none md:leading-none lg:leading-tight xl:leading-tight">
              Staking Website Up
            </h4>
            <h4 className="text-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none xs:leading-none sm:leading-none md:leading-none lg:leading-tight xl:leading-tight">
              Running with Babe-Run
            </h4>
            <h4 className="text-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none xs:leading-none sm:leading-none md:leading-none lg:leading-tight xl:leading-tight">
              Boob Slap Mini Games
            </h4>
            <h4 className="text-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none xs:leading-none sm:leading-none md:leading-none lg:leading-tight xl:leading-tight mb-[2vw]">
              Staking for <span className="text-bobacolor5">$BABEJUICE</span>
            </h4>
            <p className="text-black text-sm xs:text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-none xs:leading-tight sm:leading-tight mb-[2vw]">
              Get full trait online shop featuring all new and sexy traits to
              spend <span className="text-bobacolor5">$BABEJUICE</span> on (some
              may be <span className="text-bobacolor6">NSFW</span> &#128523;).
            </p>
            <p className="text-black text-sm xs:text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-none xs:leading-tight sm:leading-tight mb-[2vw]">
              Get some <span className="text-bobacolor4">OnlyFan models</span>{" "}
              to make some dumbass movies for us for marketing and on our
              website.
            </p>
            <p className="text-black text-sm xs:text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-none xs:leading-tight sm:leading-tight mb-[2vw]">
              Try not to piss away all the mint funds on booze and rug
              NFT&apos;s.
            </p>
            <p className="text-black text-sm xs:text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-none xs:leading-tight sm:leading-tight mb-[2vw]">
              <span className="text-bobacolor5">Airdrop</span> some genz rare
              babes on big holders & lucky bozos.
            </p>
            <p className="text-black text-sm xs:text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-none xs:leading-tight sm:leading-tight mb-[2vw]">
              Try and get Jaylene in our Discord so we can simp out to her
              &#128516;.
            </p>
            <p className="text-black text-sm xs:text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-none xs:leading-tight sm:leading-tight mb-[2vw]">
              Try not to implode when our typical Solami minters mint for{" "}
              <span className="text-bobacolor6">0.04sol</span> and then panic
              ell for <span className="text-bobacolor6">0.03sol</span> 4min
              later.
            </p>
            <p className="text-black text-sm xs:text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-none xs:leading-tight sm:leading-tight mb-[2vw]">
              Get Elon to take us to Mars in his SpaceShip.
            </p>
          </div>
        </section>

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
            <div className="flex flex-col items-center justify-center">
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
      </main>
    </div>
  );
}
