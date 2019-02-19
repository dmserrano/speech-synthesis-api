module.exports = {
    root: true,

    env: {
        node: true
    },

    extends: [
        "plugin:vue/essential",
        "plugin:vue/recommended"
    ],

    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",

        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

        "linebreak-style": [
            "error",
            "unix"
        ],

        "quotes": [
            "error",
            "double"
        ],

        "semi": [
            "error",
            "always"
        ],

        // Specific vue/eslint rules
        "vue/html-indent": ["error", 4],

        "vue/max-attributes-per-line": ["error", {
            "singleline": 2,
        }]
    },

    parserOptions: {
        parser: "babel-eslint"
    }
};
