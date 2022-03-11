module.exports = {
    plugins: [
        require("autoprefixer"),
        require("css-mqpacker"),
        require("cssnano")({
            preset: [
                "default",
                {
                    discardComments: {
                        removeAll: false,
                    },
                    //normalizeUrl: false
                },
            ],
        }),
    ],
};