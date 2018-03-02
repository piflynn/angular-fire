// @angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// core
import { CoreModule } from './core/core.module';
// shared
import { SharedModule } from './shared/shared.module';

// routing and feature modules
import { AppRoutingModule, routingComponents } from './app.routing';
import { AuthModule } from './auth/auth.module';
import { NavigationModule } from './navigation/navigation.module';
import { TrainingModule } from './training/training.module';

// app component
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    AuthModule,
    NavigationModule,
    TrainingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
