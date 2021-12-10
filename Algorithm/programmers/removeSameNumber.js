function solution(arr)
{
    var answer = [];

    arr.forEach((e,i) => {
         if(e!==arr[i-1]){
            answer.push(e);
        }
    });

    console.log(answer);
    return answer;
} 

solution([1,1,3,3,0,1,1])
solution([4,4,4,3,3])