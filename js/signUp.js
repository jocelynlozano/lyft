function checkForm(form)
  {
    // validation fails if the input is blank
    if(form.inputfield.value == "") {
      alert("Ups! La entrada esta vacia.");
      form.inputfield.focus();
      return false;
    }

    // regular expression to match only alphanumeric characters and spaces
    var re = /^[\w ]+$/;

    // validation fails if the input doesn't match our regular expression
    if(!re.test(form.inputfield.value)) {
      alert("Ups! Escribe tu número telefonico.");
      form.inputfield.focus();
      return false;
    }

    // validation was successful
    return true;
  }