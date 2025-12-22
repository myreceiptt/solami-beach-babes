import Image from "next/image";

export default function Roadmap() {
  return (
    <>
      {/* Roadmap Section */}
      <section id="roadmap" className="w-full -mt-[15vw] z-0">
        <Image
          src="/road-map-wood.png"
          alt="This is Roadmap Wood Sign"
          width={2000}
          height={1029}
          className="w-full h-full mb-[2vw]"
        />
        <div className="flex flex-col items-center justify-center text-center px-[4vw] sm:px-[8vw] md:px-[12vw] lg:px-[16vw] font-bobaland">
          <h3 className="text-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-normal xs:leading-normal sm:leading-snug md:leading-snug lg:leading-relaxed xl:leading-relaxed">
            Degen Mint: <span className="text-bobacolor4">3,333ish</span> Babes
          </h3>
          <h4 className="text-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none xs:leading-none sm:leading-none md:leading-none lg:leading-tight xl:leading-tight">
            - Get to Solami &quot;Beach Island&quot;.
          </h4>
          <h4 className="text-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none xs:leading-none sm:leading-none md:leading-none lg:leading-tight xl:leading-tight">
            - Launch the staking website.
          </h4>
          <h4 className="text-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none xs:leading-none sm:leading-none md:leading-none lg:leading-tight xl:leading-tight">
            - Start running with Babe-Run.
          </h4>
          <h4 className="text-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none xs:leading-none sm:leading-none md:leading-none lg:leading-tight xl:leading-tight">
            - Introduce Boob Slap mini-games.
          </h4>
          <h4 className="text-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none xs:leading-none sm:leading-none md:leading-none lg:leading-tight xl:leading-tight mb-[2vw]">
            - Stake for <span className="text-bobacolor5">$BABEJUICE</span>!
          </h4>
          <p className="text-black text-sm xs:text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-none xs:leading-tight sm:leading-tight mb-[2vw]">
            Launch a full online shop featuring all-new, sexy traits to spend{" "}
            <span className="text-bobacolor5">$BABEJUICE</span> on (some may be{" "}
            <span className="text-bobacolor6">NSFW</span> &#128523;).
          </p>
          <p className="text-black text-sm xs:text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-none xs:leading-tight sm:leading-tight mb-[2vw]">
            Recruit some <span className="text-bobacolor4">OnlyFan models</span>{" "}
            to create silly marketing videos for our website.
          </p>
          <p className="text-black text-sm xs:text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-none xs:leading-tight sm:leading-tight mb-[2vw]">
            Try not to blow all the mint funds on booze and rug NFTs.
          </p>
          <p className="text-black text-sm xs:text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-none xs:leading-tight sm:leading-tight mb-[2vw]">
            <span className="text-bobacolor5">Airdrop</span> some Gen Z rare
            babes to big holders and lucky bozos.
          </p>
          <p className="text-black text-sm xs:text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-none xs:leading-tight sm:leading-tight mb-[2vw]">
            Get Jaylene into our Discord so we can all simp for her. &#128516;.
          </p>
          <p className="text-black text-sm xs:text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-none xs:leading-tight sm:leading-tight mb-[2vw]">
            Try not to implode when our typical Solami minters mint for{" "}
            <span className="text-bobacolor6">0.04 SOL</span> and then
            panic-sell for <span className="text-bobacolor6">0.03 SOL</span>{" "}
            four minutes later.
          </p>
          <p className="text-black text-sm xs:text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-none xs:leading-tight sm:leading-tight mb-[2vw]">
            Convince Elon to take us to Mars in his spaceship.
          </p>
        </div>
      </section>
    </>
  );
}
