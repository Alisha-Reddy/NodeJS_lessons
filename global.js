// Global object

// console.log(global);

setTimeout(() => {
    console.log("Time is out");
    clearInterval(int);
}, 3000);

var int = setInterval(() => {
    console.log("In the interval");
}, 1000);

console.log(__dirname);
console.log(__filename);