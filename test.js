// input: array 

const input = [2, 3, 4, 1, 2, 7, 4];
// console.log(input);

const max = () => { 
    // let result = '';
    // console.log(result);
    let result = 2;
    for (let i = 0; i < input.length; i++) {
    // let result = input[0];

     if (result < input[i]) {
    result = input[i];
    // console.log(result);
}
//   } else {
//     result = input[i];
//   }
//   console.log(result);
}
    return result;
}


const test =  max();
console.log(test);