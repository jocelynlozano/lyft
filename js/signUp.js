$(function(){
   $("#formulario").validate ({
    rules: {
      telefono: {
        required: true,
        digits: true,
        minlength: 9
      }
    },
    messages: {
      telefono: {
        required: "El campo es requerido",
        digits: "Ingrese su númmero",
        minlength: "Su número debe tener 9 digitos"
      }
    },
    submitHandler: function() {
      var numRandom = Math.floor( Math.random() * 4111 )+6000;
      alert("Tu codigo Lyft es " + numRandom  + " ");
      // localStorage.setItem("guardarNumero", numRandom);
    }
  });
  $("#btn").on("click", function(){
    $("#formulario").submit();
    window.location.href = "verifyPhone.html";
  });
});

  