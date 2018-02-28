import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/takeUntil';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {
  public submitText = 'submit';
  public maxBirthday = new Date();
  public submitAttempt = false;
  public signupForm: FormGroup;
  private ngUnsubscribe: Subject<any> = new Subject();
  constructor(private formBuilder: FormBuilder) { }
  get email() { return this.signupForm.get('email'); }
  get password() { return this.signupForm.get('password'); }
  get birthday() { return this.signupForm.get('birthday'); }
  get agree() { return this.signupForm.get('agree'); }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength]],
      birthday: ['', [Validators.required]],
      agree: ['', Validators.required]
    });
    this.signupForm.valueChanges
      .pipe(debounceTime(300))
      .filter((value) => this.signupForm.valid)
      .takeUntil(this.ngUnsubscribe)
      .subscribe((value) => {
        console.log(this.signupForm);
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
