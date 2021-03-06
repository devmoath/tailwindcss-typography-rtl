# @devmoath/tailwindcss-typography-rtl [![Node.js Package](https://github.com/DevMoath/tailwindcss-typography-rtl/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/DevMoath/tailwindcss-typography-rtl/actions/workflows/npm-publish.yml) ![npm](https://img.shields.io/npm/dt/@devmoath/tailwindcss-typography-rtl)

Add RTL support for tailwindcss-typography plugin

> Package is deprecated: tailwind css v3.0 added [RTL support](https://tailwindcss.com/docs/hover-focus-and-other-states#rtl-support) so this package is no longer needed

## Problem description

if you are using [tailwindcss-typography](https://github.com/tailwindlabs/tailwindcss-typography) for RTL languages you will see the list point and blockquote border in the wrong direction (see the picture)

![before](img/before.png)

after using the plugin this issue should be fixed

![after](img/after.png)

## Installation

Install the plugin from npm:

```shell
# Using npm
npm install @devmoath/tailwindcss-typography-rtl

# Using Yarn
yarn add @devmoath/tailwindcss-typography-rtl
```

Then add the plugin to your tailwind.config.js file:

```javascript
// tailwind.config.js
module.exports = {
    theme: {
        // ...
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@devmoath/tailwindcss-typography-rtl'),
        // ...
    ],
};
```

## Usage

see the [tailwindcss-typography](https://github.com/tailwindlabs/tailwindcss-typography) usage
