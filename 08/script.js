console.log("hello")
//arow functions
const sayHello = () => {
    console.log("Heyy")
}
sayHello()

const add = (a,b) => a+b 
    console.log(add(2,3))
 
//argument function not supported
//other than argument we use
const addNums = (...nums) => {
    console.log(nums)
}
addNums(1,2,3,4,5)


//hoisting
//js stores the function in memory before the definition of funtction
sayhey();
function sayhey()
{
    console.log("hello")
}

//this keyword
const obj = {
    value:20,
    myFunction: function(){
        console.log("value is   :" + this.value);
    },
}
obj.myFunction()