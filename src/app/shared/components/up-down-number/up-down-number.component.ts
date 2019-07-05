import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-up-down-number',
  templateUrl: './up-down-number.component.html',
  styleUrls: ['./up-down-number.component.scss']
})
export class UpDownNumberComponent implements OnInit {

  @Input() refreshRateValue: number;
  @Output() change = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  refreshRateChanged(value: string) {
    if (typeof(value) === 'string') {
      this.change.emit(parseInt(value));
    }
  }
}
