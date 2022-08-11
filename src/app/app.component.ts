import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  onGameIncrement(gameIncrementEvent: { increment: number }) {
    console.log(gameIncrementEvent.increment);
  }
}
