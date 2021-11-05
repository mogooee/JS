//'/dev/stdin'
// repeat 함수

const fs=require('fs');
const num=fs.readFileSync('bj/input.txt').toString().split('\n').map((item)=>+item); 


function printstar(num){
let star="";

for(i=0;i<num;i++){ //줄의 개수
    for(j=0;j<=i;j++){ //별의 개수
    star+='*';
    }
    star+='\n';
}
console.log(star);
}

printstar(num)
