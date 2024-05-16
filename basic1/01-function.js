function myname() {
    console.log("s");
    console.log("a");
    console.log("q");
    console.log("i");
    console.log("b");
}
// console.log(myname());

function login(halwa) {
    if (halwa === undefined) {
        console.log("please inter your name");
        return
    }

    return `${halwa} is longin`
}
// console.log(login("mr--saqi"));
// console.log(login());


function sum(num1, num2){
    console.log(` ${num1} + ${num2} = ${num1 + num2}`)
}


sum(5 , 10)


function min(num1, num2){
    console.log(` ${num1} - ${num2} = ${num1 - num2}`)
}


min(5 , 10)

function mul(num1, num2){
    console.log(` ${num1} * ${num2} = ${num1 * num2}`)
}


mul(5 , 10)


function div(num1, num2){
    console.log(` ${num1} / ${num2} = ${num1 / num2}`)

}

div(5 , 10)


function table(num, num2 ) {
    
    
for (let i = 1; i <=num2; i++) {
   
    console.log(`${num} * ${i} = ${num*i} `);
}

}

table(10, 9)


