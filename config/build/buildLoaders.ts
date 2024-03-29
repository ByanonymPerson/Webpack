import { ModuleOptions } from "webpack";
import { BuildOption } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoader(options:BuildOption):ModuleOptions['rules'] {
    const isDev = options.mode === "development";

    const scssLoader = {
            test: /\.s[ac]ss$/i,
            use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
            ],
        }

     const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
        } 

     return [
        scssLoader,
        tsLoader
        ]
    }