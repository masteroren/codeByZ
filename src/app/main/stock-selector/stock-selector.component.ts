import {Component, OnInit} from '@angular/core';
import {STOCK_TYPES} from 'src/app/shared/types/stock.types';
import {StockFacadeService} from '../../shared/services/facade.service';
import {Action, ActionsSubject} from '@ngrx/store';
import {StockActions} from '../../store/actions';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-stock-selector',
  templateUrl: './stock-selector.component.html',
  styleUrls: ['./stock-selector.component.scss']
})
export class StockSelectorComponent implements OnInit {

  public stockList = [...STOCK_TYPES];
  public selectedStock;
  public message: string;

  constructor(private stockFacade: StockFacadeService, private actionsSubject: ActionsSubject) {
  }

  ngOnInit() {
    this.actionsSubject
      .subscribe(action => {
        switch (action.type) {
          case StockActions.ADD_SUCCESS:
            return;
          case StockActions.GET_SUCCESS:
            this.message = '';
            return;
          case StockActions.GET_FAILURE:
            this.message = action['payload'];
            return;
          case StockActions.UPDATE_REFRESH_RATE:
            this.message = '';
            if (action['payload'] === 0) {
              this.message = 'Polling stopped';
            }
            return;
        }
      });
  }

  addStock() {
    this.stockFacade.addStock(this.selectedStock);
  }
}
