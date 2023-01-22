import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/models/Recipe';
import { ServRecpieService } from '../service/serv-recpie.service';

@Component({
  selector: 'app-deteils',
  templateUrl: './deteils.component.html',
  styleUrls: ['./deteils.component.scss']
})
export class DeteilsComponent implements OnInit {
  deteilesOfRecipe: Recipe=null;
  id: number;
  // arr: Recipe[] = [];
  constructor(public myHttpArr: HttpClient, public myServ: ServRecpieService, public myRoutr: ActivatedRoute) {
    this.myRoutr.params.subscribe((myParameter) => {
      this.id = myParameter.p;
     
    })
    this.myServ.getRecipeById(this.id).subscribe((s) => {
      console.log("sucsses",s);
      this.deteilesOfRecipe=s;
    }, (e) => {
      console.log("error",e);
    })
  }



  ngOnInit(): void {
  }

}
