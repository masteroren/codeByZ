import {Pipe, PipeTransform} from '@angular/core';
import {SelectOption} from '../interfaces/select-options';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(list: SelectOption[], name: string, value: boolean): SelectOption[] {
    return list.filter(item => item[name] === value);
  }
}
