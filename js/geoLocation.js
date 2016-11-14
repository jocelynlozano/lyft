navigator.geolocation.getCurrentPosition(finOk, finError);
var divMapa = document.getElementById("mapa");
function finError(){
    divMapa.innerHTML="No autorizado";
};
function finOk(respuesta){
    // mostrarObjeto(respuesta.coords);
    var lat=respuesta.coords.latitude;
    var lon = respuesta.coords.longitude;

    var glatLon = new google.maps.LatLng(lat, lon);
    var objConfig = {
        zoom: 17,
        center: glatLon
    }

    var gMapa = new google.maps.Map(divMapa, objConfig);
    var objConfigMarker = {
        position: glatLon,
        map: gMapa,
        title: "Usted esta acá"
    }
    var gMarker = new google.maps.Marker(objConfigMarker);
    gMarker.setIcon("img/carro.png")
    var gCoder = new google.maps.Geocoder();
    var objInformacion = {
        address: "Rimac, Lima, Perú"
    }
    gCoder.geocoder(objInformacion, funCoder);

    function funCoder(datos){
        var coordenadas = datos[0].geometry.location; //obj LatLong
        var config = {
            map: gMapa,
            position: coordenadas,
            title: "Casa"
        }
        var gMarkerDV = new google.maps.Marker(config)
            
    }
}
    // divMapa.innerHTML=lat+","+lon;
    // divMapa.innerHTML="Autorizado";
    // mostrarObjeto();

function mostrarObjeto(obj){
    for (var prop in obj){
        document.write(prop+ " : " +obj[prop] + "<br/>");
    }
};









































// var cargarPagina = function(){
//   if (navigator.geolocation){
//       (navigator.geolocation).getCurrentPosition(funcionExito, funcionError);
//   } else{
//       alert("no funciona");
//   }
// };

// $(document).ready(cargarPagina);

// var funcionExito = function(parametro){
//     console.log(parametro);
// };

// var funcionError = function(error){
//     console.log(parametro);
// };
// var cargarPagina = function() {
//     if (navigator.geolocation) { 
//         navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
//     }
// };

// var funcionExito = function(posicion) {
//     var lat = posicion.coords.latitude;
//    var lon = posicion.coords.longitude;
//    var latlon = new google.maps.LatLng(lat, lon)
//    var mapa = document.getElementById('mapa')
//    mapa.style.height = '250px';
//    mapa.style.width = '500px';

//    var myOptions = {
//         center:latlon,zoom:14,
//         mapTypeId:google.maps.MapTypeId.ROADMAP,
//         mapTypeControl:false,
//         navigationControlOptions:{
//             style: google.maps.NavigationControlStyle.SMALL
//            }
//    };
   
//    var map = new google.maps.Map(document.getElementById('mapa'), myOptions);

//    var marker = new google.maps.Marker({
//        position:latlon,
//        map:map,
//        title:"You are here!"
//    });
// };

// var funcionError = function (error) {
//     console.log(error);
// };

// $(document).ready(cargarPagina);