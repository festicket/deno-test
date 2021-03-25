const res = await fetch("https://api.kanye.rest?format=text");
const body = await res.text();

console.log(body);
