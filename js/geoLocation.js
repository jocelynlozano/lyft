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
        address: " "
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