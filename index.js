let comArray;
function randomN() {
    var array = [];
    while(array.length !== 3) {
        array.push(Math.floor(Math.random() * 10));
    }
    comArray = array;
    return console.log(comArray);
}
//console.log(randomN());

/*if (input.length !== 3)
{
    alert('Input 3 numbers!');
}*/
function enter(){
    let input = document.getElementById('num').value;
    document.getElementById('num').addEventListener('keydown', function(event) {        
      if (input.keyCode === 13) {
        compare();
      }
    });
}

function compare() {    
  /*let input = document.getElementById('num').value;
    input.addEventListener('keydown', function(event) {        
      if (input.keyCode === 13) {
        if(input.length !== 3) {
          alert('Input 3 numbers!');
        }else {    
          var strike = 0;
          var ball = 0;
          for(var i = 0; i < comArray.length; i++) {
            for(var j = 0; j < input.length; j++) {
              if(i === j && comArray[i] === input[j]) ++strike;
              else if (i !== j && comArray[i] === input[j]) ++ball;
            }       
          }
        }
          return console.log([strike, ball]);
      }
    });
}*/
    
    if(input.length !== 3) {
    alert('Input 3 numbers!');
    }
    
    var strike = 0;
    var ball = 0;
    for(var i = 0; i < lastArray.length; i++) {
        for(var j = 0; j < input.length; j++) {
            if(i === j && lastArray[i] === input[j]) {
                ++strike;
            } else if (i !== j && lastArray[i] === input[j]) {
                ++ball;
            }
        }       
    }
    return console.log([strike, ball]);
}
//console.log(compare(array2, input));