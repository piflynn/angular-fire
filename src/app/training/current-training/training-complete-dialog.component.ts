import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-training-complete-dialog',
  template: `<section fxLayout="column" fxLayoutAlign="center center">
              <h1 mat-dialog-title>Congratulations!</h1>
              <mat-dialog-content fxLayout="column" fxLayoutAlign="center center">
                <p style="text-align: center;">{{ data.name }}, You've Completed The Workout!</p>
                <p>Progress: {{ data.progress }}%</p>
              </mat-dialog-content>
              <mat-dialog-actions>
                <button mat-button [mat-dialog-close]="true">YES</button>
                <button mat-button [mat-dialog-close]="false">NO</button>
              </mat-dialog-actions>
            </section>`,
  styles: []
})
export class TrainingCompleteDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { name: string; progress: number }
  ) {}

  ngOnInit() {}
}
