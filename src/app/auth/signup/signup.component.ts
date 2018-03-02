import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { debounceTime } from 'rxjs/operators';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from '../../core/services/auth.service';
import { IAuthData } from '../auth-data.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit, OnDestroy {
  public submitText = 'submit';
  public maxBirthday = new Date();
  public newUser: IAuthData;
  public submitAttempt = false;
  public signupForm: FormGroup;

  // subject used to unsubscribe from subscriptions within ngDestroy
  private ngUnsubscribe: Subject<any> = new Subject();

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  // form control getters
  get email() { return this.signupForm.get('email'); }
  get password() { return this.signupForm.get('password'); }
  get birthday() { return this.signupForm.get('birthday'); }
  get agree() { return this.signupForm.get('agree'); }

  public ngOnInit() {
    // use formBuilder to quickly add formControls with default values and validators
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength]],
      birthday: ['', [Validators.required]],
      agree: ['', Validators.required]
    });

    // subscribe to form value changes, pipe, filter, debounce, etc
    // populate object when form is valid
    this.signupForm.valueChanges
      .filter((value) => this.signupForm.valid)
      .takeUntil(this.ngUnsubscribe)
      .subscribe((value) => {
        this.newUser = {
          email: value.email,
          password: value.password
        };
      });
  }

  public onSubmit() {
    console.log(this.newUser);
    this.authService.registerUser(this.newUser);
    this.submitAttempt = true;
  }

  public ngOnDestroy() {
    // unsubscribe from ALL subscriptions using takeUntil(this.ngUnsubscribe)
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
