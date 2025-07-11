console.log("Ruban ahem")
//high prder funcs
function add(a,b,cb)
{
    let result=a+b;
    cb(result);
    return()=> console.log(result)
}
add(2,4,(val)=>console.log(val))
add(400,10,(res)=>console.log(res))