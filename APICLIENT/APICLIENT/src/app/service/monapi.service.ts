import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonapiService {
  getDataFromAPI: any;

  constructor(private http_client: HttpClient) {}

  getDataFormAPI(): Observable<any>{
    return this.http_client.
    get<any>('https://cegep.fdtt.space/v1/recipes').pipe(
      map((data) => {
        return data;
      })
    )
  }
}
