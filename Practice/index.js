// let number= prompt("Enter a number")
// if(number % 2 == 0){
//     console.log("The given value is even")
// }

// else {
//     console.log("The given value is odd")
// }

// let number= prompt("Enter a number")

// let fact =10;
// for (i=1;i<10;i++) {
//     fact = fact*i;
//    console.log(fact)
// }


let name= prompt("Enter a name")
let counter=0
for(i=0;i<=["name".length];i++){
    if(name[i]== "a"||name[i]=="e"||name[i]=="i"||name[i]=="o"||name[i]=="u"){
      counter++;
      console.log(counter)
    }
}