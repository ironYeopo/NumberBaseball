// 게임시작 버튼을 눌렀을 때 랜덤한 수 생성
let comArray = [];

function randomN() {
  while(comArray.length !== 3) {
    comArray.push(Math.floor(Math.random() * 10));
  }
  return comArray;
}
//console.log(randomN());

// 게임시작 버튼을 눌렀을 때 랜덤한 수 생성 v2
function ran(array) {
  if(array.length === 3) return array;
  array.push(Math.floor(Math.random() * 10));
  return ran(array);
}
//console.log(ran(comArray));

let inputVal = document.getElementById('num').addEventListener('keydown', compare);

function compare(inputVal) {    
  if(inputVal.keycode === 13) {
    if(input.length !== 3) alert('input 3 numbers');  
    else {
      let strike = 0;
      let ball = 0;r
      for(let i = 0; i < comArray.length; i++) {
        for(let j = 0; j < input.length; j++) {
          if(i == j && comArray[i] == input[j]) ++strike;
          else if(i != j && comArray[i] == input[j]) ++ball;
        }       
      }
    }
  return alert([strike, ball]);
  }
}
//console.log(compare(input, array));