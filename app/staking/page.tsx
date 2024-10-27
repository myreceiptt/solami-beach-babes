import Image from "next/image";
import Header from "../components/header";
import Roadmap from "../components/roadmap";
import Nfts from "../components/nfts";
import Games from "../components/games";
import Token from "../components/token";
import Footer from "../components/footer";

export default function Staking() {
  return (
    <>
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-start z-10 mt-[2vw] xs:mt-[3vw] md:mt-[4vw]">
        {/* Header Section */}
        <Header />

        {/* Staking Section */}
        <section
          id="staking"
          className="w-full flex flex-col items-center justify-center my-[7vw]"
        >
          <Image
            priority
            unoptimized
            src="/babe-juice-coin.gif"
            alt="This is $BABEJUICE Token"
            width={542}
            height={543}
            className="rounded-full w-[50vw]"
          />
          <h3 className="text-bobacolor10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center uppercase font-impact">
            $BABEJUICE
          </h3>
        </section>

        {/* Description Section */}
        <section id="description" className="w-full px-[15vw] mb-[7vw]">
          <h1 className="text-center text-black text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-impact leading-5 xs:leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-10">
            Soon <span className="text-bobacolor1">Solami Staking Program</span>{" "}
            will be provided.
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
