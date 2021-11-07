/*[Mission2] 배열 다루기 

5) 배열 결과 출력 

Input = 배열 안의 배열과 객체
Output = type이 sk인, name으로 구성된 배열만 출력

 1. for in문을 이용해 배열 안의 객체 값 중에 type이 sk인 값을 찾는다.
 2. 같은 key를 가진 value 중에 name을 찾는다. 
 2. push함수로 저장한다. 
 3. 최종 배열을 출력한다. */

import {data} from "./json_tree.mjs"

let arr=data;
let result=[];

function Name_TypeSk(){
    for (let i of arr){  //arr[0] 요소

    let obj=i;

        if(obj.type=="sk"){ 
            result.push(obj.name)
        }

        if(Object.keys(obj)=="childnode");{ //key가 childnode면
            arr=obj.childnode; 
            Name_TypeSk() //재귀함수
        }
    }
    return result;
}


Name_TypeSk()
console.log(result);