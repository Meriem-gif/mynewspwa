import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthNewsComponent } from './health-news/health-news.component';
import { SportNewsComponent } from './sport-news/sport-news.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { TopheadlineComponent } from './topheadline/topheadline.component';

const routes: Routes = [
  { path: '', component: TopheadlineComponent },
  { path: 'Technology', component: TechNewsComponent },
  { path: 'Health', component: HealthNewsComponent },
  { path: 'Sport', component: SportNewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
