let divAmount; 
const container = document.querySelector('#main');
const choiceButton = document.querySelector('button');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


function squareGenerator(){ 
    divAmount = Math.pow(prompt("Choose how many rows you want up to 100"),2);
    while (container.firstChild){
        container.firstChild.remove();
    }
    for (x = 0; x < divAmount; x++) {
            let square = document.createElement('div');

            square.className = 'square';
            ;
            square.style.cssText = `width: ${Math.sqrt(921600/divAmount)}px; 
                                    height: ${Math.sqrt(921600/divAmount)}px;`
            

            container.appendChild(square);
            square.addEventListener('mouseover', () => {
                square.style.background = `rgb(${getRandomInt(256)},${getRandomInt(256)},${getRandomInt(256)})`;
                console.log("Hello");
                
            });
    }
        
}


choiceButton.addEventListener('click', () => {
    squareGenerator();


});
 
