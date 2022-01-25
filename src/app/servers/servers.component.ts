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
  template: `
    <app-server></app-server>
    <app-server></app-server>
  `,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
