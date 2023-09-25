const submitBtn = document.querySelector('#submit-btn');
submitBtn.addEventListener('click', validateForm);

function validateForm(event) {
  event.preventDefault();

  const email = document.querySelector('#email').value;
  const country = document.querySelector('#country').value;
  const postcode = document.querySelector('#postcode').value;
  const password = document.querySelector('#password').value;
  const confirm_password = document.querySelector('#confirm_password').value;

  if (
    validateEmail(email) &&
    validateCountry(country) &&
    validatePostcode(postcode) &&
    validatePassword(password) &&
    validateConfirmPassword(password, confirm_password)
  ) {
    console.log('High Five!');
  } else {
    console.log('Form broken');
  }
}

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validateCountry(country) {
  return country.length > 2;
}

function validatePostcode(postcode) {
  return !isNaN(postcode) && postcode.length == 6;
}

function validatePassword(password) {
  return password.length > 5;
}

function validateConfirmPassword(password, confirm_password) {
  return password === confirm_password;
}
