import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { User } from '../model/user/user.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {

  constructor(private htpp:HttpClient) { }


 
  login(usuario:User){
    console.log("Entro al servicio login")
   
    const headers= new HttpHeaders({
      'ContentType':'application/json',
      'Accept':'application/json',
      "Access-Control-Allow-Origin": "https*"
    });
   return this.htpp.post<User>('https://localhost:8080/flockit/login',usuario,{headers});
  }
  
}
