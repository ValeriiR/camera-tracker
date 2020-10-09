import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, merge, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CamerasService {

  constructor(private http: HttpClient) { }


  getData(): Observable<any> {
    return interval(500).pipe(
      mergeMap(() => this.http.get(`http://localhost:3000/camerasResponse`))
    );
   // return this.http.get(`http://localhost:3000/camerasResponse`);
  }
}
