import { Component } from '@angular/core';

@Component({
  selector: 'app-newcomponent',
  templateUrl: './newcomponent.component.html',
  styleUrls: ['./newcomponent.component.css']
})
export class NewcomponentComponent {

  unevaleur = 42;

  deuxfois() {
    return this.unevaleur * 2;
  }

}
