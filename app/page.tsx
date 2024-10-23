import Image from "next/image"; // Import Image from Next.js
import Link from "next/link"; // Import Link from Next.js

export default function Home() {
  return (
    <div className="min-h-screen bg-bobacolor relative flex flex-col">
      {/* Full-width background 1 image */}
      <div className="w-full h-full bg-cover bg-top absolute inset-0 bg-solami-bg" />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-start relative z-10 m-[2vh] sm:m-[3vh] md:m-[4vh] lg:m-[5vh] space-y-[5vh]">
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

        {/* Description Section */}
        <section
          id="description"
          className="w-full py-4 sm:py-6 md:py-8 lg:py-10 px-[7vw] sm:px-[9vw] md:px-[11vw] lg:px-[13vw]"
        >
          <Image
            priority
            src="/solami-beach-babes.png" // Title Logo file name
            alt="This is Title Logo of Solami Beach Babes"
            width={2000} // Adjusted width
            height={1495} // Adjusted height
            className="w-[100vw] mt-[1vh] sm:mt-[2vh] md:mt-[3vh] lg:mt-[4vh]"
          />
          <h1 className="text-center text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-impact leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-10">
            Welcome to{" "}
            <span className="text-bobacolor">Solami Beach Babes</span>.
          </h1>
          <h2 className="text-center text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-impact leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-10">
            Where the sun is always shining and everyone needs an oily rubdown.
          </h2>
          <h2 className="text-center text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-impact leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-10">
            Put a few babes in your wallet and enjoy games, customization,
            tokenomics, random airdrops, and full frontal degeneracy.
          </h2>
        </section>

        {/* Team Section */}
        <section
          id="team"
          className="w-full py-4 sm:py-6 md:py-8 lg:py-10 px-[4vw] sm:px-[6vw] md:px-[8vw] lg:px-[10vw]"
        >
          <h2 className="text-bobacolor text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-australian mb-[5vh]">
            The Team
          </h2>

          {/* Grid container for 2 columns and 2 rows */}
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-y-[5vh] gap-x-1">
            {/* Team Member 1 */}
            <div className="rounded-lg flex items-start justify-start xs:justify-end">
              {/* Profile Image on the left */}
              <Image
                src="/hamms-founder.jpg" // Replace with actual image path
                alt="This is Team Member #1 - Hamms - Founder"
                width={225}
                height={225}
                className="rounded-full w-[13vw] sm:w-[12vw] md:w-[11vw] lg:w-[10vw] mr-1 md:mr-2 lg:mr-3 border-2 lg:border-3 xl:border-4 border-white hover-scale"
              />
              {/* Name, Position, and Description on the right */}
              <div className="text-left">
                <h3 className="text-bobacolor leading-3 sm:leading-3 md:leading-none lg:leading-none text-base sm:text-lg md:text-xl lg:text-2xl mb-1">
                  Hamms
                </h3>
                <p className="text-bobacolor text-sm sm:text-base md:text-lg lg:text-xl mb-2">
                  (Founder)
                </p>
                <p className="text-black text-xs sm:text-sm lg:text-base xl:text-lg">
                  Crypto/NFT trader since 2018.
                </p>
                <p className="text-black text-xs sm:text-sm lg:text-base xl:text-lg">
                  Enjoy degen mints and lots of laughs.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="rounded-lg flex items-end justify-end">
              {/* Name, Position, and Description on the left */}
              <div className="text-right">
                <h3 className="text-bobacolor leading-3 sm:leading-3 md:leading-none lg:leading-none text-base sm:text-lg md:text-xl lg:text-2xl mb-1">
                  Coldheart
                </h3>
                <p className="text-bobacolor text-sm sm:text-base md:text-lg lg:text-xl mb-2">
                  (Co-Founder)
                </p>
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
                className="rounded-full w-[13vw] sm:w-[12vw] md:w-[11vw] lg:w-[10vw] ml-1 md:ml-2 lg:ml-3 border-2 lg:border-3 xl:border-4 border-white hover-scale"
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
                className="rounded-full w-[13vw] sm:w-[12vw] md:w-[11vw] lg:w-[10vw] mr-1 md:mr-2 lg:mr-3 border-2 lg:border-3 xl:border-4 border-white hover-scale"
              />
              {/* Name, Position, and Description on the right */}
              <div className="text-left">
                <h3 className="text-bobacolor leading-3 sm:leading-3 md:leading-none lg:leading-none text-base sm:text-lg md:text-xl lg:text-2xl mb-1">
                  Fauzanbunz
                </h3>
                <p className="text-bobacolor text-sm sm:text-base md:text-lg lg:text-xl mb-2">
                  (Lead Artist/Co-Founder)
                </p>
                <p className="text-black text-xs sm:text-sm lg:text-base xl:text-lg">
                  NFT Artist who loves to create.
                </p>
                <p className="text-black text-xs sm:text-sm lg:text-base xl:text-lg">
                  Also loves to make people laugh.
                </p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="rounded-lg flex items-end justify-end xs:justify-start">
              {/* Name, Position, and Description on the left */}
              <div className="text-right">
                <h3 className="text-bobacolor leading-3 sm:leading-3 md:leading-none lg:leading-none text-base sm:text-lg md:text-xl lg:text-2xl mb-1">
                  Prof. NOTA
                </h3>
                <p className="text-bobacolor text-sm sm:text-base md:text-lg lg:text-xl mb-2">
                  (Developer/Co-Founder)
                </p>
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
                className="rounded-full w-[13vw] sm:w-[12vw] md:w-[11vw] lg:w-[10vw] ml-1 md:ml-2 lg:ml-3 border-2 lg:border-3 xl:border-4 border-white hover-scale"
              />
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section
          id="roadmap"
          className="w-full py-4 sm:py-6 md:py-8 lg:py-40 px-[6vw] sm:px-[8vw] md:px-[10vw] lg:px-[12vw]"
        >
          <h1 className="text-orange-950/50 leading-loose text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-center font-impact mb-[5vh]">
            ROAD MAP
          </h1>
          <p className="text-white text-center">
            Check out our future plans and what’s coming next.
          </p>
        </section>

        {/* NFTs Section */}
        <section id="nfts" className="w-full py-10 px-4">
          <h2 className="text-white text-2xl text-center">NFTs</h2>
          <p className="text-white text-center">
            Learn more about the NFTs we offer and how you can get yours.
          </p>
        </section>

        {/* Game Section */}
        <section id="game" className="w-full py-10 px-4">
          <h2 className="text-white text-2xl text-center">Game</h2>
          <p className="text-white text-center">
            Explore the exciting games we have in store for you!
          </p>
        </section>

        {/* Token Section */}
        <section id="token" className="w-full py-10 px-4">
          <h2 className="text-white text-2xl text-center">Token</h2>
          <p className="text-white text-center">
            Find out about our tokenomics and how to participate.
          </p>
        </section>

        {/* Footer Section */}
        <footer
          id="footer"
          className="flex justify-center items-center pt-4 sm:pt-6 md:pt-8 lg:pt-10 mb-[1vh] sm:mb-[2vh] md:mb-[3vh] lg:mb-[4vh]"
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
              <p className="text-bobacolor font-bobaland text-center text-xs sm:text-sm lg:text-base transition-transform duration-300 ease-in-out transform hover:scale-110">
                Solami Beach Babes © 2024.
              </p>
            </Link>
            <Link href="/">
              <p className="text-bobacolor font-bobaland text-center text-xs sm:text-sm lg:text-base transition-transform duration-300 ease-in-out transform hover:scale-110">
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
        </footer>
      </main>
    </div>
  );
}
