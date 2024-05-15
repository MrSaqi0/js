//singleton
//object.create


//objectsliterals
const mysym = Symbol("Key1")
const my_Object ={
    name : "mr--saqi" ,
    age : 26 ,
    email : "mrsaqi@gmail.com" ,
    [mysym] : 1 ,
    adress : "gujranwala" ,
    isLoggedIn : true ,
    lastLogInDay : ["monday ", "sunday" ]
}  

console.log(my_Object)
console.log(my_Object.email)
console.log(typeof my_Object[mysym])