import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [],
  exports: [
    RouterModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class SharedModule { }
