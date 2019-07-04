import {Component, OnInit} from '@angular/core';
import {STOCK_TYPES} from 'src/app/shared/types/stock.types';
import {StockFacadeService} from '../../shared/services/facade.service';

@Component({
  selector: 'app-stock-selector',
  templateUrl: './stock-selector.component.html',
  styleUrls: ['./stock-selector.component.scss']
})
export class StockSelectorComponent implements OnInit {

  public stockList = [...STOCK_TYPES];
  public selectedStock;

  constructor(private stockFacade: StockFacadeService) {
  }

  ngOnInit() {

  }

  addStock() {
    this.stockFacade.addStock(this.selectedStock);
  }
}
