import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://solami.endhonesa.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "Solami Beach Babes",
    description:
      "Welcome to Solami Beach Babes. Where the sun is always shining and everyone needs an oily rubdown. Put a few babes in your wallet and enjoy games, customization, tokenomics, random airdrops, and full frontal degeneracy.",
    url: "https://solami.endhonesa.com",
    siteName: "Solami Beach Babes",
    images: "/solami-preview-banner.png",
    locale: "en-US",
    type: "website",
  },
  title: "Solami Beach Babes",
  description:
    "Welcome to Solami Beach Babes. Where the sun is always shining and everyone needs an oily rubdown. Put a few babes in your wallet and enjoy games, customization, tokenomics, random airdrops, and full frontal degeneracy.",
  twitter: {
    card: "summary_large_image",
    title: "Solami Beach Babes",
    description:
      "Welcome to Solami Beach Babes. Where the sun is always shining and everyone needs an oily rubdown. Put a few babes in your wallet and enjoy games, customization, tokenomics, random airdrops, and full frontal degeneracy.",
    siteId: "1754164430424645634",
    creator: "@HammsNft",
    creatorId: "1441542915067559936",
    images: ["https://solami.endhonesa.com/solami-preview-banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-bobaland antialiased">
        <div className="min-h-screen bg-bobacolor4 relative flex flex-col">
          {/* Full-width background image */}
          <div className="w-full absolute inset-0 bg-solami-bg-0" />

          {/* Left Background Image */}
          <div className="absolute inset-y-[45vw] left-0 w-[30vw] bg-left-image" />

          {/* Right Background Image */}
          <div className="absolute inset-y-[55vw] right-0 w-[40vw] bg-right-image" />

          {/* Main Content */}
          {children}
        </div>
      </body>
    </html>
  );
}
