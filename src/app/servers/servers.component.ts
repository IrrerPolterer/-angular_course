import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = '';
  serverName = 'ABC-Server';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onAddServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Created new server!';
  }

  // onUpdateServerName(event: any) {
  //   this.serverName = event.target.value;
  // }
}
