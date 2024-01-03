let array = ["Rice", "Charlie", "Bob", "Mctominay", "Mata" ,"Rooney"];

function maxString() {
    let max = array[0];
    for(let i = 0; i < array.length; i++) {
        if(array[i].length > max.length) {
        max = array[i]
        }
    }
    return max;
}

let value = maxString();

console.log(`chuỗi ký tự dài nhất là ${value}`);
