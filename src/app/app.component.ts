import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // External CSS File
  // styleUrls: ['./app.component.css'],

  //Inline CSS
  styles: [
    `
      h3 {
        color: red;
      }
    `,
  ],
})
export class AppComponent {}
