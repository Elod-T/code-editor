import {
  defineConfig,
  transformerDirectives,
  transformerVariantGroup,
  presetUno,
  presetWebFonts,
} from "unocss";

export default defineConfig({
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    colors: {
      bg: "#282828",
      "bg-0": "#1d2021",
      "fg-0": "#fbf1c7",
      fg: "#ebdbb2",
      "fg-2": "#d5c4a1",
    },
  },
  presets: [
    presetUno(),
    presetWebFonts({
      provider: "google",
      fonts: {
        retro: "Press Start 2P",
      },
    }),
  ],
});
