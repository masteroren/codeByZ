import {Component, OnDestroy, OnInit} from '@angular/core';
import {StockFacadeService} from '../../shared/services/facade.service';
import {Observable, Subject} from 'rxjs';
import {ActionsSubject} from '@ngrx/store';
import {StockActions} from '../../store/actions';
import {Stock} from '../../store';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject();
  public stocks$: Observable<Stock[]>;
  public refreshRate$: Observable<number>;

  constructor(private stocksFacade: StockFacadeService, private actionsSubject: ActionsSubject) {
  }

  ngOnInit() {
    this.actionsSubject
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe(action => {
        switch (action.type) {
          case StockActions.ADD_SUCCESS:
            this.stocksFacade.getStocksIds();
            return;
          case StockActions.GET_SUCCESS:
          case StockActions.REMOVE_SUCCESS:
            this.stocks$ = this.stocksFacade.getAll();
            return;
        }
      });

    this.refreshRate$ = this.stocksFacade.getRefreshRate();
  }

  removeStock(stockSymbol: string) {
    this.stocksFacade.removeStock(stockSymbol);
  }

  onRefreshRateChange(refreshRate: number) {
    this.stocksFacade.updateRefreshRate(refreshRate);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
