const input = document.querySelector('.login-input');
const button = document.querySelector('.login-btn');
const form = document.querySelector('.login-form')


const validateInput = ({target}) => {
    if (target.value.length > 2){
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '')
    }
}

const entregarSubmit = (event) => {
    /* Prevenir o comportamento padrão do form */
    event.preventDefault(); 
    /* Salvando no local storage do browser */
   localStorage.setItem('nickname', input.value);
   window.location = 'pages/game.html'
}   

input.addEventListener('input', validateInput);
form.addEventListener('submit', entregarSubmit)

