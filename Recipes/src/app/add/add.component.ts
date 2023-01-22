import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kategory } from 'src/models/Kategory';
import { Recipe } from 'src/models/Recipe';
import { ServRecpieService } from '../service/serv-recpie.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  constructor(public recipeServ:ServRecpieService,public rout:Router) { }
  kategory: Kategory[]=[
  new Kategory(1,"בשרי",""),
  new Kategory(2,"דגים",""),
  new Kategory(3,"ילדים",""),
  new Kategory(4,"מתכונים בעשר דקות",""), 
  new Kategory(5,"מאפים",""),
  new Kategory(6,"קינוחים",""),
  ];
  // code=48;
  recipes:Recipe[];
  labels:string[]=["קל","בסיסי","בינוני","קשה","מאתגר"]
  emptyRecipeLabel="דרגת קושי";
  emptyRecipe:Recipe=null;
  checkArrIngredients() {
    //  this.emptyRecipe.ingredientsList = this.emptyRecipe.ingredientsList.filter((item, index) => { return item != "" });
    this.emptyRecipe.Ingredients.forEach((item, ind) => { if (item == "") this.emptyRecipe.Ingredients.splice(ind, 1) })
    this.emptyRecipe.Ingredients.push("");
  }
  trackByIdIngredients(index: number, obj: any): any {
    return index;
  }
  checkArrPreparation() {
    //  this.emptyRecipe.ingredientsList = this.emptyRecipe.ingredientsList.filter((item, index) => { return item != "" });
    this.emptyRecipe.Preparation.forEach((item, ind) => { if (item == "") this.emptyRecipe.Preparation.splice(ind, 1) })
    this.emptyRecipe.Preparation.push("");
  }
  trackByIdPreparation(index: number, obj: any): any {
    return index;
  }
labelK(img:any){
  let labelImg=(img.slice(3,4));
  this.emptyRecipe.Label=labelImg;
 this.emptyRecipeLabel=this.labels[labelImg-1];
  }
 addR(myForm){
  this.emptyRecipe.CodeRecipe=this.recipes.length;
  this.emptyRecipe.UserCode=JSON.parse(localStorage.getItem("newUser")).Code;
  //console.log(this.emptyRecipe);
  // alert("hgekjbvdfn");
  this.emptyRecipe.Ingredients.pop();
  this.emptyRecipe.Preparation.pop();
 this.recipeServ.addRecipe(this.emptyRecipe);
  this.rout.navigate(['/all']);
  // myForm.reset();
}
  ngOnInit(): void {
   this.emptyRecipe= new Recipe(null, null, null, null, null, null, [""], [""], null, null);
    this.recipeServ.getAllRecipes().subscribe((succ)=>{this.recipes=succ},(err)=>{console.log(err)});
  }

}
