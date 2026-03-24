/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        ember: {
          DEFAULT: '#E8652A',
          light: '#F0884E',
          dim: '#B84D1E',
          glow: 'rgba(232, 101, 42, 0.12)',
        },
        void: '#08080B',
        ground: '#0D0D11',
        surface: {
          1: '#131317',
          2: '#1A1A20',
          3: '#222228',
          raised: '#2A2A32',
        },
        border: {
          subtle: '#1E1E26',
          default: '#2A2A34',
          strong: '#3A3A46',
          ember: 'rgba(232, 101, 42, 0.25)',
        },
        trust: { DEFAULT: '#3B9ECC', dim: 'rgba(59, 158, 204, 0.12)' },
        growth: { DEFAULT: '#5EBB6E', dim: 'rgba(94, 187, 110, 0.12)' },
        caution: { DEFAULT: '#CCB43B', dim: 'rgba(204, 180, 59, 0.12)' },
        critical: { DEFAULT: '#E84040', dim: 'rgba(232, 64, 64, 0.12)' },
      },
      fontFamily: {
        display: ["'Anybody'", 'sans-serif'],
        body: ["'Source Serif 4'", 'serif'],
        mono: ["'IBM Plex Mono'", 'monospace'],
      },
      textColor: {
        primary: '#EAEAEF',
        secondary: '#9898AC',
        tertiary: '#5E5E72',
        inverse: '#08080B',
      },
    },
  },
};
