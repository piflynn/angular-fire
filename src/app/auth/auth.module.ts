import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule, routingComponents } from './auth.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule
  ],
  declarations: [
    routingComponents
  ],
  providers: []
})
export class AuthModule { }
