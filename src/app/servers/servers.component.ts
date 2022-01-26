import { Component, OnInit } from '@angular/core';

@Component({
  // Using the CSS element selector GOOD_PRACTICE:
  selector: 'app-servers',

  // Using the attribute selector of CSS:
  // selector: '[app-servers]',

  // Using the class selector of CSS:
  // selector: '.app-servers',

  // template: '<app-server></app-server><app-server></app-server>',
  // Use `` to write multi-line html
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '???';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
