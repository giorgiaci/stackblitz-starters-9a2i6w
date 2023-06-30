import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from './question-base';

@Component({
  selector: 'app-question',
  template: `
 <div [formGroup]="form">


  <div [ngSwitch]="question.controlType">
    <app-input-text
    *ngSwitchCase="'textbox'"
    [formGroup]="form"
    [question]="question"
    ></app-input-text>
    
    <app-input-select
    *ngSwitchCase="'dropdown'"
    [question]="question"
    [formGroup]="form"
    ></app-input-select>
    
  </div>

  <div class="errorMessage" *ngIf="!isValid">
    {{ question.label }} is required
  </div>
</div>

 `,
})
export class DynamicFormQuestionComponent {
  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;
  get isValid() {
    return this.form.controls[this.question.key].valid;
  }
}
