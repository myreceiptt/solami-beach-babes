"use client";

import Image from "next/image";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import WalletBalance from "./balance";

export default function Token() {
  return (
    <>
      {/* Token Section */}
      <section id="token" className="w-full -mt-[10vw]">
        <div className="flex flex-col items-center justify-center px-[4vw] sm:px-[6vw] md:px-[8vw] lg:px-[10vw]">
          <h2 className="text-bobacolor10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-australian">
            The Token
          </h2>

          <h3 className="text-bobacolor10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center uppercase font-impact">
            $BABEJUICE
          </h3>

          <div className="rounded">
            <WalletMultiButton style={{}} />
          </div>

          <WalletBalance />

          <Image
            unoptimized
            src="/babe-juice-coin.gif"
            alt="This is $BABEJUICE Token"
            width={542}
            height={543}
            className="rounded-full w-[20vw] hover-scale"
          />

          <h4 className="text-bobacolor10 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center">
            Used for buying new outfits and legendary loot boxes containing the
            rarest traits.
          </h4>
        </div>
      </section>
    </>
  );
}
