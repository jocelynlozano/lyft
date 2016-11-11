$(function(){
   $("#formulario").validate ({
    rules: {
      name: {
        required: true,
        digits: true,
        minlength: 2
      },
      apellidos: {
        required: true,
        digits: false,
        minlength: 2
      }
      email: {
        required: true,
        digits: true,
        minlength: 2
      }
    },
    messages: {
      name: {
        required: "El campo es requerido",
        digits: "Ingrese su nombre",
        minlength: "Escriba su nombre"
      },
      apellidos: {
        required: "El campo es requerido",
        digits: "Ingrese su Apellido",
        minlength: "Escriba su apellido"
      }
      email: {
        required: "El campo es requerido",
        digits: "Ingrese su correo",
        minlength: "Escriba su correo",
      }
    },
    submitHandler: function() {
      localStorage.setItem("guardarNumero", numRandom);
    }
  });
  $("#btn").on("click", function(){
    $("#formulario").submit();

  });
  });

  