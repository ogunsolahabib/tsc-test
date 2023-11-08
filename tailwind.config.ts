import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'tsc-pink': '#F70087',
        'tsc-tomato-pink': '#F40256',
        'tsc-green': '#A0FF1F',
        'tsc-mid-grey': '#C3C3C3',
        'tsc-light-grey': '#F8F8F8',
        'tsc-error-red':'#F40256'
      },
      backgroundImage: {
        'tsc-gradient': "url('/tsc-green-blobs-bg.png'), linear-gradient(81deg, #A0FF1F 13.17%, #00ED71 86.83%)",
      },
    },
  },
  plugins: [],
}
export default config
