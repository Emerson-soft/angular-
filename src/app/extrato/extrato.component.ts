import { TransitionService } from './../service/transition.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent {
  eventTransitions: any[];

  constructor(transitionService: TransitionService) {
    this.eventTransitions = transitionService.getTransition();
  }

  canShow(): boolean {
    return this.eventTransitions.length > 0;
  }
}
