import { Component,OnInit } from '@angular/core';
import { ContactService } from 'src/app/backend/contact.service';
import { UserService } from 'src/app/backend/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  ngOnInit(): void {
     this.getData()
   }

  contacts:any[]=[];

  constructor (private contact:ContactService,private us:UserService) {}

   getData(){
    this.contact.getContact().subscribe((data:any)=>{
       console.log("BACKEND DATA:",data);
       this.contacts = data.data
     })
   }

   logOut(){
    this.us.logoutUser()
  }

}
