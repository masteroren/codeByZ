import {Component, OnInit} from '@angular/core';
import {STOCK_TYPES} from 'src/app/shared/types/stock.types';
import {StockFacadeService} from '../../shared/services/facade.service';
import {ActionsSubject} from '@ngrx/store';
import {StockActions} from '../../store/actions';

@Component({
  selector: 'app-stock-selector',
  templateUrl: './stock-selector.component.html',
  styleUrls: ['./stock-selector.component.scss']
})
export class StockSelectorComponent implements OnInit {

  public stockNames = [...STOCK_TYPES];
  public selectedStockName: string;
  public message: string;

  constructor(private stockFacade: StockFacadeService, private actionsSubject: ActionsSubject) {
  }

  ngOnInit() {
    this.actionsSubject
      .subscribe(action => {
        switch (action.type) {
          case StockActions.ADD_SUCCESS:
            this.stockNames = this.stockNames.map(item => {
              if (item.name === this.selectedStockName) {
                item.selected = true;
              }
              return item;
            });
            return;
          case StockActions.REMOVE_SUCCESS:
            this.stockNames = this.stockNames.map(item => {
              if (item.name === action['payload']) {
                item.selected = false;
              }
              return item;
            });
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
    if (this.selectedStockName) {
      this.message = '';
      this.stockFacade.addStock(this.selectedStockName);
    } else {
      this.message = 'Invalid stock selected';
    }
  }
}
