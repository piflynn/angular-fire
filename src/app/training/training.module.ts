import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { TrainingRoutingModule, routingComponents } from './training.routing';
import { TrainingCompleteDialogComponent } from './current-training/training-complete-dialog.component';
import { TrainingService } from './training.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TrainingRoutingModule
  ],
  declarations: [
    routingComponents,
    TrainingCompleteDialogComponent
  ],
  entryComponents: [
    TrainingCompleteDialogComponent
  ],
  providers: [TrainingService]
})
export class TrainingModule { }
