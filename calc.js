
let result = document.getElementById('result');
let button = document.querySelectorAll('button');
let screenVal = '';
for(item  of button){
    item.addEventListener('click', (element)=>{
        buttonText= element.target.innerText;
        console.log('text is ', buttonText );
        if(buttonText=='x'){
         buttonText = '*';
         screenVal += buttonText;
        
        
         result.value = screenVal
        }
        else if(buttonText=='C'){
            screenVal ="";
            result.value = screenVal
        }
        else if(buttonText=='='){
            result.value= eval(screenVal)
            console.log("result is ",result.value )
        }
        else{
            screenVal += buttonText;
            result.value = screenVal
            
        }
    })
}
