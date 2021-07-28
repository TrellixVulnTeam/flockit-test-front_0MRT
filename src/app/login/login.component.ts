import { LoginServicesService } from './../services/login-services.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user/user.component';

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

  onSubmit(username:string, password:string){
    this.usuario.username=username;
    this.usuario.password=password;
    console.log(this.usuario);

    this.loginServices.login(this.usuario).subscribe(resp=>{
      console.log(resp);
      this.respuesta=resp;
    });


  }


  

}
