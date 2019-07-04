import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UpdatedListComponent} from './components/updated-list/updated-list.component';
import {MatCardModule, MatSelectModule} from '@angular/material';
import {UpDownNumberComponent} from './components/up-down-number/up-down-number.component';
import {SortByPipe} from './pipes/sort-by.pipe';

@NgModule({
  declarations: [
    UpdatedListComponent,
    UpDownNumberComponent,
    SortByPipe,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule,
  ],
  exports: [
    UpdatedListComponent,
    UpDownNumberComponent,
    MatCardModule,
    MatSelectModule,
    SortByPipe,
  ],
})
export class SharedModule {
}
