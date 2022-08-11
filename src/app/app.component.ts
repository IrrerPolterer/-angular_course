import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  evens: number[] = [];
  odds: number[] = [];

  onGameIncrement(gameIncrementEvent: { increment: number }) {
    let n = gameIncrementEvent.increment;
    if (n % 2) {
      this.odds.push(n);
    } else {
      this.evens.push(n);
    }
  }
}
