import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {SelectOption} from '../../interfaces/select-options';

@Component({
  selector: 'updated-list',
  templateUrl: './updated-list.component.html',
  styleUrls: ['./updated-list.component.scss']
})
export class UpdatedListComponent implements OnInit {

  @Input() options: SelectOption[];
  @Output() selected = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.selected.emit(this.options[0].name);
  }

  selectionChanged(value: any) {
    this.selected.emit(value);
  }
}
