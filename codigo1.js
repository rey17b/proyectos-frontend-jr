
// cardholder name
let nameCard = document.querySelector('.card__details-name');
let nameInput = document.querySelector('#cardholder');
let nameErrorDiv = document.querySelector('.form__cardholder--error');

// card number
let numberCard = document.querySelector('.card__number');
let numberInput = document.querySelector('#cardnumber')
let numberErrorDiv =document.querySelector('.form__inputnumber--error')

// MM (mes)
let monthCard = document.querySelector('.card__month');
let monthInput = document.querySelector('#cardMonth');
let monthErrorDiv = document.querySelector('.form__input-mm--error');

//YY(año)
let yearCard = document.querySelector('.card__year');
let yearInput = document.querySelector('#cardYear');
let yearErrorDiv = document.querySelector('.form__input-yy--error')

//cvc
let cvcCard = document.querySelector('.card-back__cvc');
let cvcInput = document.querySelector('#cardcvc');
let cvcErrorDiv = document.querySelector('.form__input-cvc--error');

// Ingreso dinámico del nombre
nameInput.addEventListener('input', ()=>{
  if(nameInput.value == ''){
  nameCard.innerText = 'JANE APPLESEED';
}else{
  nameCard.innerText = nameInput.value;
}
});

// ingreso dinamico del numero
numberInput.addEventListener('input', event=>{
  let inputvalue = event.target.value;
  
  // actualizando graficamente la tarjeta
numberCard.innerText = numberInput.value;
// validando que no haya letras 
let regExp = /[A-z]/g;
if(regExp.test(numberInput.value)){
  showError(numberInput, numberErrorDiv, 'Wrong format, numbers only')
}else{
// agregando espacios cada 4 digitos y borrando espacios del usuario 
  numberInput.value = inputvalue.replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ').trim();
  hideError(numberInput, numberErrorDiv, '',  false);

}
//mostrando los ceros por defecto

if(numberInput.value == ''){
  numberCard.innerText = '0000 0000 0000 0000'
}

});

//ingreso dinamico del mes
monthInput.addEventListener('input', ()=>{
  monthCard.innerText = monthInput.value; 
  validateletters(monthInput, monthErrorDiv);
});

// ingreso dinamico del año
yearInput.addEventListener('input', ()=>{
  yearCard.innerText = yearInput.value;
  validateletters(yearInput, yearErrorDiv);
});

// ingreso dinamico del cvc
cvcInput.addEventListener('input', ()=>{
  cvcCard.innerText = cvcInput.value;
  validateletters(cvcInput, cvcErrorDiv);
});



// boton confirm

let confirmBtn = document.querySelector('.form__submit')

confirmBtn.addEventListener('click', event=>{
  event.preventDefault();

let nameValidation = false;
let numberValidation = false;
let monthValidation = false;
let yearValidation = false;
let cvcValidation = false;


// formulario y thanks
let formSection = document.querySelector('.form');
let thanksSection = document.querySelector('.thanks-section');
 

// validar name
if(verifyIsFilled(nameInput, nameErrorDiv)){
  nameValidation = true;
}else{
  nameValidation = false;
}
 //validar numero
  if(verifyIsFilled(numberInput, numberErrorDiv) == true){
   if(numberInput.value.length == 19){
    showError(numberInput, numberErrorDiv, '', false);
    numberValidation = true;
   }else{
    showError(numberInput, numberErrorDiv, 'Wrong number');
    numberValidation = false;

   }
  };

  // validar mes
  if(verifyIsFilled(monthInput, monthErrorDiv)){
    if(parseInt(monthInput.value)>0 && parseInt(monthInput.value)<=12){
    showError(monthInput, monthErrorDiv, '', false);
    monthValidation = true;
    }else{
    showError(monthInput, monthErrorDiv, 'Wrong Month');
     monthValidation = false;

   }   
  }

   //if(parseInt(monthInput.value)>0 && parseInt(monthInput.value)<=12){
    //showError(monthInput, monthErrorDiv,'', false)
//}else{
  //showError(monthInput, monthErrorDiv, 'Month incorrect')
//}

// validar año
if(verifyIsFilled(yearInput, yearErrorDiv)){
  if(parseInt(yearInput.value)> 22 && parseInt(yearInput.value)<= 27){
    showError(yearInput, yearErrorDiv, '', false);
    yearValidation = true;
  }else{
    showError(yearInput, yearErrorDiv, 'Wrong year');
    yearValidation = false;
  }
}  


// validar cvc
if(verifyIsFilled(cvcInput, cvcErrorDiv)){
   if(cvcInput.value.length== 3){
     showError(cvcInput, cvcErrorDiv, '', false);
     cvcValidation = true;
}else{
  showError(cvcInput, cvcErrorDiv, 'Wrong cvc');
  cvcValidation = false;
   }
}

 if(nameValidation == true && numberValidation == true && monthValidation == true && yearValidation == true && cvcValidation == true){
    formSection.style.display = 'none';
    thanksSection.style.display = 'block';
    
 }

});

// funciones

function showError(divInput, divError, msgError, show = true){
  if(show){
     divError.innerText = msgError;
  divInput.style.borderColor = '#FF0000';

  }else{
    divError.innerText = msgError;
  divInput.style.borderColor ='hsl(270, 3%, 87%)';
  }

}

function verifyIsFilled(divInput, divError){
  if(divInput.value.length> 0){

showError(divInput, divError, '', false);
return true;

  }else{
    showError(divInput, divError, 'cant be blank');
    return false;
  }

}

function validateletters(input, divError){
  let regExp = /[A-z]/g;
if(regExp.test(input.value)){
  showError(input, divError, 'Wrong format, numbers only');
}else{
  showError(input, divError, '', false);

}

}






