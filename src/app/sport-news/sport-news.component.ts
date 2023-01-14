import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-sport-news',
  templateUrl: './sport-news.component.html',
  styleUrls: ['./sport-news.component.css'],
})
export class SportNewsComponent implements OnInit {
  constructor(private api: NewsService) {}
  addEvent(news: any) {
    news.select = !news.select;
  }

  //sport News Data
  sportNewsData: any = [];
  ngOnInit(): void {
    this.api.sportHeadline().subscribe((result) => {
      this.sportNewsData = result.articles;
    });
  }
}
