import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kategory } from 'src/models/Kategory';
import { Recipe } from 'src/models/Recipe';
import { ServRecpieService } from '../service/serv-recpie.service';

@Component({
  selector: 'app-all-recpie',
  templateUrl: './all-recpie.component.html',
  styleUrls: ['./all-recpie.component.scss']
})
export class AllRecpieComponent implements OnInit {
  allRecpies: Recipe[];

  kategory: Kategory[]=[
    new Kategory(0,"הכל",""),
  new Kategory(1,"בשרי",""),
  new Kategory(2,"דגים",""),
  new Kategory(3,"ילדים",""),
  new Kategory(4,"מתכונים בעשר דקות",""), 
  new Kategory(5,"מאפים",""),
  new Kategory(6,"קינוחים",""),
  ];
  label:Kategory[]=[
    new Kategory(0,"הכל",""),
new Kategory(1,"קל",""),
new Kategory(2,"בסיסי",""),
new  Kategory(3,"בינוני",""),
new Kategory(4,"קשה",""),
new Kategory(5,"מאתגר",""),
  ];
  kategoryChoise:number;
  labelChoise:number;
  duringChoise;
  NowUserCode;
  newArr:Recipe[];
  constructor(public servRecp: ServRecpieService,public rout: Router) {

  }
  localUser(x){
    if(localStorage.getItem("newUser")!=null){
this.NowUserCode=JSON.parse(localStorage.getItem("newUser")).Code;
if(x==this.NowUserCode)
return true;
    }
return false;

  }
  deleteRecipe(id){
this.servRecp.deleteRecipeById(id);
this.servRecp.getAllRecipes().subscribe((succ)=>{this.newArr=succ;
  console.log("well down",this.newArr)},
  (err)=>{console.log("!!!!!!!!!!!!!!!!!!",err)});
this.ngOnInit();
}

  serch(){
    console.log(this.kategoryChoise);
    console.log(this.labelChoise);
    console.log(this.duringChoise);
  this.newArr=this.allRecpies.filter((item)=>{
    return (this.kategoryChoise==0||this.kategoryChoise==undefined||this.kategoryChoise==item.CodeKatgory)&&
  (this.labelChoise==0||this.labelChoise==undefined||this.labelChoise==item.Label)&&
(this.duringChoise==undefined||this.duringChoise>=item.OrderTime||this.duringChoise=="")})
  }
  ngOnInit(): void { 
    this.servRecp.getAllRecipes().subscribe((s)=>{
      // console.log("sucsses");
      console.log(s);
      this.allRecpies = s;
      this.newArr=this.allRecpies;
      console.log(this.newArr);
    },(e)=>{
      // console.log("error");
      console.log(e);
    })
    
  }
}
