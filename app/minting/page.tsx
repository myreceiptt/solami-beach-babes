import Image from "next/image";
import Header from "../components/header";
import Roadmap from "../components/roadmap";
import Games from "../components/games";
import Footer from "../components/footer";

export default function Minting() {
  return (
    <>
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-start z-10 mt-[2vw] xs:mt-[3vw] md:mt-[4vw]">
        {/* Header Section */}
        <Header />

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
        <section id="description" className="w-full px-[15vw] mb-[7vw]">
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
        <Roadmap />

        {/* Game Section */}
        <Games />

        {/* Footer Section */}
        <Footer />
      </main>
    </>
  );
}
