import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/takeUntil';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  public submitText = 'submit';
  public submitAttempt = false;
  public loginForm: FormGroup;
  private ngUnsubscribe: Subject<any> = new Subject();
  constructor(private formBuilder: FormBuilder) {}
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength]]
    });
    this.loginForm.valueChanges
      .pipe(debounceTime(300))
      .filter(value => this.loginForm.valid)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(value => {
        console.log(this.loginForm);
      });
  }
  onSubmit() {
    this.submitAttempt = true;
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
