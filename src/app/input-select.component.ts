import { Component, Input } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

import { QuestionBase } from './question-base';

@Component({
  selector: 'app-input-select',
  template: `
  <ng-container [formGroup]="getControlContainer()">
      <select
      [id]="question.key"      
      [formControlName]="question.key"
    >
      <option *ngFor="let opt of question.options" [value]="opt.key">
        {{ opt.value }}
      </option>
    </select>
  </ng-container>
`,
})
export class InputSelectComponent {
  @Input() question: QuestionBase<string>;

  constructor(public controlContainer: ControlContainer) {}

  getControlContainer(): FormGroup<any> {
    return this.controlContainer.control as FormGroup;
  }
}
