import { Component } from '@angular/core';
import { AppService } from './app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isCollapsed = true;

  constructor(public appService: AppService) {
    this.appService.onAuthStateChanged()
  }


  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
}
