import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';


@Component({
  selector: 'ed-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  form = new FormGroup({
    //user: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private router: Router){

  }

  ngOnInit(): void {
  }
  

  submit(){
    console.log(this.form.value)
    //this.router.navigate(['/det'])
  }

  private validateLogin(user:User){
    if(user.username==='admin' && user.password === 'admin'){
      //redireccion
      this.router.navigate(['/'])
    }else{
      console.error('Invalido')
    }
  }

  crear(){
    this.router.navigate(['/crea'])
  }
  

}
