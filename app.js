let input1 = 0;
let input2 = 0;
let total = 0;
let aux=0;
let numString='';
let reversedString ='';
let timesInput = 0;
let action= '';



    const button = document.querySelectorAll('button');
    button.forEach(button =>{
        button.addEventListener('click',() =>{
      if(button.id==='ac'){
       removeDisplay();
       resetValues(); 
      }
      else
            if(isNumber(button.id)){
                numString=button.id.concat(numString);
                reversedString = reverse(numString)
                timesInput++;
                total = parseInt(reversedString);
                display(total);
                
            }
            else{
                 if(button.id!="="){
                    actionPressed(button.id);
                 }
                if(button.id==="="){
                     removeDisplay();                       
                        input2 = total;
                        total = result(action);                        
                        let fixedTotal = total.toFixed(2);
                            display(fixedTotal);
                    }          
            }
        }
        )});
            
     

    
function result(action){
    let auxTotal;
    switch (action) {
        case "/":
            auxTotal = input1/input2;
            break;

        case "*":
            auxTotal = input1*input2;

            break;
            case "-":
            auxTotal = input1-input2;

            break;
            case "+":
                auxTotal = input1+input2;
    
                break;
        

    
        default:
            break;
    }
    return auxTotal;
    console.log(input1);

}

function reverse(s){
    return s.split("").reverse().join("");
    
}

function removeDisplay(){
    let pantalla = document.querySelector('h1');
    if(pantalla===null){
        pantalla = document.createElement('h1');

    }
    
   
    pantalla.remove();
}
function actionPressed(symbol){
    action = symbol;
    removeDisplay();
    input1= total;
    numString='';
    reversedString='';
}
function display(numOutput){
    
    
    if(timesInput!=0){
        removeDisplay();
        
    }
    
        
    const display = document.querySelector('#pantalla');
    const numberD = document.createElement('h1');
    numberD.setAttribute('id','number');
    numberD.innerHTML =numOutput;
    display.appendChild(numberD);}
    
function modifyDisplay(newNumber){

}
       
function isNumber(input){
    let yon = false;
if (input === '1'||input === '2'||input === '3'||input === '4'||input === '5'||input === '6'||input === '7'||input === '8'||input === '9'||input === '0'){
yon = true;
}
return yon;
}    


function multiply(){
    
}

function resetValues(){
    timesInput = 0;
    numString = '';
    reversedString = '';
    total = 0;
    input1 = 0;
    input2 = 0;

};