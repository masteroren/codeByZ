import {Component, OnInit} from '@angular/core';
import {StockFacadeService} from '../../shared/services/facade.service';
import {Observable} from 'rxjs';
import {ActionsSubject} from '@ngrx/store';
import {StockActions} from '../../store/actions';
import {Stock} from '../../store';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public stocks$: Observable<Stock[]>;

  constructor(private stocksFacade: StockFacadeService, private actionsSubject: ActionsSubject) {
  }

  ngOnInit() {
    this.actionsSubject
      .subscribe(action => {
        switch (action.type) {
          case StockActions.ADD:
            this.stocksFacade.getStocks();
            return;
          case StockActions.GET_SUCCESS:
            this.stocks$ = this.stocksFacade.getAll();
            return;
        }
      });
  }

  removeStock(stock: Stock) {
    this.stocksFacade.removeStock(stock);
  }
}
