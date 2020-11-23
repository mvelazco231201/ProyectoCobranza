class Usuario{
    constructor(nombre,telefono,correo,contraseña){
        this.nombre=nombre;
        this.telefono=telefono;
        this.correo=correo;
        this.contraseña=contraseña;
    }
}
/*
export default class Usuario{
    constructor(Nombre, telefono, correo, contraseña){
        this._tablaLista = Nombre;
        this._tablaLista = telefono;
        this._tablaLista = correo;
        this._tablaLista = contraseña;
       // this._tablaContar = Contar;
        this._users = [];
    }
}

_buscar(Nombre) {
    let lugar = -1;

    this._users.forEach((t, index) => {
      if(t.Nombre === Nombre) {
        lugar = index;
        return;
      }

    });

    return lugar;
  }*/