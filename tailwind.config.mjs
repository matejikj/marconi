/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        bg: "var(--color-bg)",
        "bg-alt": "var(--color-bg-alt)",
        "dark-section": "var(--color-dark-section)",
        "text-main": "var(--color-text-main)",
        "text-secondary": "var(--color-text-secondary)",
        "text-muted": "var(--color-text-muted)",
        border: "var(--color-border)",
        "border-strong": "var(--color-border-strong)",
        "primary-05": "var(--color-primary-05)",
        "primary-10": "var(--color-primary-10)",
      },
      fontFamily: {
        heading: ["Sora", "Manrope", "Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      maxWidth: {
        shell: "1280px",
        "content-safe": "1140px",
        prose: "680px",
      },
      spacing: {
        18: "4.5rem",
        30: "7.5rem",
        40: "10rem",
      },
      borderRadius: {
        card: "12px",
        image: "20px",
      },
      boxShadow: {
        soft: "0 12px 32px rgba(17, 24, 39, 0.08)",
        header: "0 8px 24px rgba(15, 23, 32, 0.06)",
      },
      fontSize: {
        "display-hero": ["72px", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        h2: ["44px", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        h3: ["28px", { lineHeight: "1.3" }],
        "body-lg": ["20px", { lineHeight: "1.6" }],
        body: ["18px", { lineHeight: "1.65" }],
        small: ["14px", { lineHeight: "1.5" }],
      },
      transitionTimingFunction: {
        "power2-out": "cubic-bezier(0.22, 1, 0.36, 1)",
        "power3-out": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        fast: "300ms",
        normal: "600ms",
        slow: "900ms",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};

