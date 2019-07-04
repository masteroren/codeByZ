import {Component, OnInit} from '@angular/core';
import {debounceTime, tap, timeInterval} from 'rxjs/operators';
import {BehaviorSubject, interval, Observable, of, Subject, Subscription} from 'rxjs';
import {StockFacadeService} from './shared/services/facade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'codeByZ';

  constructor(private stocksFacade: StockFacadeService) {
  }

  ngOnInit(): void {
    // this.stocksFacade.getRefreshRate()
    //   .pipe(
    //     debounceTime(300),
    //   )
    //   .subscribe(value => {
    //     if (this.intervalSubscription$) {
    //       this.intervalSubscription$.unsubscribe();
    //     }
    //     // this.startPooling(value);
    //   });


  }

  // startPooling(value) {
  //   this.intervalSubscription$ = interval(value * 1000)
  //     // .pipe(
  //     //   tap(console.log),
  //     // )
  //     .subscribe(() => {
  //       this.stocksFacade.getStocks();
  //     });
  // }
}
