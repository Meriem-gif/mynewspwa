import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private _http: HttpClient) {}

  topHeadlineNews =
    'https://newsapi.org/v2/top-headlines?country=de&apiKey=f7faeda885d042d7ae94573a6ce8c197';

  techNews =
    'https://newsapi.org/v2/top-headlines?country=de&category=technology&apiKey=f7faeda885d042d7ae94573a6ce8c197';

  sportNews =
    'https://newsapi.org/v2/top-headlines?country=de&category=sports&apiKey=f7faeda885d042d7ae94573a6ce8c197';

  healthNews =
    'https://newsapi.org/v2/top-headlines?country=de&category=health&apiKey=f7faeda885d042d7ae94573a6ce8c197';

  //Get top headlins ApiUrl
  topHaedline(): Observable<any> {
    return this._http.get(this.topHeadlineNews);
  }

  // GetTech News
  techHeadline(): Observable<any> {
    return this._http.get(this.techNews);
  }

  //GET SPORT NEWS
  sportHeadline(): Observable<any> {
    return this._http.get(this.sportNews);
  }

  //GET Health NEWS
  healthHeadline(): Observable<any> {
    return this._http.get(this.healthNews);
  }
}
