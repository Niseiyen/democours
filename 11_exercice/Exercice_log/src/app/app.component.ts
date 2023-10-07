import { Component } from '@angular/core';
import { ILogevent } from './interfaces/logevent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercice_log';

  mesLog: ILogevent[] = [];
  
  addLog(log: ILogevent) {
    this.mesLog.push(log);
  }
}
