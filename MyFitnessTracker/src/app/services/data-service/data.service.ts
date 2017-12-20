import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) 
  {
      console.log('Data service connected...');
  }

  getPosts(){ 
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=cbs-news&apiKey=0d94eb7f84ab46eab74754ffd7eaff82').map(res => res.json());
  }  //https://newsapi.org/v2/top-headlines?sources=medical-news-today&apiKey=0d94eb7f84ab46eab74754ffd7eaff82

}
