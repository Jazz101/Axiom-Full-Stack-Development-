//Retreving html elment from dom

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('passord');
const password2 = document.getElementById('password2');

function showError(input, message){
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}
function showSuccess(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    const small = formControl.querySelector('small');
    small.innerText = message;
  }
// create event listener for submit button 
form.addEventListener('submit', function(e){
    e.preventDefault(); // stop  page from reloading
    
    if(username.value === ''){
        showError(username, "username is required");
    }else{
        showSuccess(username);

    }

    if(email.value === ''){
        showError(email, "email is required");
    }else{
        showSuccess(email);

    }
    if(password.value === ''){
        showError(password, "password is required");
    }else{
        showSuccess(password);

    }

    if(password2.value === ''){
        showError(password2, "password is required");
    }else{
        showSuccess(password2);

    }
});
