import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/models/User';
import  swal from 'sweetalert';

import { UserService } from '../service/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  /*סיסמא*/
  hide = true;
  /*מייל*/
  email = new FormControl('', [Validators.required, Validators.email]);
  /**/
  // code = 2;
  newUser: User = new User(null, null, null, null, null);
 existUser: string="enter your name";
  arrUsers: User[];
  constructor(public userServ: UserService, public rout: Router,public active:ActivatedRoute) {
    this.active.params.subscribe((succ)=>{this.existUser=succ.d})
  }
  add(form) {
    let find = false;
    for (let i = 0; i < this.arrUsers.length; i++) {
      if (this.arrUsers[i].Name == this.newUser.Name&&this.arrUsers[i].Psw==this.newUser.Psw
        &&this.arrUsers[i].Mail==this.newUser.Mail) {
        find = true;
      }
    }
    if (find == true) {
      alert("פרטיך קימים במערכת נסה להכנס ללא הרשמה");
    }
    else {
      this.newUser.Code = this.arrUsers.length;
      this.userServ.addUser(this.newUser);
      localStorage.setItem("newUser", JSON.stringify(this.newUser));
      this.userServ.CurrentSurfer.next(this.newUser);
      form.reset();
      swal({icon:'../assets/Webp.net-gifmaker (3).gif' ,
        title:'!!מזל טוב על הצטרפותך',
        text:'...תוכל לצפות במתכונים שלנו ולשתף בשלך',
        

      })
      this.rout.navigate(['/all']);
    }
  }
  ngOnInit(): void {
    this.userServ.printUsers().subscribe((s) => {
      this.arrUsers = s;
      console.log(s);
    }, (err) => { console.log("error", err) });
    this.userServ.enterUser.subscribe((s)=>{
this.existUser=s;
console.log(s);
    },(e)=>{
      console.log("error",e);
    })

  }


}



