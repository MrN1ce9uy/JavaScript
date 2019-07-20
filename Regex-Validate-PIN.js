//
// Utilize a regular expression (regex) to accept 4 or 6 digit PINs.
//

function validatePIN (pin) {
  return /^(\d{4}|\d{6})$/.test(pin);  //return true or false
}
