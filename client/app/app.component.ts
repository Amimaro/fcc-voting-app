import { Component } from '@angular/core';

import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  constructor(private appService: AppService) { }

  login() {
    this.appService.login();
  }

  logout() {
    window.location.href = '/api/user/auth/logout';
  }

}
