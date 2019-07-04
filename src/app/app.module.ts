import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {stocksReducer} from './store/reducers';
import {EffectsModule} from '@ngrx/effects';
import {StocksEffects} from './store/effects';
import {HttpClientModule} from '@angular/common/http';
import {PortfolioComponent} from './main/portfolio/portfolio.component';
import {StockSelectorComponent} from './main/stock-selector/stock-selector.component';
import {MatCardModule, MatSelectModule} from '@angular/material';
import {SharedModule} from './shared/shared.module';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StockFacadeService} from './shared/services/facade.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainModule} from './main/main.module';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    StockSelectorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    MatCardModule,
    MatSelectModule,
    SharedModule,
    MainModule,
  ],
  providers: [StockFacadeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
