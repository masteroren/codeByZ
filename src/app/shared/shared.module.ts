import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UpdatedListComponent} from './components/updated-list/updated-list.component';
import {MatCardModule, MatSelectModule} from '@angular/material';
import {UpDownNumberComponent} from './components/up-down-number/up-down-number.component';
import {SortByPipe} from './pipes/sort-by.pipe';
import {FilterPipe} from './pipes/filter.pipe';

const MATERIAL_MODULS = [
  MatCardModule,
  MatSelectModule,
];

const PIPES = [
  SortByPipe,
  FilterPipe,
];

@NgModule({
  declarations: [
    UpdatedListComponent,
    UpDownNumberComponent,
    [...PIPES],
  ],
  imports: [
    CommonModule,
    [...MATERIAL_MODULS],
  ],
  exports: [
    UpdatedListComponent,
    UpDownNumberComponent,
    [...MATERIAL_MODULS],
    [...PIPES],
  ],
})
export class SharedModule {
}
