function solution(board, moves) {
  var answer = 0;
  let basket = [];

  // move만큼 뽑기 게임
  for (let turn = 0; turn < moves.length; turn++) {
    //열
    let line = moves[turn] - 1;

    //board길이 만큼 행 반복문
    for (let i = 0; i < board.length; i++) {
      //값이 존재하면
      if (board[i][line]) {
        //현재값과 마지막 저장된 값이 같으면
        if (board[i][line] === basket[basket.length - 1]) {
          answer += 2;
          //저장된 마지막 값 삭제
          basket.pop();
          //뽑아서 없어짐
          board[i][line] = 0;
          break;
        } else {
          basket.push(board[i][line]);
          board[i][line] = 0;
          break; //하나 뽑으면 다음 차례
        }
      }
    }
  }
  console.log(basket);
  console.log(answer);
  return answer;
}

solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4] //4,3,1,1,3,2,0,4 //4,3,1,3,4,2,4,4
);
