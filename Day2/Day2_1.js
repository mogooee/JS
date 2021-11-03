function RadixGame(n1,t1,m1,p){ //모두 출력 

    this.t1=t1; //this 전역변수 
    this.m1=m1;
    this.p=p;
    num1 = t1*m1; 
    let arr=[];
    
     for(i=0;i<num1;i++) {
     arr += i.toString(n1);  //n진수로 변환 
     }
     
    this.data=arr.split(""); //split함수 
    console.log(`\n${m1}명이 ${n1}진수 말하기 게임 \n모두: ${data}`)

    Turn(m1,p)
}

function Turn(m1,p){ //n명일 때 

    let arr_p=[];
    let p_i;
    let count=0;

    for(i=0;i<data.length;i++){
        p_i=(p-1)+(i*m1); 

        if(count<t1) //undefined 제거 
        arr_p.push(data[p_i]);
        count++;
    } 
    console.log(`${p}번째 사람: ${arr_p}`)
    return arr_p;
}

function solution2(n2,t2,m2){ //2명일 때

    let num2=t2*m2;
    let arr=[];
    let arr_a=[];
    let arr_b=[];

    for(i=0;i<num2;i++){
        arr += i.toString(n2);  //n진수로 변환 
        if(i%2===0)
        arr_a.push(arr[i]);
        else
        arr_b.push(arr[i]);
     } 
    data2=arr.split("");
        
    console.log(`\nA: ${arr_a} , B: ${arr_b}`)
   }

RadixGame(10,6,3,2)
RadixGame(16,6,3,2)
solution2(2,4,2)  