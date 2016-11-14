import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';
import * as _ from 'lodash';
import { Observable } from 'rxjs';

import { Api } from '../api';
import { Channel, Stream } from '../app.interfaces';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
})
export class StreamComponent implements OnInit, OnDestroy {

  channels: Observable<Channel[]>;
  streams: Stream[][];
  mostHeard: Stream;
  mostTimesHeard: number;
  unique: number;
  total: number;

  private sub: Subscription;
  private page = 0;
  private loading = false;
  private lastLoaded: Stream;
  private oldChannel = '';

  constructor(
    private api: Api,
    private route: ActivatedRoute,
    private title: Title
  ) { }

  ngOnInit() {
    this.channels = this.api.getChannels();
    this.sub = this.route.params.subscribe((params: Params) => {
      // get segment id from route
      const channelName = params['channelName'];
      if (channelName !== this.oldChannel) {
        this.streams = [];
        this.oldChannel = channelName;
      }
      this.api.currentChannel.next(channelName);
      this.getRecentPage();
      this.api.mostHeard(channelName).then((res) => {
        this.unique = res.length;
        this.total = _.sumBy(res, 'count');
        this.mostHeard = res[0];
      });
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  getRecentPage() {
    if (this.loading) {
      return;
    }
    this.loading = true;
    const channel = this.api.currentChannel.getValue();
    this.api.getRecent(channel, this.lastLoaded).then((recent) => {
      this.streams.push(recent);
      this.lastLoaded = _.last(recent);
      this.loading = false;
    });
  }
  onScroll() {
    this.page = this.page + 1;
    this.getRecentPage();
  }

}
