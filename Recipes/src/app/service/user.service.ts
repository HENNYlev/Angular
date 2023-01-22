import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {User} from 'src/models/User';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  CurrentSurfer=new Subject<User>();
  enterUser=new Subject<string>();
  constructor(public myHttp:HttpClient) { }
  addUser(user:User){
  return  this.myHttp.post<User[]>("https://localhost:44324/api/User",user).subscribe((s)=>{
  console.log(s);
  },
  (e)=>{console.log("error",e)});
  }
  printUsers(){
    return this.myHttp.get<User[]>("https://localhost:44324/api/User");
  }
}
