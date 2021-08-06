module.exports = function (options) {
    return {
        DEFAULT: {
            css: {
                'ol li, ul li': {
                    paddingRight: '1.75em',
                    paddingLeft: 0,
                },
                'ol li::before, ul li::before': {
                    right: '0.25em',
                    left: `auto`,
                },
                blockquote: {
                    paddingRight: '1em',
                    borderLeft: 0,
                    borderRight: `0.25em solid hsl(var(--bc)/40%);`,
                },
                'thead th, tbody td': {
                    textAlign: 'right',
                },
                pre: {
                    direction: 'ltr',
                },
            },
        },
    };
};
