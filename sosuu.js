function sirabemasyou(i) {
    // 素数かどうかを調べる
    for(let j = 2; j < i; j = j+1){
        if(i % j == 0) return false;
    }
    return true;
}

let numOf1 = 0;
for(let i = 2; i <= 997; i = i+1) {
    // 素数かどうかを調べる
    if(sirabemasyou(i)){
        // 1が印字されているか調べる
    let str = i. toString();
    for(let k of  str) {
            if(k === "1"){
                    numOf1++;
            }
        }
    };
}

console.log(numOf1);
