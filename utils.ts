
import { bgGreen, bold, red } from "./deps.ts";

export function add(a: number, b: number) {
    return a + b;
}

export function formatText(text: string) {
    return bgGreen(bold(red(text)));
}