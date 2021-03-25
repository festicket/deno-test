import { formatText } from './utils.ts';


window.addEventListener("load", (e) => {
    console.log(e.type);
  });

await Deno.permissions.request({ name: "net" });

const res = await fetch("https://api.kanye.rest?format=text");
const body = await res.text();

const formattedBody = formatText(body);

console.log(formattedBody);
