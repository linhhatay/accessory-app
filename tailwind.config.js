module.exports = {
    content: ['./**/*.pug'],
    theme: {
        extend: {},
        screens: {
            sm: {
                max: '549px',
            },
            md: {
                max: '849px',
            },
            lg: {
                min: '1024px',
            },
        },
        fontFamily: {
            sans: ['Montserrat', 'sans-serif'],
        },
    },
    plugins: [require('@tailwindcss/line-clamp')],
};
