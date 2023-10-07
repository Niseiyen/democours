import { Component, Output, EventEmitter } from '@angular/core';
import { ILogevent } from '../interfaces/logevent';

@Component({
  selector: 'app-bouton',
  templateUrl: './bouton.component.html',
  styleUrls: ['./bouton.component.css']
})
export class BoutonComponent {
  logMessage = '';

  @Output() logEvent = new EventEmitter<ILogevent>();

  sendLog() {
    console.log(this.logMessage);

    this.logEvent.emit({
      date: new Date(),
      message: this.logMessage
    });
  }
}
