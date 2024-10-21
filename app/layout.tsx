import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solami Beach Babes",
  description:
    "Welcome to Solami Beach Babes. Where the sun is always shining and everyone needs an oily rubdown. Put a few babes in your wallet and enjoy games, customization, tokenomics, random airdrops, and full frontal degeneracy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-bobaland antialiased">{children}</body>
    </html>
  );
}
