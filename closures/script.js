// function main(name)
// {
//     function sayname()
//     {
//         console.log(name)
//     }
//     return sayname;
// }
// let fn = main('ruban');

// console.log(fn);
// fn();
// fn();
// function adder(num)
// {
//     function add(b)
//     {
//         console.log(num+b);
//     }
//     return add;
// }
// const addto5 = adder(5)
// addto5(10)
const myname= document.getElementById("myname");
const btn = document.getElementById("btn")
function maketextsizer(size)
{
    function changesize()
    {
        myname.style.fontSize = `${size}px`;
    }
    return changesize;
}
const size12 = maketextsizer(12);
const size2 = maketextsizer(2);
const size10 = maketextsizer(10);
const size20 = maketextsizer(20);

btn.addEventListener('click', size20)