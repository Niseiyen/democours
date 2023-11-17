import { Component } from '@angular/core';
import { MonapiService } from './service/monapi.service';
import { IRecette } from './interface/recettes';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'APICLIENT';

  mesRecettes: IRecette[] = [];

  constructor(
    private monService: MonapiService
  ) { 

    this.monService.getDataFromAPI().subscribe(
      {
        next: (data: any) => {
          console.log(data);
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => {
          console.log('complete');
        }
      }
    );
  }
}
