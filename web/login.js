function login() {
    var pass = document.getElementById("password").value;
    var usu = document.getElementById("usuario").value;
    
    if (usu === "Juan" && pass === "1234") {
        window.location="index.html"
    } else {
        alert("Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
    }
}


