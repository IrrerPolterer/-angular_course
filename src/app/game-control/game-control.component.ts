import { Component, EventEmitter, Output } from '@angular/core';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss'],
})
export class GameControlComponent {
  @Output() gameIncrement = new EventEmitter<{ increment: number }>();
  increment = 0;
  interval: any;

  onGameStart() {
    this.interval = setInterval(() => {
      this.increment += 1;
      this.gameIncrement.emit({ increment: this.increment });
    }, 1000);
  }

  onGameStop() {
    clearInterval(this.interval);
  }
}
