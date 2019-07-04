import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UpdatedListComponent} from './components/updated-list/updated-list.component';
import {MatCardModule, MatSelectModule} from '@angular/material';

@NgModule({
  declarations: [
    UpdatedListComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule,
  ],
  exports: [
    UpdatedListComponent,
    MatCardModule,
    MatSelectModule,
  ],
})
export class SharedModule {
}
