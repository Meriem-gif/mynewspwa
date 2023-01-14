import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css'],
})
export class TechNewsComponent implements OnInit {
  constructor(private api: NewsService) {}

  addEvent(news: any) {
    news.select = !news.select;
  }

  techNewsData: any = [];

  //tech News Data

  ngOnInit(): void {
    this.api.techHeadline().subscribe((result) => {
      this.techNewsData = result.articles;
    });
  }
}
