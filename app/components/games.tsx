import Image from "next/image";
import Link from "next/link";

export default function Games() {
  return (
    <>
      {/* Game Section */}
      <section id="game" className="w-full bg-solami-bg-melt -mt-[40vw] z-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row pt-[15vw] pb-[70vw]">
          <div className="sm:col-span-2">
            <h2 className="text-white text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center uppercase font-impact">
              the GAME
            </h2>
          </div>
          <div className="mx-[5vw] sm:mx-0 sm:ml-[5vw] sm:mr-[1vw] mt-[5vw]">
            <Link href="/island">
              <Image
                unoptimized
                src="/solami-beach-island.gif"
                alt="This is The Solami Beach Island"
                width={480}
                height={394}
                className="rounded-xl w-[100vw] sm:w-[50vw] border-4 md:border-8 border-bobacolor8 hover-scale"
              />
            </Link>
          </div>
          <div className="mx-[5vw] sm:mx-0 sm:ml-[1vw] sm:mr-[5vw] mt-[5vw]">
            <h3 className="text-bobacolor9 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-left mb-[5vw]">
              &lt;Games&gt;
            </h3>
            <h4 className="text-bobacolor9 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-left">
              &lt;Babe Run&gt;
            </h4>
            <h4 className="text-bobacolor9 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-left mb-[5vw]">
              Side scroller where you need to avoid dumb stuff and horny
              lifeguards.
            </h4>
            <h4 className="text-bobacolor9 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-left">
              &lt;Boob Bounce&gt;
            </h4>
            <h4 className="text-bobacolor9 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-left">
              Tap the Boobas for bonus $BABEJUICE each day.
            </h4>
          </div>
        </div>
      </section>
    </>
  );
}
