import { TransitionService } from './service/transition.service';
import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private transitionService: TransitionService) {}

  transition($event: any) {
    this.transitionService.adTransition($event);
  }
}
