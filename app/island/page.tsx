import Image from "next/image"; // Import Image from Next.js
import Link from "next/link"; // Import Link from Next.js
import Roadmap from "../components/roadmap";
import Footer from "../components/footer";

export default function Island() {
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

        {/* Island Section */}
        <section
          id="island"
          className="w-full flex flex-col items-center justify-center my-[7vw]"
        >
          <Image
            priority
            unoptimized
            src="/solami-beach-island.gif"
            alt="This is The Solami Beach Island"
            width={480}
            height={394}
            className="rounded-xl w-[50vw] border-4 md:border-8 border-bobacolor8"
          />
        </section>

        {/* Description Section */}
        <section
          id="description"
          className="w-full px-[4vw] sm:px-[6vw] md:px-[8vw] lg:px-[10vw] mb-[7vw]"
        >
          <h1 className="text-center text-black text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-impact leading-5 xs:leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-10">
            Soon <span className="text-bobacolor1">Solami Beach Island</span>{" "}
            will be opened.
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

        {/* Footer Section */}
        <Footer />
      </main>
    </div>
  );
}
