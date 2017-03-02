import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div class="container-fluid"> <h1> Members List </h1> <app-memberlist></app-memberlist> </div>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
