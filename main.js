const showError = document.querySelector(".error-message")
const btn = document.querySelector("button")
const email = document.getElementById('txtEmail').value;

function validateEmail(e){
    var mail = document.getElementById('txtEmail').value;
    var regEx = /^[^ ]+@[^ ]+\.[a-z]{3}$/;

    if (!mail.match(regEx)){     
        e.preventDefault()
        showError.style.display = 'block'
        return false;
    } else {
        showError.style.display = 'none'
        return true
    }
    // this function as is didplays the error message but doesn't check for email validation
    // this function needs to check for email validation
  
}

btn.addEventListener('click', validateEmail)


