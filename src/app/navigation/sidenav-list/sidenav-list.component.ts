import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

import { Subject } from 'rxjs/Subject';

import { navLinks } from '../nav-links';
import { AuthService } from '../../core/services/auth.service';
@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  public navLinks = navLinks;
  public isAuth: boolean;
  private ngUnsubscribe: Subject<any> = new Subject();
  @Output() public closeSideNav = new EventEmitter<void>();
  constructor(private authService: AuthService) {}
  public ngOnInit() {
    this.authService.authChange
      .takeUntil(this.ngUnsubscribe)
      .subscribe(authStatus => {
        this.isAuth = authStatus;
    });
  }
  public close() {
    this.closeSideNav.emit();
  }
  public logout() {
    this.close();
    this.authService.logout();
  }
  public ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
