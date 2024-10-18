import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative flex flex-col">
      {/* Full-width background image */}
      <div
        className="w-full h-full bg-cover bg-top absolute inset-0"
        style={{
          backgroundImage: `url('/solami-background.png')`, // Set the background image
        }}
      />

      {/* Header */}
      <header className="flex flex-col items-center justify-center relative z-10">
        <Link href="/">
          {" "}
          {/* Make the logo clickable */}
          <Image
            src="/solami-logo.png" // Logo file name
            alt="Solami Logo"
            width={63} // Adjusted width
            height={63} // Adjusted height
            className="rounded-full w-[4vw] h-[4vw] mt-[2vh] sm:mt-[3vh] transition-transform duration-300 ease-in-out transform hover:scale-110" // Add hover effect
          />
        </Link>
        <Image
          src="/solami-beach-babes.png" // Title Logo file name
          alt="Solami Title Logo"
          width={2000} // Adjusted width
          height={1495} // Adjusted height
          className="w-[90vw] mt-[1vh] sm:mt-[2vh]"
        />
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center relative z-10 mt-[15vh]">
        {/* <div className="border-2 border-black px-60">
          <h1 className="text-center text-black text-4xl font-black">
            Welcome to{" "}
            <span className="text-amber-500">Solami Beach Babes</span>. Where
            the sun is always shining and everyone needs an oily rubdown. Put a
            few babes in your wallet and enjoy games, customization, tokenomics,
            random airdrops, and full frontal degeneracy.
          </h1>
        </div> */}
        {/* You can add your main content here */}
      </main>

      {/* Footer */}
      <footer className="flex justify-center items-center relative z-10">
        <Link
          href="https://x.com/SolamiBeachBabe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/twitter-logo.png" // Twitter logo file name
            alt="Twitter Logo"
            width={139} // Adjust as needed
            height={126} // Adjust as needed
            className="rounded-full w-[6vw] mx-[4vw] mr-[10vw] mb-[2vh] sm:mb-[3vh] transition-transform duration-300 ease-in-out transform hover:scale-110" // Add hover effect
          />
        </Link>
        <Link
          href="https://discord.gg/X5QEm6xGsY"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/discord-logo.png" // Discord logo file name
            alt="Discord Logo"
            width={123} // Adjust as needed
            height={114} // Adjust as needed
            className="rounded-full w-[6vw] mx-[4vw] ml-[10vw] mb-[2vh] sm:mb-[3vh] transition-transform duration-300 ease-in-out transform hover:scale-110" // Add hover effect
          />
        </Link>
      </footer>
    </div>
  );
}
