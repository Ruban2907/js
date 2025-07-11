//data types
//numbers
 let num=10
 let num2=9.9
 console.log(num+num2)

 //strings
 const fname="ruban"
 const sname="ahmed"
 console.log(fname+' '+sname)

 //booleans (1 | 0 )
 let isloggedin=false;
 console.log(isloggedin)
 console.log(isloggedin+10)
 ///////////(        0+10) bcz false is 0 and true is 1 
 //null-the thing exist but it has no value
 let lastlogin = null
 console.log(lastlogin)
 //undefined-things does not exist totally
 let lastlin=undefined
 console.log(lastlin)

 //objects
 const person={
    firstname : "ruban",
    lastname : "ahmed",
    age: 20,
    isloggedin:false,
    lastlogin:null,
 }
 console.log(person)//gives complete info
 console.log(person.firstname)//gives only req



 //when we multiply a string of number with actual numbers we get numbers
 console.log('123'*1)//this will convert the string 123 to number 123
//string + string = string
//string = number = string
// string * number = number
//in multiplication case if the string is not of numbers it will give NAN


//typeof() to find the type of that variable
console.log(typeof(123))
console.log(typeof('123'))
console.log(typeof(person))
