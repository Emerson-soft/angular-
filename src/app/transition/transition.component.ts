import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.scss'],
})
export class TransitionComponent implements OnInit {
  @Output() onTransition = new EventEmitter<any>();

  constructor(private formBuild: FormBuilder) {}

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

    this.onTransition.emit({ ...this.transitionForm.getRawValue() });
    this.transitionForm.reset();
  }

  canSend(): boolean {
    return this.transitionForm.status === 'VALID';
  }
}
