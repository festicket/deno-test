import { formatText } from "./utils.ts";

window.Deno?.permissions.request({ name: "net" });

window.addEventListener("load", (e) => {
  console.log(e.type);
});

const res = await fetch("https://api.kanye.rest?format=text");
const body = await res.text();

console.log(formatText(body));
