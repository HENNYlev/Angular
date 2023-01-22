import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value:number) {
    let minut: number;
    let houer: number=0;
    if (value < 60) {
      return value+" דקות ";
    }
    if (value >= 60 && value < 120) {
      minut = value - 60;
      if (minut != 0) {
        return  "שעה ו "+minut+"  דקות";
      }
      return "שעה";
    }
    else
      while (value >= 60) {
        houer++;
        value-=60;
      }
      minut=value;
      if(minut==0){
   return houer+"  שעות";
      }
         return houer+" שעות"+minut+" דקות";
  }
}
