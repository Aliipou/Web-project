/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  // Enable dark mode
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Custom color palette
        blue: {
          50: "#e6f0ff",
          100: "#b3d1ff",
          200: "#80b3ff",
          300: "#4d94ff",
          400: "#1a75ff",
          500: "#0066ff",
          600: "#0052cc",
          700: "#003d99",
          800: "#002966",
          900: "#001433",
        },
        // Add dark mode specific colors
        dark: {
          bg: "#121212",
          card: "#1e1e1e",
          border: "#2a2a2a",
          text: "#e0e0e0",
          primary: "#4d94ff",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "Fira Code",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
        128: "32rem",
      },
      height: {
        "screen-90": "90vh",
      },
      maxWidth: {
        "8xl": "90rem",
      },
      boxShadow: {
        soft: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
        hover:
          "0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.01)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme("colors.blue.600"),
              "&:hover": {
                color: theme("colors.blue.700"),
              },
            },
            h1: {
              fontWeight: "700",
            },
            h2: {
              fontWeight: "600",
            },
            h3: {
              fontWeight: "600",
            },
          },
        },
        // Add dark mode typography
        dark: {
          css: {
            color: theme("colors.gray.300"),
            a: {
              color: theme("colors.blue.400"),
              "&:hover": {
                color: theme("colors.blue.300"),
              },
            },
            h1: {
              color: theme("colors.gray.100"),
            },
            h2: {
              color: theme("colors.gray.100"),
            },
            h3: {
              color: theme("colors.gray.100"),
            },
            h4: {
              color: theme("colors.gray.100"),
            },
            blockquote: {
              color: theme("colors.gray.400"),
              borderLeftColor: theme("colors.gray.700"),
            },
            strong: {
              color: theme("colors.gray.100"),
            },
            code: {
              color: theme("colors.gray.100"),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
      backgroundColor: ["active", "disabled", "dark"],
      textColor: ["active", "disabled", "dark"],
      borderColor: ["dark", "focus-visible"],
      ringColor: ["dark", "focus-visible"],
      ringOffsetColor: ["dark", "focus-visible"],
      typography: ["dark"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    // Add a plugin for a11y-friendly focus styles
    function ({ addBase, theme }) {
      addBase({
        // Improved focus styles for better accessibility
        [".focus-visible, :focus-visible"]: {
          outline: "none",
          boxShadow: `0 0 0 2px ${theme("colors.white")}, 0 0 0 4px ${theme(
            "colors.blue.500"
          )}`,
        },
        // Dark mode focus styles
        [".dark .focus-visible, .dark :focus-visible"]: {
          boxShadow: `0 0 0 2px ${theme("colors.gray.900")}, 0 0 0 4px ${theme(
            "colors.blue.400"
          )}`,
        },
        // Skip link styles for keyboard users
        [".sr-only.focus-visible, .sr-only:focus-visible"]: {
          position: "absolute",
          width: "auto",
          height: "auto",
          padding: theme("spacing.2"),
          margin: "0",
          overflow: "visible",
          clip: "auto",
          whiteSpace: "normal",
          backgroundColor: theme("colors.blue.600"),
          color: theme("colors.white"),
          fontSize: theme("fontSize.sm"),
          fontWeight: theme("fontWeight.medium"),
          borderRadius: theme("borderRadius.md"),
          boxShadow: theme("boxShadow.lg"),
          zIndex: "999",
        },
      });
    },
  ],
};
