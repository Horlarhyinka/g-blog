import type { Config, } from 'tailwindcss'

import defaultTheme from "tailwindcss/defaultTheme"


export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config

