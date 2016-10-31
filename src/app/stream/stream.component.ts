import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';
import * as _ from 'lodash';

import { Api } from '../api';
import { Channel, Stream } from '../app.interfaces';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css']
})
export class StreamComponent implements OnInit, OnDestroy {

  channels: Channel[];
  recent: Stream[] = [];
  mostHeard: Stream;
  mostTimesHeard: number;
  unique: number;
  total: number;

  private sub: Subscription;
  private page = 0;
  private loading = false;

  constructor(
    private api: Api,
    private route: ActivatedRoute,
    private title: Title
  ) { }

  ngOnInit() {
    this.api.getChannels().then((channels => this.channels = channels));
    this.sub = this.route.params.subscribe((params: Params) => {
      // get segment id from route
      let channelName = params['channelName'];
      this.api.currentChannel.next(channelName);
      this.getRecentPage();
    });
  }
  setup() {
    this.total = this.recent.length;
    const songIds = _.map(this.recent, 'songId');
    const heardTimes = _.countBy(songIds);
    const heardTimesPairs = _.toPairs(heardTimes);
    const mostHeard = _.maxBy(heardTimesPairs, _.last);
    this.mostHeard = _.find(this.recent, {songId: mostHeard[0]});
    this.mostTimesHeard = mostHeard[1];
    this.unique = _.keys(heardTimes).length;
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  getRecentPage() {
    if (!this.loading) {
      this.loading = true;
    } else {
      return;
    }
    const channel = this.api.currentChannel.getValue();
    console.log(_.last(this.recent))
    this.api.getRecent(channel, _.last(this.recent)).then((recent) => {
      this.recent = _.concat(this.recent, recent);
      this.loading = false;
    });
  }
  onScroll() {
    this.page = this.page + 1;
    this.getRecentPage();
  }

}
