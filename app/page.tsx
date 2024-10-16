import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative flex flex-col">
      {/* Full-width background image */}
      <div
        className="w-full h-full bg-cover bg-top absolute inset-0"
        style={{
          backgroundImage: `url('/solami-website.jpg')`, // Set the background image
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
            className="rounded-full w-[4vw] h-[4vw] mt-[1vh] sm:mt-[2vh] transition-transform duration-300 ease-in-out transform hover:scale-110" // Add hover effect
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
      <main className="flex-grow flex items-center justify-center relative z-10">
        <div className="h-[720px] border-2 border-black">
          {/* You can add your main content here */}
        </div>
        <p className="text-white text-lg">
          Welcome to <span className="text-amber-500">Solami Beach Babes</span>.
          Where the sun is always shining and everyone needs an oily rubdown.
          Put a few babes in your wallet and enjoy games, customization,
          tokenomics, random airdrops, and full frontal degeneracy.
        </p>
      </main>

      {/* Footer */}
      <footer className="flex justify-center items-center py-4 relative z-10">
        <Link
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/twitter-logo.png" // Twitter logo file name
            alt="Twitter Logo"
            width={40} // Adjust as needed
            height={40} // Adjust as needed
            className="mx-4 transition-transform duration-300 ease-in-out transform hover:scale-110" // Add hover effect
          />
        </Link>
        <Link
          href="https://discord.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/discord-logo.png" // Discord logo file name
            alt="Discord Logo"
            width={40} // Adjust as needed
            height={40} // Adjust as needed
            className="mx-4 transition-transform duration-300 ease-in-out transform hover:scale-110" // Add hover effect
          />
        </Link>
      </footer>
    </div>
  );
}
