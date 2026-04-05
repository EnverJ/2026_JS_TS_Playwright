//import { rest } from "./utilTest_03.js";
let username = 'Tom';
// export let name = 'Tom';
// export let flag = true;
// export function add(a, b){
//     return a + b;

// }

// export function test(){
//     console.log('test');
// }



let flag = true;
function add(a, b){
    return a + b;

}

function test(){
    console.log('test');
}

export default function print(){
    console.log('printing something ...');
};

// duplicate default function is not allowed
// export default function print1(){
//     console.log('printing something ...');
// };

let addTwoNum = (a, b) => a + b;

export {username, flag, add, test, addTwoNum}
