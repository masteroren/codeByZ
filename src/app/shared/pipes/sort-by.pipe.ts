import {Pipe, PipeTransform} from '@angular/core';
import {Stock} from '../../store';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {
  transform(list: Stock[], args: string): Stock[] {
    if (!!list) {
      list.sort((a: Stock, b: Stock) => {
        const valA = parseInt(a[args]);
        const valB = parseInt(b[args]);
        if (valA < valB) {
          return 1;
        } else if (valA > valB) {
          return -1;
        } else {
          return 0;
        }
      });
    }
    return list;
  }
}
