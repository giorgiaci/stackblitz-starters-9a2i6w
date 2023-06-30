import { Component, Input } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

import { QuestionBase } from './question-base';

@Component({
  selector: 'app-input-select',
  template: `
  <select
  [id]="question.key"
  [formGroup]="getControlContainer()"
  [formControlName]="question.key"
>
  <option *ngFor="let opt of question.options" [value]="opt.key">
    {{ opt.value }}
  </option>
</select>

`,
})
export class InputSelectComponent {
  @Input() question: QuestionBase<string>;

  constructor(public controlContainer: ControlContainer) {}

  getControlContainer(): FormGroup<any> {
    return this.controlContainer.control as FormGroup;
  }
}
