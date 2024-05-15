let array = [1,2,3,4,5,6,7,8]
let heros = ["batman", "superman", "antman" ]

console.log(array[0]);
console.log(heros[2]);

heros.push("flash")

console.log(heros);

console.log(heros.includes("hulk"));

const all_array =  [...array, ...heros ]

console.log(all_array);

let another_array = [1,1,2,[1,4,],1,6,[1,5,6,[8,9,[0,0,0] ]]]
let another_array_2 = another_array.flat(Infinity) 

console.log(another_array_2);



