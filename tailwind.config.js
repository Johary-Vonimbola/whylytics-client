/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem"
      }
      ,
      colors: {
        primary: {
          DEFAULT: "#6366F1",
          light: "#A5B4FC",
          dark: "#4F46E5",
        },
        background: "#F8FAFC",
        surface: "#FFFFFF",
        border: "#E2E8F0",

        text: {
          primary: "#0F172A",
          secondary: "#64748B",
        },

        success: "#4ADE80",
        warning: "#FBBF24",
        danger: "#F87171",
      },

      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.05)",
        glow: "0 0 15px rgba(99,102,241,0.25)",
      },

      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #6366F1, #4F46E5)",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
}

