import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Api } from '../api';
import { Track } from '../app.interfaces';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit, OnDestroy {
  track: Track;
  private sub: Subscription;

  constructor(
    private api: Api,
    private route: ActivatedRoute,
    private title: Title
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params: Params) => {
      // get segment id from route
      const songId = params['songId'];
      this.api.getTrack(songId).subscribe((track) => {
        this.track = track;
      });
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
