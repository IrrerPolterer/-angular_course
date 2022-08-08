import { Component } from '@angular/core';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showDetails = false;
  toggleLog:number[] = [];

  toggleDetails() {
    this.showDetails = !this.showDetails;
    this.toggleLog.push(Date.now());
  }
}
