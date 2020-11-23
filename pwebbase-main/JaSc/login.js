//Log de admin
document.getElementById("btnImgresar").addEventListener("click",()=>{
    let cor = document.getElementById("txtCorreo").value;
    let pw  = document.getElementById("txtPass").value;

    if (cor == admin && pw == 0123){
        alert("Logged in");
        window.location.href = "/html/admin.html";
    }

    else{
        alert("Error");
    }
});

//Log user
document.getElementById("btImgresar").addEventListener("click",()=>{
    let txtCorreo = document.getElementById("txCorreo").value;
    let txPass  = document.getElementById("txPass").value;
    let name = JASON.parse(localStorage.getItem("telefono"));
    let txpw = JASON.parse(localStorage.getItem("contraseña"))
    if (cor == admin && pw == 0123){
        alert("Logged in");
        window.location.href = "html/user.html";
    }

    else{
        alert("Error");
    }
});



