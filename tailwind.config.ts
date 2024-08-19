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
        bg_color: "#F8F9FB",
        pry: "#2F2F2F",
        sec: "#6C757D",
        tertiary: "#372AA4",
        orange: "#FF6A2C",
        gray: "#E8E8E8",
      },
    },
    boxShadow: {
      standard: "0 2px 30px 0 #00000005",
      btn: "0 4px 10px 0 #244FBE1A",
    },
  },
  plugins: [],
};
export default config;
