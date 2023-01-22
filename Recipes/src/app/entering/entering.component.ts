import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/models/User';
import  swal from 'sweetalert';


import { UserService } from '../service/user.service';

@Component({
  selector: 'app-entering',
  templateUrl: './entering.component.html',
  styleUrls: ['./entering.component.scss']
})
export class EnteringComponent implements OnInit {
/*סיסמא*/
hide = true;
/*מייל*/
email = new FormControl('', [Validators.required, Validators.email]);
/**/ 
cuurentUser:User=new User(null,null,null,null,null);
allUsers:User[]=[];
  constructor(public userServ:UserService,public rout:Router) {

}
enter(u){
let  findAll:boolean=false;
let findName:boolean=false;
for(let i=0;i<this.allUsers.length;i++){
  if(this.allUsers[i].Name==this.cuurentUser.Name&&this.allUsers[i].Psw==this.cuurentUser.Psw){
findAll=true;
this.cuurentUser.Code=this.allUsers[i].Code;
  }
  if(this.allUsers[i].Name==this.cuurentUser.Name&&this.allUsers[i].Psw!=this.cuurentUser.Psw){
findName=true;
  }
}
if(findAll==true){
  localStorage.setItem("newUser",JSON.stringify( this.cuurentUser));
  this.userServ.CurrentSurfer.next(this.cuurentUser);
swal({
  title:'שמחים לראותך שוב, התגעגענו',
  icon:'../assets/Webp.net-gifmaker (3).gif' ,
})
  this.rout.navigate(['/all']);
}
if(findName==true){
  alert("סיסמא שגויה");

}
if(findName==false&&findAll==false){
  this.userServ.enterUser.next(this.cuurentUser.Name);
  this.rout.navigate(['/login',this.cuurentUser.Name]);
}

}
  ngOnInit(): void {
    this.userServ.printUsers().subscribe((s)=>{
      console.log(s);
      this.allUsers = s;
    },(e)=>{
      console.log("error",e);
    })
  }

}
