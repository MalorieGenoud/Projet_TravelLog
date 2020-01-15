import { Component, OnInit } from '@angular/core';

// TODO: Websocket
import { WebsocketService } from '../../websocket/websocket.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {

  constructor(private wsService: WebsocketService) {
    this.wsService
        .listen()
        .subscribe(message => {
          // Do something when a message is received
        });
  }

  ngOnInit() {
  }

}
