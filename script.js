    
function comen() { 
    var button = document.getElementById("Submit");
    var coment = document.getElementById("com");
    if (coment.value === "") {
        alert("Inserte Comentarios, Por favor");
        return false;
    }
    alert("Gracias por sus comentarios");
}

