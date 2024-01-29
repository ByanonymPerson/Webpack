import path from 'path';
import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { buildWebPack } from './config/build/buildWebPack';
import { BuildMode, BuildPaths } from './config/build/types/types';

type Mode = 'production' | 'development';

interface EnvVariables {
  mode: BuildMode,
  port: number,
}



export default (env: EnvVariables) => {
   const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry : path.resolve(__dirname, 'src' , 'index.tsx'),
        html : path.resolve(__dirname, 'public' , 'index.html'),
   }

  const config: webpack.Configuration = buildWebPack({
     port: env.port ?? 3000,
     mode: env.mode ?? 'development',
     paths
  })
  

  return config;
};
