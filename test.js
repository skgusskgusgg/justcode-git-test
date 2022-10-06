// function number() {
//     for (let num = 1; num <= 50; num++) {
//         if (num % 2 == 0) {
//             console.log(num);
//         }
//     }
// }
// console.log(number());

function number(num) {
    if (num % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(number(20));
