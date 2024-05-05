import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/backend/user.service';
import { Login } from 'src/app/interface/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loader:boolean = false

  
  loginUser:Login = {email:'',password:''}

  constructor (private user:UserService,private router:Router) {}

  handleLogin(){
    this.loader = true
    this.user.loginUser(this.loginUser).subscribe((data:any)=>{
      console.log(data);
      localStorage.setItem('token',data.token);
      this.user.logedUser.next(data)
      this.loader = false;
      this.router.navigate(['/contact'])
    })
  }

}
