import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss'],
})
export class GameControlComponent {
  @Output() gameIncrement = new EventEmitter<number>();
  increment = 0;
  interval: any;

  onGameStart() {
    this.interval = setInterval(() => {
      this.increment++;
      this.gameIncrement.emit(this.increment);
    }, 1000);
  }

  onGameStop() {
    clearInterval(this.interval);
  }
}
