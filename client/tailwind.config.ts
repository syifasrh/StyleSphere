import type { Config } from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT";

const config = withMT({
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    keyframes: {
      scroll: {
        "0%": {
          transform: "translateX(0%)",
        },
        "100%": {
          transform: "translateX(-100%)",
        },
      },
    },
    animation: {
      scroll: "scroll 15s linear infinite",
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
});
export default config;
