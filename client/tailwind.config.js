module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Vérifiez les chemins
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 2.5s infinite',
        'fade-in': 'fade-in 1s ease-in-out',
        'fade-in-left': 'fade-in-left 1s ease-in-out',
        'fade-in-right': 'fade-in-right 1s ease-in-out',
        'scale-up': 'scale-up 1.2s ease-in-out',
      },
      colors: {
        'soft-pink': '#C38EB4',
        'light-pink': '#E1CBD7',
        'soft-blue': '#96ABCF',
        'dark-blue': '#26425A',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-up': {
          '0%': { opacity: '0.8', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
