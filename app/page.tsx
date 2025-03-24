import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";
import Roadmap from "./components/roadmap";
import Nfts from "./components/nfts";
import Games from "./components/games";
import Token from "./components/token";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-start z-10 mt-[2vw] xs:mt-[3vw] md:mt-[4vw]">
        {/* Header Section */}
        <Header />

        {/* Title Logo Section */}
        <section
          id="title-logo"
          className="w-full flex flex-col items-center justify-center mb-[5vw]"
        >
          <Image
            priority
            src="/solami-beach-babes.png"
            alt="This is Title Logo of Solami Beach Babes"
            width={2000}
            height={1495}
            className="w-[90vw]"
          />
        </section>

        {/* Description Section */}
        <section id="description" className="w-full px-[15vw] mb-[7vw]">
          <h1 className="text-center text-black text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-impact leading-5 xs:leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-10">
            Welcome to{" "}
            <span className="text-bobacolor1">Solami Beach Babes</span>.
          </h1>
          <h1 className="text-center text-black text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-impact leading-5 xs:leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-10">
            Where the sun is always shining and everyone needs an oily rubdown.
          </h1>
          <h1 className="text-center text-black text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-impact leading-5 xs:leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-10">
            Put a few babes in your wallet and enjoy games, customization,
            tokenomics, random airdrops, and full frontal degeneracy.
          </h1>
        </section>

        {/* Team Section */}
        <section
          id="team"
          className="w-full px-[4vw] sm:px-[6vw] md:px-[8vw] lg:px-[10vw] z-10"
        >
          <h2 className="text-bobacolor2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-australian mb-[7vw]">
            The Team
          </h2>

          {/* Grid container for 2 columns and 2 rows */}
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-y-[5vw] gap-x-1">
            {/* Team Member 1 */}
            <div className="flex items-start justify-start xs:justify-end">
              {/* Profile Image on the left */}
              <Link
                href="https://x.com/HammsNft"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/hamms-founder.jpg"
                  alt="This is Team Member #1 - Hamms - Founder"
                  width={225}
                  height={225}
                  className="rounded-full w-[30vw] xs:w-[20vw] sm:w-[14vw] md:w-[13vw] lg:w-[15vw] mr-2 md:mr-3 lg:mr-4 border-4 lg:border-3 xl:border-4 border-white hover-scale"
                />
              </Link>
              {/* Name, Position, and Description on the right */}
              <div className="text-left">
                <Link
                  href="https://x.com/HammsNft"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-bobacolor3 leading-3 sm:leading-3 md:leading-none lg:leading-none text-base sm:text-lg md:text-xl lg:text-3xl xl:text-5xl mb-1 hover-scale">
                    Hamms
                  </h3>
                  <h4 className="text-bobacolor3 text-sm sm:text-base md:text-lg lg:text-xl xl:text-3xl mb-2 hover-scale">
                    (Founder)
                  </h4>
                  <p className="text-black text-xs sm:text-sm lg:text-base xl:text-2xl hover-scale">
                    Crypto/NFT trader since 2018.
                  </p>
                  <p className="text-black text-xs sm:text-sm lg:text-base xl:text-2xl hover-scale">
                    Enjoys degen mints and lots of laughs.
                  </p>
                </Link>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="flex items-end justify-end mt-0 xs:mt-[5vw]">
              {/* Name, Position, and Description on the left */}
              <div className="text-right">
                <Link
                  href="https://x.com/Coldheart_Alpha"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-bobacolor3 leading-3 sm:leading-3 md:leading-none lg:leading-none text-base sm:text-lg md:text-xl lg:text-3xl xl:text-5xl mb-1 hover-scale">
                    Coldheart
                  </h3>
                  <h4 className="text-bobacolor3 text-sm sm:text-base md:text-lg lg:text-xl xl:text-3xl mb-2 hover-scale">
                    (Co-Founder)
                  </h4>
                  <p className="text-black text-xs sm:text-sm lg:text-base xl:text-lg hover-scale">
                    Crypto/NFT trader since Vietnam.
                  </p>
                  <p className="text-black text-xs sm:text-sm lg:text-base xl:text-lg hover-scale">
                    Talks like he has marbles in his mouth.
                  </p>
                </Link>
              </div>
              {/* Profile Image on the right */}
              <Link
                href="https://x.com/Coldheart_Alpha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/coldheart-co-founder.png"
                  alt="This is Team Member #2 - Coldheart - Co-Founder"
                  width={225}
                  height={225}
                  className="rounded-full w-[30vw] xs:w-[20vw] sm:w-[14vw] md:w-[13vw] lg:w-[15vw] ml-2 md:ml-3 lg:ml-4 border-4 lg:border-3 xl:border-4 border-white hover-scale"
                />
              </Link>
            </div>

            {/* Team Member 3 */}
            <div className="flex items-start justify-start">
              {/* Profile Image on the left */}
              <Link
                href="https://x.com/Fauzanbunz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/fauzanbunz-artist.png"
                  alt="This is Team Member #3 - Fauzanbunz - Lead Artist - Co-Founder"
                  width={225}
                  height={225}
                  className="rounded-full w-[30vw] xs:w-[20vw] sm:w-[14vw] md:w-[13vw] lg:w-[15vw] mr-2 md:mr-3 lg:mr-4 border-4 lg:border-3 xl:border-4 border-white hover-scale"
                />
              </Link>
              {/* Name, Position, and Description on the right */}
              <div className="text-left">
                <Link
                  href="https://x.com/Fauzanbunz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-bobacolor3 leading-3 sm:leading-3 md:leading-none lg:leading-none text-base sm:text-lg md:text-xl lg:text-3xl xl:text-5xl mb-1 hover-scale">
                    Fauzanbunz
                  </h3>
                  <h4 className="text-bobacolor3 text-sm sm:text-base md:text-lg lg:text-xl xl:text-3xl mb-2 hover-scale">
                    (Lead Artist/Co-Founder)
                  </h4>
                  <p className="text-black text-xs sm:text-sm lg:text-base xl:text-lg hover-scale">
                    NFT Artist who loves to create.
                  </p>
                  <p className="text-black text-xs sm:text-sm lg:text-base xl:text-lg hover-scale">
                    Also loves to make people laugh.
                  </p>
                </Link>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="flex items-end justify-end xs:justify-start mt-0 xs:mt-[7vw]">
              {/* Name, Position, and Description on the left */}
              <div className="text-right">
                <Link
                  href="https://nota.endhonesa.com/profile/nota"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-bobacolor3 leading-3 sm:leading-3 md:leading-none lg:leading-none text-base sm:text-lg md:text-xl lg:text-3xl xl:text-5xl mb-1 hover-scale">
                    NOTA v.11.0.8
                  </h3>
                  <h4 className="text-bobacolor3 text-sm sm:text-base md:text-lg lg:text-xl xl:text-3xl mb-2 hover-scale">
                    (Developer/Co-Founder)
                  </h4>
                  <p className="text-black text-xs sm:text-sm lg:text-base xl:text-lg hover-scale">
                    Genius coder and game designer.
                  </p>
                  <p className="text-black text-xs sm:text-sm lg:text-base xl:text-lg hover-scale">
                    The Boob-Run will be his legacy.
                  </p>
                </Link>
              </div>
              {/* Profile Image on the right */}
              <Link
                href="https://x.com/MyReceiptTT"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/professor-nota-developer.png"
                  alt="This is Team Member #4 - Prof. NOTA v.11.0.8 - Developer - Co-Founder"
                  width={225}
                  height={225}
                  className="rounded-full w-[30vw] xs:w-[20vw] sm:w-[14vw] md:w-[13vw] lg:w-[15vw] ml-2 md:ml-3 lg:ml-4 border-4 lg:border-3 xl:border-4 border-white hover-scale"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <Roadmap />

        {/* NFTs Section */}
        <Nfts />

        {/* Game Section */}
        <Games />

        {/* Token Section */}
        <Token />

        {/* Footer Section */}
        <Footer />
      </main>
    </>
  );
}
