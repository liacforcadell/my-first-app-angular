import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: ` <p class="success">Success Alert</p> `,
  styles: [
    `
      .success {
        padding: 10px 20px;
        color: #fff;
        font-size: 2rem;
        border-radius: 10px;
        background-color: rgb(89, 201, 98);
      }
    `,
  ],
})
export class SuccessAlertComponent {}
