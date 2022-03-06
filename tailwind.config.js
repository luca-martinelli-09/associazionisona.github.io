module.exports = {
  purge: {
    enabled: true,
    content: ["./*.html"],
  },
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        mono: ["Cascadia Code", "monospace", "ui-monospace"],
        serif: ["Bitter", "serif", "ui-serif"],
      },
      boxShadow: {
        "offset-white": "3px 3px white",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fill, minmax(0, 1fr))",
      }
    },
  },
  variants: {
    extend: {
      ringWidth: ["active"],
      ringColor: ["active"],
    },
  },
  plugins: [],
};
