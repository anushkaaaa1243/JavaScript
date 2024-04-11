
const user ={
    username:"Anu",
    price:100,

    welComeMessage : function(){
        // console.log(`${this.username},welcome to website`)
        // console.log(this)
    }
}
// user.welComeMessage()  // Anu, welcome to website
// user. username ="Kit"
// user.welComeMessage()    // Kit, welcome to website

// console.log(this)


// function one(){
//     let username="anu"
//     console.log(this.userName )

// }
// one()

// ArrowFunction
 
//  const two =()=>{
//     let username ="Anu"
//     // console.log(this.username)
//     console.log(this)
//  }

//  two ()



//  const addTwo =(num1 ,num2)=>{
//     return num1+num2
//  }

//  console.log(addTwo(3,4))


// Determine wheather a given number is even

// let x= prompt("Enter a number")
// if(x % 2 == 0){
//     console.log("The given value is even")
// }

// else {
//     console.log("The given value is odd")
// }


// Factorial

let fact =1;
for (i=1;i<10;i++) {
    fact = fact*i;
//    console.log(fact)

    
}

let name= "aeiou"
// let counter=0
// for(i=0;i<=["name".length];i++){
//     if(name[i]== "a"||name[i]=="e"||name[i]=="i"||name[i]=="o"||name[i]=="u"){
//       counter++;
//       console.log(counter)
//     }
// }


// let height=56
// let base =45
// let area =((1/2)*base*height)
// console.log(area)


// Sum of element

let array =[1,2,3,4,5]
let sum = array.reduce((index,currentValue)=>
    index+currentValue)
    console.log(sum)




    

