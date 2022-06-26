let numOutput = 0;
let numAux = 0;
let numString='';
let reversedString ='';
let timesInput = 0;



    const button = document.querySelectorAll('button');
    button.forEach(button =>{
        button.addEventListener('click',() =>{
           // console.log(button.id);ç
           
if(button.id === 'ac'){
    removeDisplay();
    timesInput = 0;
    numString = '';
    reversedString = '';
}else{
            numString=button.id.concat(numString);
            reversedString = reverse(numString)
            console.log(reversedString)
            display(reversedString);
            timesInput++;
            console.log(timesInput)
            
      }  });

    });


function reverse(s){
    return s.split("").reverse().join("");
    
}

function removeDisplay(){
    const pantalla = document.querySelector('#number');
    pantalla.remove();
}
function display(numOutput){
    
    
    if(timesInput!=0){
        const pantalla = document.querySelector('#number');
        pantalla.remove();
        
    }
    
        
    const display = document.querySelector('#pantalla');
    const numberD = document.createElement('h1');
    numberD.setAttribute('id','number');
    numberD.innerHTML =numOutput;
    display.appendChild(numberD);}
    
                




