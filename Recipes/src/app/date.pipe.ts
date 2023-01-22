import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from 'querystring';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value){
   var s:String = ""+value;
   s=s.slice(0,10);
   return s;
  }

}
