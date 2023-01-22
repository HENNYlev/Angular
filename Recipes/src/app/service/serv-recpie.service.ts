import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from 'src/models/Recipe';

@Injectable({
  providedIn: 'root'
})
export class ServRecpieService {
  constructor(public myHttp: HttpClient) { }
  getAllRecipes(){
return this.myHttp.get<Recipe[]>("https://localhost:44324/api/Recipe");
  }
  getRecipeById(code){
    return this.myHttp.get<Recipe>("https://localhost:44324/api/Recipe?id="+code);
  }
  deleteRecipeById(code){
    return this.myHttp.delete<Recipe[]>("https://localhost:44324/api/Recipe/"+code).subscribe(
      (s)=>{console.log("???????????????????????",s)},(e)=>{console.log("errorrrrrrrrrrr",e)});
  }
  addRecipe(recipe:Recipe){
  return  this.myHttp.post<Recipe[]>("https://localhost:44324/api/Recipe",recipe).subscribe((s)=>{
console.log(s)},(e)=>{console.log(e)});
  }
 
  
}
