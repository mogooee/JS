//[Mission2] 배열 다루기 
/* 
2) 배열 거르기 - Input=peoples[]
                Output1= 특수기호있으면 배열에서 제외, Output2=배열값에서 숫자를 제거 

 1. for문을 이용해 배열값 중에 숫자를 찾아 삭제한다. replace 함수, 정규식 사용 
 2. 입력된 배열값 중에서 for문을 이용해 특수기호를 포함하지 않는 값만 저장한다.
 3. 최종 배열을 출력한다. 

*/

function ArrfilterId(peoples){

    let specialChars=/[!@#$%^&*()_+]/;
    let result_numexp=[];
    let result_spcexp=[];

    for(i=0;i<peoples.length;i++){

        result_numexp[i]= peoples[i].replace(/[0-9]/g,"") //숫자제거 (replace,정규식)
        
       if(specialChars.test(result_numexp[i])==0) //특수문자 제거 (push)
       result_spcexp.push(result_numexp[i])
    }
    console.log(result_numexp)
    console.log(result_spcexp)
  
}

    const peoples = ["crong!@#", "honux5", "sarah#", "hea3d", "zello", "5lucas"];
    ArrfilterId(peoples)

