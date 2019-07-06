import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';

const appRouting: Route[] = [
  {path: '', pathMatch: 'full', redirectTo: 'portfolio'},
  {path: 'portfolio', loadChildren: 'src/app/main/main.module#MainModule'},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRouting),
  ]
})
export class AppRoutingModule {
}
