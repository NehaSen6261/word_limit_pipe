import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitword'
})
export class LimitwordPipe implements PipeTransform {

  transform(value: any, limit: number, symbol: string): any {
    let limitchar = limit != null ? limit : 10;
    let mysymbol = symbol != null ? symbol : ".....";

    return value.length > limitchar ? value.substring(0, limitchar) + mysymbol : value;
  }

}
