import { Component, Input } from '@angular/core';
import { ILogevent } from '../interfaces/logevent';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent {
  @Input('logEnfant') Logs: ILogevent[] = [];
}
