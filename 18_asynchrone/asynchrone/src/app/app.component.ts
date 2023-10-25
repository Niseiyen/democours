import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'asynchrone';

  constructor() {
    this.changeTitle(this.setTitle)
    // this.changeTitle(() => this.title = "Nouveau titre")
   }
   private setTitle = () => {
     this.title = "Nouveau titre"
   }
 
   /*
  setTitle() {
   console.log("Fonction appelée")
   this.title = "Nouveau titre"
  }
  */
   private changeTitle(callback: Function) {
     setTimeout(
       callback
       , 2000
     );
   }
}
