let shape=[];
let data=[];

function getArea(figure){ //function 선언문  

    switch(figure){  //arguments[0] = figure
  
        case 'rect':
            return getRect(arguments[1],arguments[2]);  //a,b
            

        case 'trapezoid':
            return getTrapezoid(arguments[1],arguments[2],arguments[3]); //a,b,c

        case 'circle':
            return getCircle(arguments[1],arguments[2]); //a,b

        default:
            break; 
    }  
 
}

  //넓이 구하는 함수   

function getRect(length,width){ //사각형 넓이 함수
    shape.push('rect');
    data.push(length*width);
    return length*width; 

}

function getTrapezoid(length,width,height){ //사다리꼴 넓이 함수
    shape.push('Trapezoid');
    data.push(((length+width)*height)/2);
    return ((length+width)*height)/2;
}

function getCircle(r,n){ //원의 넓이 함수 
    shape.push('circle');
   
    if(n===undefined){ // 1.반지름값만 입력
    data.push(r*r* Math.PI);
    return r*r* Math.PI;
    }

    else{ //2.반지름, b까지 1씩 반지름 길이 증가한 원 넓이의 총합 

        let result=0;

        while(r<=n) 
        {
        result += r*r*Math.PI;  
        r++;  
        }

        data.push(result);
        return result;
    }
}

function printExecutionSequence(){  //함수 호출 순서, 값 출력 

    console.log('계산수행순서 :');

        for(i=0; i<=(shape.length)-1;i++){ 

            console.log(`${shape[i]}, ${data[i]}`); //템플릿 문자열


        }
}
    

    getCircle(2) 
    getRect(2,3)
    getTrapezoid(10,15,12); 
    getArea('circle',2) 
    getArea('rect',2,3) 
    getArea('trapezoid',10,15,12)
    printExecutionSequence()
