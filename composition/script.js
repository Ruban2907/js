function add(a,b)
{
    return a+b;
}
function sq(a)
{
    return a*a;
}
const addres = add(2,3);
//console.log(sq(addres));

function composefn(fn1,fn2)
{
    return function (a,b)
    {
        return fn2 (fn1 (a,b));
    }
}
const task = composefn(add,sq);
console.log(task(2,3))