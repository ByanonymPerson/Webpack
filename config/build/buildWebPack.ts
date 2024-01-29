import webpack from "webpack"
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { buildDevServer } from "./buildDevServer";
import { buildLoader } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolver } from "./buildResolver";
import { BuildOption } from "./types/types";


export function buildWebPack(options:BuildOption): webpack.Configuration {
    const {mode,port,paths} = options
    const isDev = mode === "development";
 
    return { 
    mode: mode ?? 'development',
    entry: paths.entry,
 output: {
   path: paths.output,
   filename: '[name].[contenthash].js',
   clean: true,
 },
 plugins: buildPlugins(options),
 module: {
   rules: buildLoader(options),
 },
 resolve: buildResolver(options),
 devtool: isDev && 'inline-source-map',
 devServer: isDev ? buildDevServer(options): undefined,

 };

}

