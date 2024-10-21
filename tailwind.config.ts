import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bobacolor: "#ad0082",
      },
      fontFamily: {
        australian: ["Australian", "sans-serif"],
        bobaland: ["Bobaland", "sans-serif"],
        geistMono: ["Geist Mono", "monospace"],
        geistSans: ["Geist", "sans-serif"],
        impact: ["Impact", "sans-serif"],
      },
      screens: {
        xs: "512px", // Custom breakpoint for xs
      },
    },
  },
  plugins: [],
};
export default config;
