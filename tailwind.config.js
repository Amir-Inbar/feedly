/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens: {
                mobile: '320px',
                tablet: '768px',
                desktop: '1020px',
            },
            boxShadow: {
                'navbar-bottom': '0px 7px 7px 0px #6D6D6D0A',
            },
            fontSize: {
                'xxs': '8px',
            },
            fontFamily: {
                sans: ['DM Sans', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
            },
            colors: {
                navbar: {
                    active: '#2DB8A1',
                    inactive: '#949796',
                },
                placeholderColor: '#949796',
                post: {
                    user: {
                        name: "#282F2D",
                        postTime: "#949796",
                    },
                    like: {
                        count: "#737877",
                        active: '#0A66C2',
                        inactive: '#484E4C',
                    },
                }
            }
        },
    },
    plugins: [],
};
