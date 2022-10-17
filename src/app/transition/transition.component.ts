import { Transition } from './../../interface/transistionInterface';
import { TransitionService } from './../service/transition.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.scss'],
})
export class TransitionComponent implements OnInit {
  @Output() hasSucess = new EventEmitter<string>();

  constructor(
    private formBuild: FormBuilder,
    private transitionService: TransitionService,
    private router: Router
  ) {}

  transitionForm = this.formBuild.group({
    value: [null, [Validators.required]],
    destiny: [null, Validators.required],
  });

  ngOnInit(): void {}

  transition() {
    if (!this.canSend()) {
      alert('Informe os valores por favor!');
      return;
    }

    const valor = this.transitionForm.get('value')?.value;
    const destino = this.transitionForm.get('destiny')?.value;

    const transition = new Transition();
    transition.destino = destino!;
    transition.valor = valor!;

    this.transitionService.addTransition(transition).subscribe(
      () => {
        this.router.navigateByUrl('extrato');
      },
      (err) => {
        console.log(err);
      }
    );

    this.transitionForm.reset();
  }

  canSend(): boolean {
    return this.transitionForm.status === 'VALID';
  }
}
