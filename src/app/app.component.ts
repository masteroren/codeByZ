import {Component, OnInit} from '@angular/core';
import {StockFacadeService} from './shared/services/facade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'codeByZ';

  constructor(private stocksFacade: StockFacadeService) {
  }

  ngOnInit(): void {

  }

  // TODO: Routing
}
