import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {stocksReducer} from '../store/reducers';
import {EffectsModule} from '@ngrx/effects';
import {StocksEffects} from '../store/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('stocks', stocksReducer),
    EffectsModule.forFeature([StocksEffects]),
  ]
})
export class MainModule { }
