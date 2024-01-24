const form = document.querySelector('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const message = document.getElementById('message');
const messageContainer = document.querySelector('.message-container');

let isValid = false;
let passwordMatch = false;


function validateForm(){
    // using HTML constraint API
    isValid = form.checkValidity();     //return true/false.
     // if form isn't valid
    if(!isValid){   
        // style main message for an error
        message.textContent = "Please fill out all fields.";
        message.style.color = "red";
        message.style.borderColor = "red";
        return;
    }
    // checking both passwords values are valid.
    if(password1El.value === password2El.value){
        // If they match, set value to true and borders to green
        passwordMatch = true;
        password1El.style.borderColor = "green";
        password2El.style.borderColor = "green";
    }else{    
        // If they don't match, border color of input to red, change message
        passwordMatch = false;
        message.textContent = "Make sure password match.";
        message.style.color = "red";
        messageContainer.style.borderColor = "red";
        password1El.style.borderColor = "red";
        password2El.style.borderColor = "red";
        return;
    }
    // If form is valid and passwords match
    if(isValid && passwordMatch){
        // Style main message for success
        message.textContent = "Succesfully Registered!";
        message.style.color = "green";
        messageContainer.style.borderColor = "green"; 
    }
}
function storeData(){
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        password: form.password.value
    };
    console.log(user);
}
// processFormData function
function processFormData(e){
    e.preventDefault();
    // validate
    validateForm();
    // store data if values are valid
    if(isValid && passwordMatch){
        storeData();
    }

}
// Event Listener
form.addEventListener('submit',processFormData);