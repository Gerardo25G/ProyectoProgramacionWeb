import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PersonaService } from '../service/persona.service';

@Component({
  selector: 'ed-crearpersona',
  templateUrl: './crearpersona.component.html',
  styleUrls: ['./crearpersona.component.css']
})
export class CrearpersonaComponent implements OnInit {


  form:FormGroup = new FormGroup({
    cedula: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    telefono: new FormControl(''),
    direccion: new FormControl(''),
    usuario: new FormControl(''),
    clave: new FormControl('')
  });

  constructor(private router: Router, private serviceCli: PersonaService,private snackBar: MatSnackBar,private sanitizer: DomSanitizer) { }



  ngOnInit(): void {
  }

cancel(){

  this.router.navigate(['/login'])
}

submit(){
  if(this.form.valid){
    const persona = this.form.value;
    console.log('Going to save', persona);
    
    //this.subirArchivo(product);
    this.serviceCli.add(persona)
      .subscribe(resul=>{
          console.log('Gracias Por Preferirnos')
          this.router.navigate(['/log']);
          //Mensajes de confirmacion
          this.snackBar.open('Gracias Por Preferirnos','Close',{
            duration: 3000
          });
      });
    }else{
      console.error('Persona no creado')
    }
}


}
