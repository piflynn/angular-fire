import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingComponent } from './training.component';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { PastTrainingComponent } from './past-training/past-training.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent
  ]
})
export class TrainingModule { }
