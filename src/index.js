const plugin = require('tailwindcss/plugin');

const round = (num) => {
    return num
        .toFixed(7)
        .replace(/(\.[0-9]+?)0+$/, '$1')
        .replace(/\.0$/, '');
};

const em = (px, base) => {
    return `${round(px / base)}em`;
};

module.exports = plugin(function () {}, {
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        'ol li, ul li': {
                            paddingRight: em(28, 16),
                            paddingLeft: 0,
                        },
                        'ol li::before, ul li::before': {
                            right: em(4, 16),
                            left: `auto`,
                        },
                        blockquote: {
                            paddingRight: em(20, 20),
                            borderLeft: 0,
                            borderRight: `${em(4, 16)} solid hsl(var(--bc)/40%);`,
                        },
                        'thead th, tbody td': {
                            textAlign: 'right',
                        },
                        pre: {
                            direction: 'ltr',
                        },
                    },
                },
            },
        },
    },
});
