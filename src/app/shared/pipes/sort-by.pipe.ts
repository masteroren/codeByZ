import {Pipe} from '@angular/core';
import {Stock} from '../../store';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe {
  transform(array: Stock[], args: string): Stock[] {
    if (!!array) {
      array.sort((a: Stock, b: Stock) => {
        if (a[args] < b[args]) {
          return -1;
        } else if (a[args] > b[args]) {
          return 1;
        } else {
          return 0;
        }
      });
    }
    return array;
  }
}
