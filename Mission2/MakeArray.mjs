/*[Mission2] 배열 다루기 

4) 배열 만들기

Input = 이중객체, 외부파일 
Output1 = 숫자타입으로만 구성된 요소를 뽑아 배열 만들기 

 1. for in문을 이용해 객체 값에 접근한다. 
 2. isNaN()함수를 이용해 숫자를 판별한다. (false이면 숫자)
 3. for in문과 push 함수를 이용해 해당 값을 배열에 저장한다. 
 4. 결과 값을 출력한다.

*/

import {data} from "./o.mjs"

let arr=data;
let result=[];

function NumberCheck(){
    for (let i in arr){  //i=key

    let obj=arr[i]; //arr[i]=value
    console.log(obj);

    for(let j in obj){ //arr[i][j] , j=key
        if(isNaN(obj[j])==false){ //숫자
            result.push(j)
            
        }
    }
}
return result;
}

NumberCheck()
console.log(result);