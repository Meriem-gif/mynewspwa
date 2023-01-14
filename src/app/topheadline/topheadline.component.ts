import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-topheadline',
  templateUrl: './topheadline.component.html',
  styleUrls: ['./topheadline.component.css'],
})
export class TopheadlineComponent implements OnInit {
  constructor(private api: NewsService) {}
  popup = false;

  addEvent(news: any): void {
    news.select = !news.select;
  }

  //Get Top Headline Data
  topHeadlineData: any = [];
  ngOnInit(): void {
    this.api.topHaedline().subscribe((result) => {
      this.topHeadlineData = result.articles;
    });
  }
}
