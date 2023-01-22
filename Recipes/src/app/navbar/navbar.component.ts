import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/User';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userNow="אורח";
  checkUser;
  myName="enter your name";
  constructor(public userServ:UserService) { }
  out(){
    localStorage.removeItem("newUser");
    this.userNow="אורח";
  }
  check(){
    this.checkUser=JSON.parse(localStorage.getItem("newUser"));
    if(this.checkUser==null)
    return false;
  return true;
  }
  ngOnInit(): void {
    this.userServ.CurrentSurfer.subscribe(succ=>{
      this.userNow=succ.Name;
    },
    err=>{console.log("error",err);})
  }

}
