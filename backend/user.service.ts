import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Observable, Subject} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,private router:Router) { }

  logedUser:Subject<any> = new Subject<any>();
  logedUser$ = this.logedUser.asObservable()

 url:string = 'https://blogingapi-service.onrender.com'

 loginUser(user:any){
   return this.http.post(this.url+"/api/user/login",JSON.stringify(user),{headers:{"Content-Type":"application/json"}})
 }

 logoutUser(){
   localStorage.clear();
   this.logedUser.next(null)
   this.router.navigate(['/login'])
}}
