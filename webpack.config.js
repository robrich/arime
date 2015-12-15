module.exports = {
    entry: "./src/arime.js",
    output: {
        libraryTarget:'var',
        library:'arime',
        path: __dirname,
        filename: "./build/arime.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    }
};