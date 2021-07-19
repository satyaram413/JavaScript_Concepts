const user1={
    name="tim",
    score=4,
    increment=function(){
    user1.score++;
    }

}

//OR

const user2={
}
user2.name="tim";
user2.score=3;
user2.increment=function(){
    user2.score++;
    }

//OR 

//Object.create is going to give us fine-grained control over out object later on
const user3= Object.create(null)
user3.name="tim";
user3.score=5;
user3.increment=function(){
    user3.score++;
    }

    //All mentioned methods break DRY principle

    // Solution 1:
function userCreator(name, score)
{
    const newUser={};
    newUser.name= name;
    newUser.score=score;
    newUser.increment=function()
    {
        newUser.score++;

    };
    return newUser;
}
const user1= userCreator("Satya", 100);
const user2= userCreator("Ram",200);

user1.increment();

// Problem with Solution 1, is that whenever we are creating any user object, we are attaching an increment object to it
// which is function code, this occupies lots of space. Also if in case we have to add any additional feature to it, we have to add it to main object

// Solution 2:
function userCreator1(name, score)
{
    const newUser=Object.create(userFunctionScore);
    
    // we are binding this newUser object with an object, 
    // not creating a property but there is alink, newUSer has a link with userFunctionStore
    //next time when we do newUser.increment() and incase if we dont have
    // increment roperty for an object, we bind it us

    // How the link is made between newUser and userFunctionScore?
    // Ans: when we create an object with notation Object.create(userFunction), we are actually adding a property __proto__ { __proto__: } this property actually
    // responsible for linking. When property on user is called, javascript doesnt immediately throw us the error, instead it goes into the __proto_ property and finds the reference
     

    newUser.name= name;
    newUser.score=score;
    
    return newUser; 
}
const userFunctionScore={
    increment: function(){this.score++;},
    login: function(){console.log(
    "Logged In"
    )}
}
const user1= userCreator("Satya", 100);
const user2= userCreator("Ram",200);

user1.increment();

// Optimal Solution but not the shortened way to achieve the purpose


