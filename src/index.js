const plugin = require('tailwindcss/plugin');
const styles = require('./styles');

module.exports = plugin.withOptions(
    function (options = {}) {
        return function ({ addUtilities, e, theme, variants }) {};
    },
    function (options = {}) {
        return {
            theme: { extend: { typography: styles(options) } },
        };
    }
);
