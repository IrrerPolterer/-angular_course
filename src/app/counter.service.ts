import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  setActiveCounter: number = 0;
  setInactiveCounter: number = 0;

  incrementSetActiveCounter() {
    this.setActiveCounter++;
    console.log('setActiveCounter: ' + this.setActiveCounter);
  }
  incrementSetInactiveCounter() {
    this.setInactiveCounter++;
    console.log('setInactiveCounter: ' + this.setInactiveCounter);
  }
}
