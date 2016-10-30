import { Component, Input, DoCheck } from '@angular/core';

import { Api } from '../api';
import { Spotify } from '../app.interfaces';

@Component({
  selector: 'coverart',
  template: `
  <img class="img-fluid" src="{{ spotify?.cover || '/assets/img/album_placeholder.jpg' }}">
  `,
  styleUrls: ['./coverart.component.css'],
})
export class CoverartComponent implements DoCheck {
  @Input() songId: string;
  spotify: Spotify;

  private oldId: string;

  constructor(private api: Api) { }
  ngDoCheck() {
    if (!this.songId || this.oldId === this.songId) {
      return;
    }
    this.oldId = this.songId;
    this.api.getSpotify(this.songId).then((spotify) => {
      this.spotify = spotify;
      console.log(spotify)
    });
  }

}
