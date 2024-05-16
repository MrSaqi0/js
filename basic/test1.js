const fullname = "saqib bashir"
const accountIdid = "saqib@gmail.com"
const accountcity = "gujranwala"
let accountpassword = "12345"
let accountState = "gujranwala"
let myarray = ["batman", "superman", "flash", "hulk", "thor", "antman", "blackpanther" ]


const  user = {
    name : fullname,
    id : accountIdid,
    city : accountcity,
    password : accountpassword,
    state : accountState ,
     heros :  myarray
}

for (let i = 0; i < user.heros.length; i++) {

    console.log(user.heros[i]);

    
}

