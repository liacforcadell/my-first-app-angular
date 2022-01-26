import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverID = 38;
  serverStatus: string = 'offline';
  // El :string en este caso es redundante, ya que le asignamos un valor a la variable.

  getServerStatus() {
    return this.serverStatus;
  }
}
