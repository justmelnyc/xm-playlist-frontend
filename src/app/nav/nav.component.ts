import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Api } from '../api';
import { Channel } from '../channel';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {
  channels: Channel[];
  channelName: string;
  private sub: Subscription;

  constructor(
    private api: Api,
  ) { }

  ngOnInit() {
    this.api.getChannels().then((channels => this.channels = channels));
    this.sub = this.api.currentChannel.subscribe((channelName) => {
      this.channelName = channelName;
      console.log(channelName);
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
