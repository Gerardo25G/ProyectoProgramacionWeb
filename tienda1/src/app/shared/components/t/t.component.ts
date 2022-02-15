import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Persona } from '../module/persona';
import { PersonaService } from '../service/persona.service';

@Component({
  selector: 'ed-t',
  templateUrl: './t.component.html',
  styleUrls: ['./t.component.css']
})
export class TComponent implements OnInit {

  form:FormGroup = new FormGroup({
    cedula: new FormControl(''),
    contra: new FormControl(''),
  });

  constructor(private router:Router, private serviceP:PersonaService,private snackBar: MatSnackBar,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  submit(){
    if(this.form.valid){
      this.serviceP.getCedula(this.form.controls.cedula.value)
      .subscribe(persona =>{
        console.log('persona',persona);
        if(persona==null){
          this.snackBar.open('No exiten sus Datos','Close',{
            duration: 3000
          });
        }else{
          this.validateLogin(this.form.controls.cedula.value, this.form.controls.contra.value, persona)
        }

      });

    }
  
  }

  private validateLogin(cedula:any, pass:any, persona:Persona){
     if(cedula===persona.cedula && pass === persona.clave){
       //redireccion
       console.log("Estamos aqui")
       this.router.navigate(['/','listCliente', persona.cedula]);
     }if(cedula==="0105295786" && pass === "Gera"){
      //redireccion
      console.log("Gerardo Guamani")
      this.router.navigate(['/list'])
    }else{
      this.snackBar.open('Sus Credenciales estan mal digitadas','Close',{
        duration: 3000
      });
     }
  }


  crear(){
    this.router.navigate(['/crea'])
  }

}
