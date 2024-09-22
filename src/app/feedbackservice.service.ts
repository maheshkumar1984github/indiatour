import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackserviceService {

  constructor(private http: HttpClient) { }

  saveDatainFile(){
    const user = {
      name: 'Arthur',
      age: 21
     };
    const options = {Headers, responseType: 'json' as 'blob'};
    this.http.post('assets/data/test.json', user, options).subscribe(
      data => {
         console.log(data);
      })
  }
}
