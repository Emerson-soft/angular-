import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransitionService {
  private transitions: any[];

  constructor() {
    this.transitions = [];
  }

  getTransition() {
    return this.transitions;
  }

  adTransition(transition: any) {
    transition.data = new Date();
    this.transitions.push(transition);
  }
}
