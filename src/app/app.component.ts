import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public navLinks = [
    {text: 'Signup', link: '/signup', icon: 'person_add'},
    {text: 'Login', link: '/login', icon: 'input'},
    {text: 'Training', link: '/training', icon: 'terrain'}
  ];
}
