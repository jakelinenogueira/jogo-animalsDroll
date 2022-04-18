
let hide = false;
function eliminate(button) {
  const animals = document.querySelectorAll('.animal');
  if (hide === false) {
    button.innerHTML = 'Mostrar';
    animals.forEach(animal => {
      animal.setAttribute("style", "opacity: 0;")
    });  
} else {
    button.innerHTML = 'Apagar';
    animals.forEach(animal => {
      animal.setAttribute("style", "opacity: 1;")
    });  
}
 hide = !hide;
}


let pint = false; 
function paint(button) {
  const animals = document.querySelectorAll('.animal');
  if (pint === false) {
    animals.forEach(animal => {
      animal.setAttribute("style", "color: #04f110;")
    });
  } else {
    animals.forEach(animal => {
      animal.setAttribute("style", "color: #d2d819;")
    });
  }
  pint = !pint;
}


let skip = false;
function jump(button) {
  const animal1 = document.querySelectorAll('.animal1');
  const animal2 = document.querySelectorAll('.animal2');
  const animal3 = document.querySelectorAll('.animal3');

  if (skip === false) {
    animal1.forEach(animal1 => {
      animal1.setAttribute("style", "align-self: end;")
    });
    animal2.forEach(animal2 => {
      animal2.setAttribute("style", "align-self: end;")
    });
    animal3.forEach(animal3 => {
      animal3.setAttribute("style", "align-self: end;")
    });
  } else {
    animal2.forEach(animal2 => {
      animal2.setAttribute("style", "align-self: start;")
    });
    animal3.forEach(animal3 => {
      animal3.setAttribute("style", "align-self: center;")
    });
    animal1.forEach(animal1 => {
      animal1.setAttribute("style", "padding-bottom: 40px")
    });
  }
  skip = !skip;
}


let cat = false;
function exchange(button) {
  const addDisplay = document.querySelector('.cat');
  const removeDisplay = document.querySelector('.frog');
  if (cat === false) {
    addDisplay.setAttribute("style", "display: flex;")
    removeDisplay.setAttribute("style", "display: none;")
  } else {
    addDisplay.setAttribute("style", "display: none")
    removeDisplay.setAttribute("style", "display: flex;")
  }   
  cat = !cat;
}

