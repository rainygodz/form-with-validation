const submitBtn = document.querySelector('#submit-btn');
submitBtn.addEventListener('click', validateForm);

function validateForm(event) {
  event.preventDefault();

  const emailError = document.querySelector('#email-error');
  const countryError = document.querySelector('#country-error');
  const postcodeError = document.querySelector('#postcode-error');
  const passwordError = document.querySelector('#password-error');
  const confirmPasswordError = document.querySelector(
    '#confirm_password-error'
  );

  const email = document.querySelector('#email').value;
  const country = document.querySelector('#country').value;
  const postcode = document.querySelector('#postcode').value;
  const password = document.querySelector('#password').value;
  const confirm_password = document.querySelector('#confirm_password').value;

  let formFilled = false;

  !validateEmail(email)
    ? ((emailError.style.display = 'inline-block'), (formFilled = false))
    : ((emailError.style.display = 'none'), (formFilled = true));

  !validateCountry(country)
    ? ((countryError.style.display = 'inline-block'), (formFilled = false))
    : ((countryError.style.display = 'none'), (formFilled = true));

  !validatePostcode(postcode)
    ? ((postcodeError.style.display = 'inline-block'), (formFilled = false))
    : ((postcodeError.style.display = 'none'), (formFilled = true));

  !validatePassword(password)
    ? ((passwordError.style.display = 'inline-block'), (formFilled = false))
    : ((passwordError.style.display = 'none'), (formFilled = true));

  !validateConfirmPassword(password, confirm_password)
    ? ((confirmPasswordError.style.display = 'inline-block'),
      (formFilled = false))
    : ((confirmPasswordError.style.display = 'none'), (formFilled = true));

  if (formFilled) {
    console.log('High Five!');
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
  return validatePassword(password) && password === confirm_password;
}
