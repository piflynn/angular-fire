import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/takeUntil';
import { debounceTime } from 'rxjs/operators';
import { AuthService } from '../../core/services/auth.service';
import { IAuthData } from '../auth-data.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  public submitText = 'submit';
  public userLogin: IAuthData;
  public submitAttempt = false;
  public loginForm: FormGroup;
  private ngUnsubscribe: Subject<any> = new Subject();
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder) {}
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength]]
    });
    this.loginForm.valueChanges
      .filter(value => this.loginForm.valid)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(value => {
        this.userLogin = {
          email: value.email,
          password: value.password
        };
      });
  }
  onSubmit() {
    this.authService.login(this.userLogin);
    this.submitAttempt = true;
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
