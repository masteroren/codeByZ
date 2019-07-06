import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {stocksReducer} from '../store/reducers';
import {EffectsModule} from '@ngrx/effects';
import {StocksEffects} from '../store/effects';
import {MainComponent} from './main.component';
import {MainRoutingModule} from './main-routing.module';
import {SharedModule} from '../shared/shared.module';
import {MatCardModule, MatSelectModule} from '@angular/material';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {StockSelectorComponent} from './stock-selector/stock-selector.component';

@NgModule({
  declarations: [
    MainComponent,
    PortfolioComponent,
    StockSelectorComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('stocks', stocksReducer),
    EffectsModule.forFeature([StocksEffects]),
    MainRoutingModule,
    SharedModule,
    MatCardModule,
    MatSelectModule,
  ],
})
export class MainModule {
}
