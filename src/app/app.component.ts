import { Component } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private swPush: SwPush, private swUpdates: SwUpdate) {}

  title = 'MyNewsApp';

  ngOnInit(): void {
    this.reloadApp();
  }

  reloadApp(): void {
    if (this.swUpdates.isEnabled) {
      this.swUpdates.available.subscribe(() => {
        if (confirm('New version fo this app,want to update')) {
          window.location.reload();
        }
      });
    }
    this.swUpdates.checkForUpdate();
  }

  readonly VAPID_PUBLIC_KEY =
    'BCTvTVjKF981uKf9UI-jFIeHWWyLWgRQa3VkT2RS-AxTXxS6t1vGJ0JDDUkmvvJ3lWC718DwDNuGYgGtxq5WB5U';

  //favourite
  isFavoriteFilter: boolean = false;
  favoriteCount: number = 0;

  addfav(favoriteCount: number) {
    favoriteCount++;
    console.log('hi');
  }
}
