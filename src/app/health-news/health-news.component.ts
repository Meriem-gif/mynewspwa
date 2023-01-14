import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-health-news',
  templateUrl: './health-news.component.html',
  styleUrls: ['./health-news.component.css'],
})
export class HealthNewsComponent implements OnInit {
  constructor(private api: NewsService) {}

  addEvent(news: any) {
    news.select = !news.select;
  }
  //health News Data
  healthNewsData: any = [];
  ngOnInit(): void {
    this.api.healthHeadline().subscribe((result) => {
      this.healthNewsData = result.articles;
    });
  }
}
