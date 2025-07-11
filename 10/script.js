//console.log("Nim")
//Array
const Students = ["Ruban","Hamza","Fareed"];
Students[1]="Nimra";
Students.push("Hamza")
Students.push("Alexa")
Students.pop()
Students.reverse()
//console.log(Students)
//Array in js is heterogenous means that it can have elements of differents datatypes also 

//Students.forEach((val)=>console.log(val))
const numbers=[1,2,3,4,5,6,7]
function double(n){
    return n*2
}
let newArr = numbers.map(double);
console.log(newArr)
// newwArr=[]
// newArr=   numbers.forEach((num)=>newArr.push(num*2));
// console.log(newArr)



let ans = numbers.find((num)=>num==4)//finds the number in the array
console.log(ans)





let AND = numbers.findIndex((num)=>num==4)//finds the number's index in the array
console.log(AND)


//includes is a boolean that check if no. exists returns true else false




//filter
const NewArr = numbers.filter((num)=>num%2==0)
console.log(NewArr)

//slice-> returns a part of array
const answer = numbers.slice(1,5);//started from index 1 till index 4, index 5 is excluded
console.log(answer)
//splice->deletes nos. from the aray n puts them in a new array
const rub = numbers.splice(1,4);
console.log(rub)
console.log (numbers)