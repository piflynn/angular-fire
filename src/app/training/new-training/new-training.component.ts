import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TrainingService } from '../training.service';
import { IExercise } from '../exercise.model';
@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  @Output() public startTrainingEvent = new EventEmitter<void>();
  public exercises: IExercise[];
  constructor(private trainingService: TrainingService) { }
  ngOnInit() {
    this.exercises = this.trainingService.getExercises();
  }
  public startTraining() {
    this.startTrainingEvent.emit();
  }
}
