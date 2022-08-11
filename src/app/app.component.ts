import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  evens: number[] = [];
  odds: number[] = [];

  onGameIncrement(n: number) {
    if (n % 2) {
      this.odds.push(n);
    } else {
      this.evens.push(n);
    }
  }
}
