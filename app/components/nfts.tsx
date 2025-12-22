import Image from "next/image";
import Link from "next/link";

export default function Nfts() {
  return (
    <>
      {/* NFTs Section */}
      <section id="nfts" className="w-full bg-solami-bg-bra z-10">
        <div className="grid grid-cols-10 grid-rows-8 grid-flow-row pt-[13vw] pb-[100vw]">
          <div className="col-span-5 row-span-6">
            <Image
              src="/nft-collections-1.png"
              alt="This is Sneak Peek of NFT Collections"
              width={1164}
              height={1492}
              className="w-[50vw]"
            />
          </div>
          <div className="grid grid-rows-subgrid col-span-5 row-span-6">
            <div className="row-start-2 row-span-5">
              <Link href="/minting">
                <Image
                  unoptimized
                  src="/nft-collections-2.gif"
                  alt="This is Sneak Peek of NFT Collections"
                  width={1071}
                  height={1020}
                  className="w-[50vw] hover-scale"
                />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-subgrid col-span-10 row-span-2">
            <div className="col-start-4 col-span-6 row-span-2">
              <h2 className="text-bobacolor7 text-2xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-left font-bobaland">
                Solami Beach Babes duh!
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
