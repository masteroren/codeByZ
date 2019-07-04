import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-up-down-number',
  templateUrl: './up-down-number.component.html',
  styleUrls: ['./up-down-number.component.scss']
})
export class UpDownNumberComponent implements OnInit {

  @Input() refreshRateValue;
  @Output() change = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  plus() {
    this.refreshRateValue++;
    this.change.emit(this.refreshRateValue);
  }

  minus() {
    if (this.refreshRateValue === 0) {
      return;
    }
    this.refreshRateValue--;
    this.change.emit(this.refreshRateValue);
  }
}
