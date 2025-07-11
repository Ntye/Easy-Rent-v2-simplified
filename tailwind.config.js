// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
//

// tailwind.config.js
import defaultTheme from "tailwindcss/defaultTheme";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        body: ['Poppins', 'system-ui', 'sans-serif'],
        title: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#e9f1ff',
          100: '#c9ddff',
          200: '#a0c2ff',
          300: '#78a7ff',
          400: '#4e8dff',
          500: '#3674f4',
          600: '#2474ff',
          700: '#053287',
          800: '#0c2555',
          900: '#041735',
          DEFAULT: '#155acd',
        },
        background: {
          light: '#FFFFFF',
          dark: '#0F172A',
          whitish: '#F6F7F9',
          darkish: '#1B325F',
          green: '#DCFAED',
          orange: '#FFE5A1',
          red: '#FDE2E2',
          yellow: '#F2E2AB',
          blue: '#092D3E',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          500: '#22c55e',
          700: '#15803d',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          500: '#ef4444',
          700: '#b91c1c',
        },
        warning: {
          50: '#fff7ed',
          100: '#ffedd5',
          500: '#f97316',
          700: '#c2410c',
        },
        surface: {
          light: '#F5F7FA',
          dark: '#1E293B',
        },
        card: {
          light: '#FFFFFF',
          dark: '#1E293B',
        },
        border: {
          light: '#E5E7EB',
          dark: '#334155',
        },
        foreground: {
          light: "var(--foreground)"
        },
        text: {
          primary: '#083A50',
          secondary: '#90A3BF',
          light: '#1F2937',
          "light-secondary": '#4B5563',
          "light-tertiary": '#9CA3AF',
          dark: '#F9FAFB',
          "dark-secondary": '#E5E7EB',
          "dark-tertiary": '#9CA3AF',
          green: '#0EAD69',
          orange: '#F49A47',
          red: '#FF5D47',
          yellow: '#EFBB3B',
          blue: '#1BA0E2',
        },
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 12px 24px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'card': '0.75rem',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme('colors.text.light'),
          }
        },
        dark: {
          css: {
            color: theme('colors.text.dark'),
          }
        }
      }),
      keyframes: {
        'icon-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        // Include other keyframes here
      },
      animation: {
        'icon-bounce': 'icon-bounce 1.5s ease-in-out infinite',
        // Include other animations here
      },
    },
  },
  plugins: [],
};

export default config;
