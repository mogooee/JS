//input2에서 focusout 될 때 input 1번 값과 비교를 한다.

function checkInputValue() {
  //console.log(input1);
  const input2 = document.querySelector("input[name='second_name']");
  //console.log(input2);

  input2.addEventListener("focusout", (e) => {
    const input1 = document.querySelector("input[name='first_name']");
    const input1Value = input1.value;
    const input2Value = e.target.value;
    const messageNode = document.querySelector(".message");

    // debugger;

    if (input1Value === input2Value) {
      messageNode.innerHTML = "";
      return;
    }

    messageNode.innerHTML = "<span>올바른 값을 넣으세요</span>";
  });
}

checkInputValue();
