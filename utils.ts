import { bgGreen, bold, red } from "./deps.ts";

export function formatText(text: string) {
  return red(bgGreen(bold(text)));
}

export function add(a: number,b: number) {
    return a +b;
}
