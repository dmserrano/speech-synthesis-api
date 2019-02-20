module.exports = {
    publicPath: process.env.NODE_ENV === "production"
        ? "/speech-synthesis-api/"
        : "/",

    css: {
        loaderOptions: {
            css: {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        },
    },

    outputDir: "docs"
};