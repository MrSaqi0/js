
let arrayone = [1,2,3,4,]
let array2 = []


for (let i = 0; i < arrayone.length; i++) {
    
     array2.push(arrayone[i])
}

// console.log(array2);


let uesrs = []
let activeUsers = []



function createUser(name, age , number, city ,email, verify) {

    return{
        name: name,
        age : age,
        number: number,
        city : city,
        email :email,
        verify: verify
    }
   
}

// console.log(createUser('saqib', 23, 03427659009 , 'gujranwala', 'saqib@gmail.com'  ))


function addUser(user) {

    uesrs.push(user)
}





// addUser('ali')
// addUser('raza')
// addUser(`and`)
addUser(createUser('saqib', 23, 03427659009 , 'gujranwala', 'saqib@gmail.com',true ))
addUser(createUser('raza', 23, 03226636865 , 'gujranwala', 'raza@gmail.com' , false ))

function getActiveUsers(userArray) {

    for (let i = 0; i < userArray.length; i++) {
       
        if (userArray[i].verify === true) {
            activeUsers.push(userArray[i])
            //  console.log(userArray[i]);
      
                      
        }
        
    
    }
    
}

getActiveUsers(uesrs);

function verifyUser(params) {
    
}

 console.log(activeUsers)

