import { Component } from '@angular/core';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent {
  monStyle = {
    color: 'lightblue',
    backgroundColor: 'blue',
    border: '1px solid red',
    margin: '1.5em',
    padding: '.5em',
  }

  changerCouleur() {
    this.monStyle.backgroundColor = 'red';
  }
  revenirCouleur() {
    this.monStyle.backgroundColor = 'blue';
  }
}
