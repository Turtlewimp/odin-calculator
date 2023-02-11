function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    if (b !== 0) return a/b;
}

function operate(calculation) {
    a = Number(calculation.num1);
    b = Number(calculation.num2);
    switch(calculation.op) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
        default:
            return alert("operate() error")
    }
}


function resetDisplay() {
    const display = document.querySelector('#display');
    let displayNum = '';
    display.textContent = displayNum;
}



/*
 <div class="keys">
    <div data-key="65" class="key">
      <kbd>A</kbd>
      <span class="sound">clap</span>
    </div>
    <div data-key="83" class="key">
      <kbd>S</kbd>
      <span class="sound">hihat</span>
    </div>
    <div data-key="68" class="key">
      <kbd>D</kbd>
      <span class="sound">kick</span>
    </div>
    <div data-key="70" class="key">
      <kbd>F</kbd>
      <span class="sound">openhat</span>
    </div>
    <div data-key="71" class="key">
      <kbd>G</kbd>
      <span class="sound">boom</span>
    </div>
    <div data-key="72" class="key">
      <kbd>H</kbd>
      <span class="sound">ride</span>
    </div>
    <div data-key="74" class="key">
      <kbd>J</kbd>
      <span class="sound">snare</span>
    </div>
    <div data-key="75" class="key">
      <kbd>K</kbd>
      <span class="sound">tom</span>
    </div>
    <div data-key="76" class="key">
      <kbd>L</kbd>
      <span class="sound">tink</span>
    </div>
  </div>

 function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);

  
*/

/*
const display = document.querySelector('#display');
    let displayNum = '0';
    display.textContent = displayNum;
    //let calculation = {};

    //if button press, add button id to display string of numbers
    const numbers = document.querySelectorAll('.number');
    numbers.forEach((number) => {
        number.addEventListener('click', () => {
            
            //displayNum += number.id;
            display.textContent = number.id;

            //if empty
            //add any number except zeor
            //if not empty
            //add any number
            
            if(displayNum === '') {
                if(number.id>0) {
                    displayNum += number.id;
                    display.textContent = displayNum;
                }
            } else {
                displayNum += number.id;
                display.textContent = displayNum;
            }

        });
    });

    
    const operators = document.querySelectorAll('.operator');
    operators.forEach((operator) => {
        operator.addEventListener('click', () => {
            //if first time click
            //first check if there is number
            if(displayNum) {

            }
            displayNum += displayElement.id;
            display.textContent = displayNum;

            

            console.log(calculation);
            calculation.push(displayElement.id);
            console.log(calculation);
        });
    });
    

//if first time operator click


    
    const equals = document.querySelector('#equals');
    //equals.addEventListener('click', operate(calculation));
    
    //if clear button press, replace display string to empty string*/