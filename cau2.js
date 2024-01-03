let arr = [3,5,7,9,15,7,8,9];

function tryLastIndexOf(arr, value) {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        if(value === arr[i]) {
            result = i;
        }
    }
    if(result) {
        console.log(`Vị trí cuối cùng của ${value} là: ${result}`);
    } else {
        let val = -1;
        console.log(val);
    }
}

tryLastIndexOf(arr, 9);
