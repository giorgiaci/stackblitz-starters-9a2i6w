import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { CommonModule } from '@angular/common';
import { InputSelectComponent } from './input-select.component';
import { InputTextComponent } from './input-text.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, CommonModule],
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    InputSelectComponent,
    InputTextComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
