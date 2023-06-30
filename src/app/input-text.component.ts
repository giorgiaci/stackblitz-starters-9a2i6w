import { Component, Input } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

import { QuestionBase } from './question-base';

@Component({
  selector: 'app-input-text',
  template: `
  <label [attr.for]="question.key">{{ question.label }}</label>
  <input
    [formGroup]="getControlContainer()"
    [formControlName]="question.key"
    [id]="question.key"
    [type]="question.type"
  />
`,
})
export class InputTextComponent {
  @Input() question: QuestionBase<string>;

  constructor(public controlContainer: ControlContainer) {}

  getControlContainer(): FormGroup<any> {
    return this.controlContainer.control as FormGroup;
  }
}
