import { Transition } from './../../interface/transistionInterface';
import { TransitionService } from './../service/transition.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  eventTransitions: Transition[];

  constructor(private transitionService: TransitionService) {
    this.eventTransitions = [];
  }

  ngOnInit(): void {
    this.transitionService.getTransition().subscribe((data) => {
      this.eventTransitions = data;
    });
  }

  canShow(): boolean {
    return this.eventTransitions.length > 0;
  }
}
