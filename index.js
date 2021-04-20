// 게임시작 버튼을 눌렀을 때 랜덤한 수 생성
let comArray = [];

function randomN() {
  while(comArray.length !== 3) {
    comArray.push(Math.floor(Math.random() * 10));
  }
  document.getElementById('start').style.display = 'none';
  document.getElementById('num').style.display = 'block';
}

// 게임시작 버튼을 눌렀을 때 랜덤한 수 생성 v2
function ran(array) {
  if(array.length >= 3) return array;
  array.push(Math.floor(Math.random() * 10));
  return ran(array);
}
// console.log(ran(comArray));

document.getElementById('num').addEventListener('keydown', compare);

// 10번의 시도 제한을 두기 위한 변수 count
let count = 0;

function compare(event) {    
  if(event.keyCode === 13) {
    if(count < 10) {
      let input = document.getElementById('num').value;
      if(input.length !== 3) alert('input 3 numbers');  
      else {
        let strike = 0;
        let ball = 0;
        for(let i = 0; i < comArray.length; i++) {
          for(let j = 0; j < input.length; j++) {
            if(i == j && comArray[i] == input[j]) ++strike;
            else if(i != j && comArray[i] == input[j]) ++ball;
          }       
        }
        count++;
        if(strike === 3) {
          alert('Success 3 strikes');
          document.getElementById('num').style.display = 'none';
          document.getElementById('resume').style.display = 'block';
        } else {
          alert(`${input}\n${strike}strike ${ball}ball`);
        }
      }
    } else {
      alert(`${comArray}\nFail try it again`);
      document.getElementById('num').style.display = 'none';
      document.getElementById('resume').style.display = 'block';
    }
  }
}

function resume() {
  document.getElementById('resume').style.display = 'none'; 
  count = 0;
  comArray = [];
  randomN();
}

