//log to console the string

console.log('start of the queue');

//iterate and log the console iteration number

for (let i = 0; i < 100; i++) {
    console.log(i);
}

console.log('end of the loop');

setTimeout(() => {
    console.log('final code block to be executed');
}, 0);