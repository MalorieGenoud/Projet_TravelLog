import { Component, OnInit } from '@angular/core';

// TODO: Websocket
import { WebsocketService } from '../../websocket/websocket.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {
  message: any;
  placesCount: number;
  tripsCount: number;
  userCount: number;

  constructor(private wsService: WebsocketService) {
    this.wsService
        .listen()
        .subscribe((message: any) => {
            this.message = JSON.parse(message);
            this.placesCount = this.message.stats.placesCount;
            this.tripsCount = this.message.stats.tripsCount;
            console.log(this.message.stats)
          });
  }

  ngOnInit() {
  }

}
