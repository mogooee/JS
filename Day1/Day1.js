let shape=[]; //전역변수 this함수로 바꿔보기!!
let data=[];

function getArea(figure){ //function 선언문  

    switch(figure){  //arguments[0] = figure
  
        case 'rect':
            return getRectArea(arguments[1],arguments[2]);  //a,b
            
        case 'trapezoid':
            return getTrapezoidArea(arguments[1],arguments[2],arguments[3]); //a,b,c

        case 'circle':
            return getCircleArea(arguments[1],arguments[2]); //a,b

        default:
            break; 
    }  
}


function getRectArea(length,width){ 
    shape.push('rect'); //push : 배열의 끝에 저장
    data.push(length*width);
    return length*width; 
}

function getTrapezoidArea(length,width,height){ 
    shape.push('Trapezoid');
    data.push(((length+width)*height)/2);
    return ((length+width)*height)/2;
}

function getCircleArea(r,n){ 
    shape.push('circle');
   
    if(n===undefined){ //두번째 값을 받지 않을 때 
    data.push(r*r* Math.PI);
    return r*r* Math.PI;
    }

    else{ //두번째 값을 받을 때
        let result=0;

        while(r<=n) {
        result += r*r*Math.PI;  
        r++;  
        }

        data.push(result);
        return result;
    }
}

function printExecutionSequence(){  
    console.log('계산수행순서 :');
    
    for(i=0; i<(shape.length);i++){ 
        console.log(`${shape[i]}, ${data[i]}`); //템플릿 문자열
        }
}
    
    getCircleArea(2) 
    getRectArea(2,3)
    getArea('circle',2,5) 
    getArea('trapezoid',10,15,12)
    printExecutionSequence()