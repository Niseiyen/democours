import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'asynAwait';

  constructor() {
    this.appelUnDelaie();
  }

  async appelUnDelaie() {
    await this.onComplete();
    this.setTitle();
  }

  private onComplete():Promise<void> {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

  private setTitle = () => {
    this.title = "Nouveau message"
  }
}
