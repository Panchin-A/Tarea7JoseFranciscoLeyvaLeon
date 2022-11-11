function xmlActividad() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        TableActividad(this);
    }
    xhttp.open("GET", "Actividad.xml");
    xhttp.send();
}
function TableActividad(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("PC");
    let table = "<tr><th>Nombre</th><th>Precio</th><th>Procesador</th><th>RAM</th><th>m</th><th>n</th></tr>";
    for(let i = 0; i < x.length; i++){
        table += "<tr><td>" +
        x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue + "</td><td>" +
        x[i].getElementsByTagName("p")[0].childNodes[0].nodeValue + "</td><td>" +
        x[i].getElementsByTagName("proce")[0].childNodes[0].nodeValue + "</td><td>" +
        x[i].getElementsByTagName("RAM")[0].childNodes[0].nodeValue + "</td><td>" +
        x[i].getElementsByTagName("m")[0].childNodes[0].nodeValue + "</td><td>" +
        x[i].getElementsByTagName("n")[0].childNodes[0].nodeValue + "</td></tr>"

    }
    document.getElementById("contenido").innerHTML = table;
}

function xmlseries() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        Tableseries(this);
    }
    xhttp.open("GET", "series.xml");
    xhttp.send();
}
function Tableseries(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("serie");
    let table = "<tr><th>Nombre</th><th>Autor</th><th>Año de publicacion</th><th>Duracion</th></tr>";
    for(let i = 0; i < x.length; i++){
        table += "<tr><td>" +
        x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue + "</td><td>" +
        x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue + "</td><td>" +
        x[i].getElementsByTagName("year")[0].childNodes[0].nodeValue + "</td><td>" +
        x[i].getElementsByTagName("duration")[0].childNodes[0].nodeValue + "</td></tr>"

    }
    document.getElementById("contenido").innerHTML = table;
    xhttp.close();
}