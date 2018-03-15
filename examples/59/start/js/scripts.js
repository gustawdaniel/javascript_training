let s = "😀";

console.log(s);
console.log(s.length);
console.log(s[0]);
console.log(s[1]);

for(let c of s) {
    console.log(c);
}

console.log([...s].length);

s = "Witam =😀=";

let regex = /=(.)=/u;

console.log(regex.exec(s));

let emails = "a@ok.plgb@xx.pl";

let emailRegex = /\w+@\w+\.[a-z]{2,3}?/y;

let result = null;

while (result = emailRegex.exec(emails)) {
    console.log(emailRegex.lastIndex);
    console.log(result);
}