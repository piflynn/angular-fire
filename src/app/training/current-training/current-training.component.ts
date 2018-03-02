import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';
import { timer } from 'rxjs/observable/timer';
import { MatDialog } from '@angular/material';
import { TrainingCompleteDialogComponent } from './training-complete-dialog.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit, OnDestroy {
  public progress = 0;
  public name = 'Ian';
  private ngUnsubscribe: Subject<any> = new Subject();
  constructor(private dialog: MatDialog) {}
  ngOnInit() {}
  public startTraining() {
    this.progress = 0;
    timer(1000, 1000)
      .take(10)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(value => {
        this.progress = (value + 1) * 10;
        if (this.progress === 100) {
          const dialogRef =  this.dialog.open(TrainingCompleteDialogComponent, {data: {name: this.name, progress: this.progress}});
          dialogRef.afterClosed().take(1).subscribe((result) => {
            console.log(result);
          });
        }
      });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
