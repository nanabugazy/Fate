import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug'
})
export class AppComponent {
  constructor(public auth: AuthenticationService) {}
}
