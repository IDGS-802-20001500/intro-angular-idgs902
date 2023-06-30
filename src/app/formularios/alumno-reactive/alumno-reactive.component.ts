import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno-reactive',
  templateUrl: './alumno-reactive.component.html',
  styleUrls: ['./alumno-reactive.component.css']
})
export class AlumnoReactiveComponent {

  mat!: string;
  nom!: string;
  edad!: string;
  correo!: string;
  foto!: string;
  calif!: string;

  alumnosIDGS: any[] = [];


  alumnosForm!:FormGroup;
  constructor(private readonly fb:FormBuilder){
    this.alumnosForm=this.initForm();
  }

  onSubmit():void{
    // console.log('Form-> ',this.alumnosForm.value);
    this.obtenerValor();

    const alumnosIDGS = {
      matricula: this.mat,
      nombre: this.nom,
      edad: this.edad,
      correo: this.correo,
      foto: this.foto,
      calif: this.calif
    };

    this.alumnosIDGS.push(alumnosIDGS);

  }



  obtenerValor():void{
    this.mat = this.alumnosForm.get('matricula')?.value;
    this.nom = this.alumnosForm.get('nombre')?.value;
    this.edad = this.alumnosForm.get('edad')?.value;
    this.correo = this.alumnosForm.get('correo')?.value;
    this.foto = this.alumnosForm.get('foto')?.value;
    this.calif = this.alumnosForm.get('calif')?.value;
  }

  initForm():FormGroup{
    return this.fb.group({
      matricula:[``,[Validators.required, Validators.minLength(3)]],
      nombre:[``,[Validators.required]],
      edad:[``],
      correo:[``,[Validators.required]],
      foto:[``],
      calif:[``]
    })
  }




}
