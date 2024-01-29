import { Configuration } from "webpack";
import { BuildOption } from "./types/types";

export function buildResolver(options:BuildOption): Configuration["resolve"] {
    return  {
        extensions: ['.tsx', '.ts', '.js'],
      }

}