//[Mission2] 배열 다루기 
/* 
1) factorial 함수 - Input:m, Output:배열1부터m까지의 factorial 값
 1. 임의의 숫자 RandomNumber을 입력받는다.
 2. RandomNumber까지 for문으로 팩토리얼의 계산값을 구한다. 
 3. 배열에 push함수로 계산값을 끝에 추가한다. 
 4. 배열을 출력한다. 
*/

function factorial(RandomNumber){

  /*let a; //NaN 
    let a=0; //0
  */

    let result=1;
    let arr_factorial=[];

    for(i=1;i<RandomNumber;i++){
        result *= i;
        arr_factorial.push(result)
    }
    return arr_factorial;
 }

console.log(factorial(5))