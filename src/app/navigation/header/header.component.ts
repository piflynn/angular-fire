import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { navLinks } from '../nav-links';
import { AuthService } from '../../core/services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public navLinks = navLinks;
  public isAuth: boolean;
  private ngUnsubscribe: Subject<any> = new Subject();
  @Output() public toggleSideNav = new EventEmitter<void>();
  constructor(private authService: AuthService) { }
  ngOnInit() {
    this.authService.authChange
      .takeUntil(this.ngUnsubscribe)
      .subscribe(authStatus => {
        this.isAuth = authStatus;
    });
  }
  public toggle() {
    this.toggleSideNav.emit();
  }
  public logout() {
    this.authService.logout();
  }
  public ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
