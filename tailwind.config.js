/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            animation: {
                labelUp: 'labelUp 0.2s ease forwards',
                fadeIn: 'fadeIn 0.2s ease forwards',
                fadeOut: 'fadeOut 0.2s ease forwards',
                vibration: 'vibration 0.3s linear backwards',
                sideMove: 'sideMove 0.8s infinite forwards',
            },
            keyframes: {
                labelUp: {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(-150%)' },
                },
                fadeIn: {
                    '0%': { transform: 'scale(0)' },
                    '100%': { transform: 'scale(1)' },
                },
                fadeOut: {
                    '0%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(0)' },
                },
                vibration: {
                    '0%': {
                        transform: 'translateX(0)',
                    },
                    '10%, 50%, 90%': {
                        transform: 'translateX(-3px)',
                    },
                    '30%, 70%': {
                        transform: 'translateX(3px)',
                    },
                    '100%': {
                        transform: 'translateX(0)',
                    },
                },
                sideMove: {
                    '0%, 100%': { transform: 'translateX(0)' },
                    '50%': { transform: 'translateX(3px)' },
                },
            },
        },
        screens: {
            xs: '400px',
            sm: '640px',
            // => @media (min-width: 640px) { ... }

            md: '768px',
            // => @media (min-width: 768px) { ... }

            lg: '1024px',
            // => @media (min-width: 1024px) { ... }

            xl: '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
    },
    plugins: [
        function ({ addVariant }) {
            addVariant('child', '& > *');
            addVariant('child-hover', '& > *:hover');
        },
    ],
};
