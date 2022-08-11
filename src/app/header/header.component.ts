import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() navActiveTab: string;
  @Output() navActiveTabChange = new EventEmitter<string>();

  setActiveTab(tab: string) {
    this.navActiveTab = tab;
    this.navActiveTabChange.emit(this.navActiveTab);
  }
}
