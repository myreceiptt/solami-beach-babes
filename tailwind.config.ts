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
        bobacolor1: "#ad0082",
        bobacolor2: "#ff51ed",
        bobacolor3: "#732daf",
        bobacolor4: "#a800ff",
        bobacolor5: "#00a569",
        bobacolor6: "#ff00a8",
        bobacolor7: "#00ff7e",
        bobacolor8: "#3d8d97",
        bobacolor9: "#ba01ff",
        bobacolor10: "#ba01ff",
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
