function validar() {
    let usuario = document.getElementById("usuario");
    let clave = document.getElementById("clave");
    let error = false;
document.getElementById("validar_usuario").innerHTML = "";
document.getElementById("validar_clave").innerHTML = "";    
if (usuario.value == "") {
        document.getElementById("validar_usuario").innerHTML = "Debe completar el usuario";
        error = true;
        usuario.focus();
        error = true
    }
    if (clave.value.length<8) {
        document.getElementById("validar_clave").innerHTML = "Debe completar el clave con 8 carateres como minimo";
        error = true;
        clave.focus();
        error = true
    }
 
    if (error == false) {
        alert("Dato enviado")
        document.getElementById("usuario").value = ""
        document.getElementById("validar_usuario").innerHTML = "";
        document.getElementById("clave").value = ""
        document.getElementById("validar_clave").innerHTML = "";
    }




    if (error)
        return false;
    else
        return true;
}