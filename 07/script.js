//functions
function say_hello()
{
    console.log('hey ruban')
}
say_hello()//calling

function add(a,b,c)
{
    console.log(a+b+c)
}
add(2,3,4)
function multiply(a,b)
{
    return a*b;
}
let a= multiply(2,4)
console.log("the result is",a)

//adding as many numbers as we want
let num 
function add_unlimited()
{
    let ans=0;
    for (let i=0;i<arguments.length;i=i+1)
    {
        ans = ans+arguments[i]
    }
    return ans
}
let result = add_unlimited(1,2,3,4,5)
console.log(result)