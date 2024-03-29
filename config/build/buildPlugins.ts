import { Configuration } from "webpack";
import webpack from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOption } from "./types/types";
import HtmlWebpackPlugin from "html-webpack-plugin";

export function buildPlugins({mode, paths}: BuildOption):Configuration['plugins']  {
    const isDev = mode === "development";
    const isProd = mode === "production";

    const plugins : Configuration['plugins'] = [
        new HtmlWebpackPlugin({ template: paths.html}),
    ]
    if(isDev) {
       plugins.push(new webpack.ProgressPlugin())
    }
    if(isProd){
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
           }))

    }
    return plugins;
        
        }