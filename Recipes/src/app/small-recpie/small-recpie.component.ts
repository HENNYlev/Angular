import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/models/Recipe';
import { User } from 'src/models/User';

@Component({
  selector: 'app-small-recpie',
  templateUrl: './small-recpie.component.html',
  styleUrls: ['./small-recpie.component.scss']
})
export class SmallRecpieComponent implements OnInit {
  @Input()
  myRecpie: Recipe;
  myUser:User;
  // okeyUser;
  constructor() { }
// stars(size:number){
//   return new  Array(size);
// }
// check(){
//   this.checkUser=JSON.parse(localStorage.getItem("newUser"));
//   if(this.checkUser==null)
//   return false;
// return true;
// }
okey(){
if(localStorage.getItem("newUser"))
  return true;
return false;  

}
  ngOnInit(): void {
  }

}
