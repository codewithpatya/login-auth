import { Component,OnInit} from '@angular/core';
import { UserService } from '../backend/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  myUser:any;
  constructor (private us:UserService) {}

  ngOnInit(): void {
    this.us.logedUser$.subscribe((user:any)=>{
      this.myUser = user 
    })  
  }
  logOut(){
    this.us.logoutUser()
  }


}
