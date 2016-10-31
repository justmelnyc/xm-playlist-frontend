import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs';

import { Api } from '../api';
import { Channel } from '../app.interfaces';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {
  channels: Observable<Channel[]>;
  channelName: string;
  private sub: Subscription;

  constructor(
    private api: Api,
  ) { }

  ngOnInit() {
    this.channels = this.api.getChannels();
    this.sub = this.api.currentChannel.subscribe((channelName) => {
      this.channelName = channelName;
      console.log(channelName);
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
