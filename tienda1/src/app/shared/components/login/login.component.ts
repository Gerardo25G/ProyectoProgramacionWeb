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


  form:FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private router: Router){

  }

  ngOnInit(): void {
  }

  submit(){
    if(this.form.valid){
      console.log('Submit',this.form.value)
      this.validateLogin(this.form.value)
    }
  }

  private validateLogin(user:User){
    if(user.username==='admin' && user.password === 'admin'){
      //redireccion
      this.router.navigate([''])
    }else{
      console.error('Invalido')
    }
  }

}
