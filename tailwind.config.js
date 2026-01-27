/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          navy: '#0A2540',
          DEFAULT: '#0A2540',
        },
        accent: {
          orange: '#F16A22',
          DEFAULT: '#F16A22',
        },
        text: {
          primary: '#636B88',
          secondary: '#636B88',
        },
        background: {
          light: '#F9FAFB',
          DEFAULT: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['"Open Sans"', 'Arial', '"Times New Roman"', 'Georgia', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 1px 3px 0 rgba(10, 37, 64, 0.1), 0 1px 2px 0 rgba(10, 37, 64, 0.06)',
        'card': '0 4px 6px -1px rgba(10, 37, 64, 0.1), 0 2px 4px -1px rgba(10, 37, 64, 0.06)',
      },
      borderRadius: {
        'saas': '6px',
      }
    },
  },
  plugins: [],
}


