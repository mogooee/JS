function solution1(n,t,m){ //모두 출력 

    this.num = t*m; // this 전역변수 
    let arr=[];
    
     for(i=0;i<num;i++) {
     arr += i.toString(n);  //n진수로 변환 
     }
     
    this.data=arr.split(""); //split함수 
    console.log(data)
    return data;
}
    
function solution2(){
 
    let arr_a="";
    let arr_b="";

    for(i=0;i<num;i++){

        if(i%2===0) //A
        arr_a+=data[i];

        else //B
        arr_b+=data[i];
    } 
    console.log(arr_a)
    console.log(arr_b)
}

solution1(2,4,2)
solution2(2,4,2)   
