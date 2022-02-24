const path = require("path");

module.exports = {
    mode: "development",
    devtool:"inline-source-map",
    entry:{
        app:"./src/app.ts"
    },
    output:{
        filename:"[name].js",
        path: path.resolve(__dirname,"build"),
    },
    module:{
        rules:[
            {
                test: /\.ts$/,
                exclude:/node_modules/,
                use:["ts-loader"]
            }
        ]
    },
    resolve:{
        extensions:[".ts",".js"]
    }
}