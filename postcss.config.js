let tailwindConfig = process.env.HUGO_FILE_TAILWIND_CONFIG_JS || './tailwind.config.js';
const tailwind = require('tailwindcss')(tailwindConfig);
const postcssEnvFunction = require("postcss-env-function");
const autoprefixer = require('autoprefixer');

module.exports = {
    // eslint-disable-next-line no-process-env
    plugins: [tailwind, postcssEnvFunction({
        environmentVariables: {
            '--sm': '640px',
            '--md': '768px',
            '--lg': '1024px',
            '--xl': '1536px'
        },
    }), ...(process.env.HUGO_ENVIRONMENT === 'production' ? [autoprefixer] : [])],
};
