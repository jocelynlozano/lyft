// $(document).ready(function() {
//    $("#telefono").text()
// });

// var numeroVal = localStorage.getItem("telefono");
// localStorage.setItem("telefono", numeroVal);

$(#resend).on("click", function(){
	var numRandom = Math.floor( Math.random() * 4111 )+6000;
      alert("Tu codigo Lyft es " + numRandom  + " ");
  });