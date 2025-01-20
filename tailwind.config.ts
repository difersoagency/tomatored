import type { Config } from "tailwindcss";

export default {
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
        'primary': '#CF5260',
        'secondary': '#F0F0F0'
      },
      backgroundImage:{
        'tomato': "url('/images/tomato-02.png')",
        'cut-tomato': "url('/images/tomatoo-04.png')"
      },
      fontFamily: {
        'climate-crisis': ['ClimateCrisis', 'sans-serif'], // Menambahkan font custom
      },
    },
  },
  plugins: [],
} satisfies Config;
