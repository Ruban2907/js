// function add(a){
//     return function (b) {
//         return function (c) {
//             return a+b+c;
//         }
//     }
// }
// console.log(add(2)(3)(5));
function autosend(to)
{
    return function (subject)
    {
        return function (body)
        {
            console.log(`sending email to ${to},${subject},${body}`)
    
        }
    }
}

let result1 = autosend("rubanahmed29@gmail.com");
let result2 = result1("New order confrmation");
let result3 = result2("thisis the body of the email mf");
