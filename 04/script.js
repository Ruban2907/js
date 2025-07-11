console.log("testing")

const age= 16;
if (age>=18)
{
    console.log("yes ou can vote")
}
else
{
    console.log("Sorry, you are underage")
}

//ternirary  operator cannot be used in else if condition
age>=18 ? console.log("yes") : console.log("NO")


let result = age >=18 ? 'yes' : 'no'
console.log(result)


//switch statements
const op=2;
switch(op)
{
    case 1: console.log("salam!")
    break;
    case 2: console.log("hello!")
    break;
    case 3: console.log("Messi___!")
    break;
    default: console.log("You are DUMB!!")
}