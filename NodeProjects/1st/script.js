// console.log("console.log")

/* 1
const scr1 = require("./scr1");
const {func2, varle2} = require("./scr2");

scr1.func1(); func2();
console.log(`${scr1.varle1} | ${varle2}`);
*/

/* 2
console.log(`${__filename}\n${__dirname}`);
*/

/* 3
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("wakację", () => {
    console.log("Wakackę się skończyły!")
});

emitter.on("node", (value) => {
    console.log(`NodeJS language system | argument: ${value}`);
})

emitter.emit("wakację");
emitter.emit("node", 17);
*/

const fs = require("fs");
const path = require("path");

// path.join(ścieżka, callback)
// fs.readFile(ścieżka, callback)

fs.readFile(path.join(__dirname, "textion.txt"), "utf-8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    } console.log(data)
})