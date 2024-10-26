import Image from "next/image"; // Import Image from Next.js
import Link from "next/link"; // Import Link from Next.js

export default function Home() {
  return (
    <div className="min-h-screen bg-bobacolor relative flex flex-col">
      {/* Full-width background 1 image */}
      <div className="w-full h-full absolute inset-0 bg-solami-bg-0" />

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
              src="/solami-logo.png" // Logo file name
              alt="This is Logo of Solami Beach Babes"
              width={63} // Adjusted width
              height={63} // Adjusted height
              className="rounded-full w-[5vw] hover-scale" // Add hover effect
            />
          </Link>
        </header>

        {/* Title Logo Section */}
        <section id="title-logo" className="w-full mb-[7vw]">
          <Image
            priority
            src="/solami-beach-babes.png" // Title Logo file name
            alt="This is Title Logo of Solami Beach Babes"
            width={2000} // Adjusted width
            height={1495} // Adjusted height
            className="w-[100vw]"
          />
        </section>

        {/* Description Section */}
        <section
          id="description"
          className="w-full px-[4vw] sm:px-[6vw] md:px-[8vw] lg:px-[10vw] mb-[7vw]"
        >
          <h1 className="text-center text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-impact leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-10">
            Welcome to{" "}
            <span className="text-bobacolor">Solami Beach Babes</span>.
          </h1>
          <h1 className="text-center text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-impact leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-10">
            Where the sun is always shining and everyone needs an oily rubdown.
          </h1>
          <h1 className="text-center text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-impact leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-10">
            Put a few babes in your wallet and enjoy games, customization,
            tokenomics, random airdrops, and full frontal degeneracy.
          </h1>
        </section>

        {/* Team Section */}
        <section
          id="team"
          className="w-full px-[4vw] sm:px-[6vw] md:px-[8vw] lg:px-[10vw]"
        >
          <h2 className="text-bobacolor text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-australian mb-[7vw]">
            The Team
          </h2>

          {/* Grid container for 2 columns and 2 rows */}
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-y-[5vw] gap-x-1">
            {/* Team Member 1 */}
            <div className="rounded-lg flex items-start justify-start xs:justify-end">
              {/* Profile Image on the left */}
              <Image
                src="/hamms-founder.jpg" // Replace with actual image path
                alt="This is Team Member #1 - Hamms - Founder"
                width={225}
                height={225}
                className="rounded-full w-[30vw] xs:w-[20vw] sm:w-[14vw] md:w-[13vw] lg:w-[15vw] mr-2 md:mr-3 lg:mr-4 border-4 lg:border-3 xl:border-4 border-white hover-scale"
              />
              {/* Name, Position, and Description on the right */}
              <div className="text-left">
                <h3 className="text-bobacolor leading-3 sm:leading-3 md:leading-none lg:leading-none text-base sm:text-lg md:text-xl lg:text-3xl xl:text-5xl mb-1">
                  Hamms
                </h3>
                <h4 className="text-bobacolor text-sm sm:text-base md:text-lg lg:text-xl xl:text-3xl mb-2">
                  (Founder)
                </h4>
                <p className="text-black text-xs sm:text-sm lg:text-base xl:text-2xl">
                  Crypto/NFT trader since 2018.
                </p>
                <p className="text-black text-xs sm:text-sm lg:text-base xl:text-2xl">
                  Enjoy degen mints and lots of laughs.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="rounded-lg flex items-end justify-end mt-0 xs:mt-[5vw]">
              {/* Name, Position, and Description on the left */}
              <div className="text-right">
                <h3 className="text-bobacolor leading-3 sm:leading-3 md:leading-none lg:leading-none text-base sm:text-lg md:text-xl lg:text-3xl xl:text-5xl mb-1">
                  Coldheart
                </h3>
                <h4 className="text-bobacolor text-sm sm:text-base md:text-lg lg:text-xl xl:text-3xl mb-2">
                  (Co-Founder)
                </h4>
                <p className="text-black text-xs sm:text-sm lg:text-base xl:text-lg">
                  Crypto/NFT trader since Vietnam.
                </p>
                <p className="text-black text-xs sm:text-sm lg:text-base xl:text-lg">
                  Talks like he has marbles in his mouth.
                </p>
              </div>
              {/* Profile Image on the right */}
              <Image
                src="/coldheart-co-founder.png" // Replace with actual image path
                alt="This is Team Member #2 - Coldheart - Co-Founder"
                width={225}
                height={225}
                className="rounded-full w-[30vw] xs:w-[20vw] sm:w-[14vw] md:w-[13vw] lg:w-[15vw] ml-2 md:ml-3 lg:ml-4 border-4 lg:border-3 xl:border-4 border-white hover-scale"
              />
            </div>

            {/* Team Member 3 */}
            <div className="rounded-lg flex items-start justify-start ">
              {/* Profile Image on the left */}
              <Image
                src="/fauzanbunz-artist.png" // Replace with actual image path
                alt="This is Team Member #3 - Fauzanbunz - Lead Artist - Co-Founder"
                width={225}
                height={225}
                className="rounded-full w-[30vw] xs:w-[20vw] sm:w-[14vw] md:w-[13vw] lg:w-[15vw] mr-2 md:mr-3 lg:mr-4 border-4 lg:border-3 xl:border-4 border-white hover-scale"
              />
              {/* Name, Position, and Description on the right */}
              <div className="text-left">
                <h3 className="text-bobacolor leading-3 sm:leading-3 md:leading-none lg:leading-none text-base sm:text-lg md:text-xl lg:text-3xl xl:text-5xl mb-1">
                  Fauzanbunz
                </h3>
                <h4 className="text-bobacolor text-sm sm:text-base md:text-lg lg:text-xl xl:text-3xl mb-2">
                  (Lead Artist/Co-Founder)
                </h4>
                <p className="text-black text-xs sm:text-sm lg:text-base xl:text-lg">
                  NFT Artist who loves to create.
                </p>
                <p className="text-black text-xs sm:text-sm lg:text-base xl:text-lg">
                  Also loves to make people laugh.
                </p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="rounded-lg flex items-end justify-end xs:justify-start mt-0 xs:mt-[7vw]">
              {/* Name, Position, and Description on the left */}
              <div className="text-right">
                <h3 className="text-bobacolor leading-3 sm:leading-3 md:leading-none lg:leading-none text-base sm:text-lg md:text-xl lg:text-3xl xl:text-5xl mb-1">
                  Prof. NOTA
                </h3>
                <h4 className="text-bobacolor text-sm sm:text-base md:text-lg lg:text-xl xl:text-3xl mb-2">
                  (Developer/Co-Founder)
                </h4>
                <p className="text-black text-xs sm:text-sm lg:text-base xl:text-lg">
                  Genius coder, and game designer.
                </p>
                <p className="text-black text-xs sm:text-sm lg:text-base xl:text-lg">
                  The Boob-Run will be his legacy.
                </p>
              </div>
              {/* Profile Image on the right */}
              <Image
                src="/professor-nota-developer.png" // Replace with actual image path
                alt="This is Team Member #4 - Prof. NOTA - Developer - Co-Founder"
                width={225}
                height={225}
                className="rounded-full w-[30vw] xs:w-[20vw] sm:w-[14vw] md:w-[13vw] lg:w-[15vw] ml-2 md:ml-3 lg:ml-4 border-4 lg:border-3 xl:border-4 border-white hover-scale"
              />
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section id="roadmap" className="w-full -mt-[15vw] ">
          <Image
            src="/road-map-wood.png" // Replace with actual image path
            alt="This is Roadmap Wood Sign"
            width={1440}
            height={740}
            className="w-full h-full mb-[2vw]"
          />
          <div className="flex flex-col items-center justify-center text-center px-[4vw] sm:px-[8vw] md:px-[12vw] lg:px-[16vw]">
            <h3 className="text-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-normal xs:leading-normal sm:leading-snug md:leading-snug lg:leading-relaxed xl:leading-relaxed">
              Degen Mint <span className="text-bobacolor">3,333ish</span> Babes
            </h3>
            <h4 className="text-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none xs:leading-none sm:leading-none md:leading-none lg:leading-tight xl:leading-tight">
              Get to Solami "Beach Island"
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
              Staking for <span className="text-bobacolor">$BABEJUICE</span>
            </h4>
            <p className="text-black text-sm xs:text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-none xs:leading-tight sm:leading-tight mb-[2vw]">
              Get full trait online shop featuring all new and sexy traits to
              spend <span className="text-bobacolor">$BABEJUICE</span> on (some
              may be <span className="text-bobacolor">NSFW</span> &#128523;).
            </p>
            <p className="text-black text-sm xs:text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-none xs:leading-tight sm:leading-tight mb-[2vw]">
              Get some <span className="text-bobacolor">OnlyFan models</span> to
              make some dumbass movies for us for marketing and on our website.
            </p>
            <p className="text-black text-sm xs:text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-none xs:leading-tight sm:leading-tight mb-[2vw]">
              Try not to piss away all the mint funds on booze and rug NFT's.
            </p>
            <p className="text-black text-sm xs:text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-none xs:leading-tight sm:leading-tight mb-[2vw]">
              <span className="text-bobacolor">Airdrop</span> some genz rare
              babes on big holders & lucky bozos.
            </p>
            <p className="text-black text-sm xs:text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-none xs:leading-tight sm:leading-tight mb-[2vw]">
              Try and get Jaylene in our Discord so we can simp out to her
              &#128516;.
            </p>
            <p className="text-black text-sm xs:text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-none xs:leading-tight sm:leading-tight mb-[2vw]">
              Try not to implode when our typical Solami minters mint for{" "}
              <span className="text-bobacolor">0.04sol</span> and then panic ell
              for <span className="text-bobacolor">0.03sol</span> 4min later.
            </p>
            <p className="text-black text-sm xs:text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-none xs:leading-tight sm:leading-tight mb-[2vw]">
              Get Elon to take us to Mars in his SpaceShip.
            </p>
          </div>
        </section>

        {/* NFTs Section */}
        <section id="nfts" className="w-full">
          <div id="bra" className="w-full h-full bg-solami-bg-bra">
            <div className="grid grid-cols-2 grid-flow-col pt-[13vw] pb-[100vw]">
              <div className="row-span-2">
                <Image
                  src="/nft-collections-1.png" // Replace with actual image path
                  alt="This is Sneak Peek of NFT Collections"
                  width={1164}
                  height={1492}
                  className="w-[55vw]"
                />
              </div>
              <div className="mt-[5vw]">
                <Image
                  src="/nft-collections-2.gif" // Replace with actual image path
                  alt="This is Sneak Peek of NFT Collections"
                  width={1071}
                  height={1020}
                  className="w-[45vw]"
                />
              </div>
              <div className="-ml-[25vw]">
                <h2 className="text-lime-400 text-2xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-left">
                  Solami Beach Babes duh!
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* Game Section */}
        <section id="game" className="w-full -mt-[5vw]">
          <div id="melting" className="w-full h-full bg-solami-bg-melt">
            <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row pt-[13vw] pb-[70vw]">
              <div className="sm:col-span-2">
                <h2 className="text-white text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center uppercase font-impact">
                  the GAME
                </h2>
              </div>
              <div className="mx-[5vw] sm:mx-0 sm:ml-[5vw] sm:mr-[1vw] mt-[5vw]">
                <Image
                  src="/solami-beach-island.gif" // Replace with actual image path
                  alt="This is The Solami Beach Island"
                  width={480}
                  height={394}
                  className="rounded-xl w-[100vw] sm:w-[50vw] border-4 md:border-8 border-bobacolor"
                />
              </div>
              <div className="mx-[5vw] sm:mx-0 sm:ml-[1vw] sm:mr-[5vw] mt-[5vw]">
                <h3 className="text-bobacolor text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-left mb-[5vw]">
                  &lt;Games&gt;
                </h3>
                <h4 className="text-bobacolor text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-left">
                  &lt;Babe Run&gt;
                </h4>
                <h4 className="text-bobacolor text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-left mb-[5vw]">
                  Side scroller where you need to avoid dumb stuff and horny
                  lifeguards.
                </h4>
                <h4 className="text-bobacolor text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-left">
                  &lt;Boob Bounce&gt;
                </h4>
                <h4 className="text-bobacolor text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-left">
                  Tap the Boobas for bonus $BABEJUICE each day.
                </h4>
              </div>
            </div>
          </div>
        </section>

        {/* Token Section */}
        <section
          id="token"
          className="w-full flex flex-col items-center justify-center px-[4vw] sm:px-[6vw] md:px-[8vw] lg:px-[10vw]"
        >
          <h2 className="text-bobacolor text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-australian mb-[7vw]">
            The Token
          </h2>
          <Image
            src="/babe-juice-coin.gif" // Replace with actual image path
            alt="This is $BABEJUICE Token"
            width={542}
            height={543}
            className="rounded-full w-[50vw]"
          />
          <h3 className="text-bobacolor text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center uppercase font-impact mb-[7vw]">
            $BABEJUICE
          </h3>
          <h4 className="text-bobacolor text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center">
            Used for buying new ourfits and legendary loot boxes containing the
            rarest traits.
          </h4>
        </section>

        {/* Footer Section */}
        <footer id="footer" className="w-full sticky bottom-0">
          <div
            id="melting"
            className="flex justify-center items-center bg-solami-bg-wave pt-[20vw] pb-[4vw]"
          >
            <Link
              href="https://x.com/SolamiBeachBabe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/twitter-logo.png" // Twitter logo file name
                alt="Visit Solami Beach Babes on Twitter"
                width={139} // Adjust as needed
                height={126} // Adjust as needed
                className="rounded-full w-[6vw] mx-[4vw] mr-[5vw] transition-transform duration-300 ease-in-out transform hover:scale-110" // Add hover effect
              />
            </Link>
            <div className="flex flex-col items-center justify-center">
              <Link href="/">
                <p className="text-bobacolor text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl transition-transform duration-300 ease-in-out transform hover:scale-110">
                  Solami Beach Babes © 2024.
                </p>
              </Link>
              <Link href="/">
                <p className="text-bobacolor font-bobaland text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl transition-transform duration-300 ease-in-out transform hover:scale-110">
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
                src="/discord-logo.png" // Discord logo file name
                alt="Join Solami Beach Babes on Discord Server"
                width={123} // Adjust as needed
                height={114} // Adjust as needed
                className="rounded-full w-[6vw] mx-[4vw] ml-[5vw] transition-transform duration-300 ease-in-out transform hover:scale-110" // Add hover effect
              />
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
