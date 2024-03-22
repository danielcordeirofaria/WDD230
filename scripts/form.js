const password1 = document.querySelector("#password1")
const password2 = document.querySelector("#password2")

function checkinPassword() {
  if (password1.value === password2.value) {
    if (password2.classList.contains("notEqual")) {
      password1.classList.remove("notEqual");
      password2.classList.remove("notEqual");
    }
    return true;
  } else {
    password1.classList.add("notEqual");
    password2.classList.add("notEqual");
    alert("The passwords are not the same. Please, Try again")
    password1.value = ""
    password2.value = ""
    return false
  }
}

password2.addEventListener("blur", checkinPassword)

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
  rangevalue.innerHTML = range.value;
}

const emailField = document.getElementById('email');

emailField.addEventListener('input', function() {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;
  const isEmailValid = emailRegex.test(emailField.value);
  
  if (!isEmailValid) {
    emailField.setCustomValidity("Please enter a valid email address with the '@byui.edu' domain.");
  } else {
    emailField.setCustomValidity('');
  }
});


function validateForm() {
  const isPasswordValid = checkinPassword();
  const isEmailValid = emailField.checkValidity();

  return isPasswordValid && isEmailValid;
}

