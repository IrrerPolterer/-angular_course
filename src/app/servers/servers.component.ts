import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = 'ABC-Server';
  serverCreated = false;
  servers = ['test_server', 'demo_server'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onAddServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  // onUpdateServerName(event: any) {
  //   this.serverName = event.target.value;
  // }
}
