import { LoginServicesService } from './../services/login-services.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user/user.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario!:User;
  respuesta:any;
  constructor(private loginServices:LoginServicesService) { 
    
  }

  ngOnInit(): void {
    this.usuario=new User();

  }

  onSubmit(form:NgForm){
    if(form.invalid) return;
    console.log("Form enviado");
    console.log(this.usuario);
    console.log(form);

    this.loginServices.login(this.usuario).subscribe(resp=>{
      console.log(resp);
      this.respuesta=resp;
    });


  }


  

}
