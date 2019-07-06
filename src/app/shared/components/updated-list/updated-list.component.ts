import {Component, Input, Output, EventEmitter} from '@angular/core';
import {SelectOption} from '../../interfaces/select-options';

@Component({
  selector: 'updated-list',
  templateUrl: './updated-list.component.html',
  styleUrls: ['./updated-list.component.scss']
})
export class UpdatedListComponent {

  @Input() options: SelectOption[];
  @Output() selected = new EventEmitter();

  selectionChanged(index: number) {
    if (index !== 0) {
      const option = this.options[index];
      this.selected.emit(option.name);
    }
  }
}
