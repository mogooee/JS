const fs=require('fs');
let input=fs.readFileSync('bj/input.txt').toString()
input=input.split(' ').map((item)=>+item); 

//console.log(input);

let count_a=0;
let count_d=0;
 
for(i=0;i<input.length;i++){ //오름차순 검사
  if(input[i]<input[i+1])
  count_a++; 

  else
  break;
}

for(j=0;j<input.length;j++){ //내림차순 검사 
  if(input[j]>input[j+1])
  count_d++;

  else
  break;
}

if(count_a===7)
console.log('ascending');

else if(count_d===7)
console.log('descending');

else
console.log('mixed');