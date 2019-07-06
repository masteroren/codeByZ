import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {MainComponent} from './main.component';

const mainRouting: Route[] = [
  {path: '', component: MainComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRouting),
  ]
})
export class MainRoutingModule {
}
