//Al inicio de app, es lo primero que debemos hacer
let bd=JSON.parse(localStorage.getItem("JAbd"));
if (!bd || bd==undefined){
    bd={
        admin:[{Admin: "admin", Password: 0123}],
        users:[{nombre: "Ale", telefono: 3121007841, correo: "ale@ucol.mx", contraseña: 4444}]
    } //bd=[];
}

/*
const form = document.getElementById("formUser");
const name = document.getElementById("Nombre");
const correo = document.getElementById("txtCorreo");
const pass = document.getElementById("txtPass");

form.addEventListener("submit", function(event){
    event.defaultPrevented();
    let users =  Array(
        {
            nombre: nombre.value,
            telefono:  correo.value,
            correo: cor.value,
            password: pass.value,
        }
    );
    localStorage.setItem("miBDp",JSON.stringify(users));
});*/

//trae los datos del form y los ingresa a 
document.getElementById("btnRegistrar").addEventListener("click",()=>{
    let nombre=document.getElementById("Nombre").value;
    let telefono=document.getElementById("Telefono").value;
    let correo=document.getElementById("Correo").value;
    let contraseña=document.getElementById("Pass").value;
    let alguien=new Usuario(nombre,telefono,correo,contraseña);
    bd.admin.users.push(alguien);
    localStorage.setItem("JAbd",JSON.stringify(bd));
    //console.log("guardado " + alguien );
});
/*
document.getElementById("btnRestore").addEventListener("click", ()=>{
    let bd=JSON.parse(localStorage.getItem("miBDp"));
    let texto = "";
    bd.datos.forEach(element => {
        texto+=`<div class="card">
                <p> <span class="rojo"> Nombre: </span> ${element.nombre} </p>
                <p> Edad: ${element.edad} </p>
                <p> Correo: ${element.correo} </p>
                </div>
        `
    });
    document.getElementById("detalles").innerHTML=texto;
})*/