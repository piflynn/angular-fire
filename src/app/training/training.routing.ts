import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingComponent } from './training.component';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { PastTrainingComponent } from './past-training/past-training.component';
import { AuthGuard } from '../core/guards/auth.guard';
const routes: Routes = [
  {
    path: 'training',
    component: TrainingComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule {}

export const routingComponents = [
  TrainingComponent,
  CurrentTrainingComponent,
  NewTrainingComponent,
  PastTrainingComponent
];
