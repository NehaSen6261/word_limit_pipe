import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let newstr: string = "";
    for (let i = value.length - 1; i >= 0; i--) {
      newstr += value.charAt(i);
     // newstr =newstr+ value.charAt(i); 
    }

    return newstr;
  }

}
