import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOption } from "./types/types";

export function buildDevServer (options:BuildOption): DevServerConfiguration {
    return{
    port: options.port ?? 3000,
    open: true,
   }
}