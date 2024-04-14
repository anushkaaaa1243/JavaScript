// let number =[1,2,3,4,5,6,7,8,9,10]
// let checkNumber = number.filter((num) =>num>4)
// console.log(checkNumber)


// let value =[1,2,3,4,5,6,7,89,10] 
// let newValue = value.map((num)=>num*10)
// .map((num)=>num+1) 
// .filter((num)=>num>40)

// console.log(newValue)


// Reduces

let mynum = [1,2,3,4]
let TotalNum= mynum.reduce((acc,value)=> {
    console.log(`acc: ${acc} and value${value}`)
    return acc+value
})
console.log(TotalNum)


const ShopingCart = [
    {
        itemName:"js Course",
        price:2999
    },
    {
        itemName:"py Course",
        price:299
    },
    {
        itemName:"Data Science Course",
        price:1299
    },
    {
        itemName:"Mobile Development Course",
        price:5999
    },

]

const priceItem= ShopingCart.reduce((acc,items)=>
acc+items.price
)
console.log(priceItem)