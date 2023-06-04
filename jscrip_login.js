function login() {
    var user, password

    user = document.getElementById("usuario").value;
    password = document.getElementById("contraseña").value;

    if(user == "irene" && password =="1234"){
        alert("Iniciaste sesión")
    } else{
        alert("Datos incorrectos")
    }
}