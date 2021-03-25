// 게임시작 버튼을 눌렀을 때 랜덤한 수 생성
let comArray = [];
function randomN() {
  while(comArray.length !== 3) {
    comArray.push(Math.floor(Math.random() * 10));
  }
  return comArray;
}
//console.log(randomN());

function enter(){
  let input = document.getElementById('num');
  document.addEventListener('keydown', function(event) {        
     if (input.value.keyCode === 13) {
        compare();
      }
    });
}

//let inputVal = document.getElementById('num').addEventListener('keydown', compare);

function compare(input,comArray) {    
  //if(inputVal.keycode === 13)
  //if(input.length !== 3) alert('input 3 numbers');  
  //else {  
    //numToStr(input)
    let strike = 0;
    let ball = 0;
    for(let i = 0; i < comArray.length; i++) {
      for(let j = 0; j < input.length; j++) {
        if(i == j && comArray[i] == input[j]) ++strike;
        else if(i != j && comArray[i] == input[j]) ++ball;
      }       
    }
  //}
  return [strike, ball];
}
//console.log(compare(input, array));
function e(event) {
  let a = event.keycode;
  return a;
}
console.log(e('a'));
