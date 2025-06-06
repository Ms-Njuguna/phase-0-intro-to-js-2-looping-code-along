// Code your solutions in this file
//

function  writeCards(names, eventName) {
    let messages = [];

    for(let i = 0; i < names.length; i++) {
       messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);   
    }
    return messages;
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));


function countDown() {
    let counter = 10;

    while(counter >= 0) {
        console.log(counter);
        counter --;
    }
}

countDown();
