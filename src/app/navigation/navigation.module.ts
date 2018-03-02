import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    SidenavListComponent,
    HeaderComponent
  ],
  exports: [
    SidenavListComponent,
    HeaderComponent
  ]
})
export class NavigationModule {}
