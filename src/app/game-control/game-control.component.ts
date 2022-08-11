import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss'],
})
export class GameControlComponent implements OnInit {
  @Output() gameStart = new EventEmitter();
  @Output() gameStop = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
