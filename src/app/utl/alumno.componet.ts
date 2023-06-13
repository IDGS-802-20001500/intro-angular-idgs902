import { Component } from "@angular/core";

@Component({
  selector:`app-alumno`,
  template:`
    <h2>IDGS-902</h2>

    <div>
      <b>Matricula: </b>{{alumnos.matricula}}
    </div>
    <div>
      <b>Nombre: </b>{{alumnos.nombre | uppercase}}
    </div>
    <div>
      <b>Apellido: </b>{{alumnos.apaterno | uppercase}}
    </div>
    <div>
      <b>Inscrito: </b>{{alumnos.inscrito}}
    </div>
    <div>
      <b>Fecha de nacimiento: </b>{{alumnos.fechaNacimiento | date:"dd-MM-yyyy"}}
    </div>

  `
})

export class AlumnoComponent{


  alumnos={
    matricula:20001500,
    nombre:'Mauricio',
    apaterno: 'Fernández',
    inscrito:2215.93,
    fechaNacimiento:new Date()
  };

  constructor(){}

}
