import { Component, Input, OnInit } from '@angular/core';

import { Api } from '../api';
import { Spotify } from '../app.interfaces';

@Component({
  selector: 'xm-coverart',
  template: `
  <a [routerLink]="['/track', songId]">
    <img class="img-fluid" width="100%" [src]="image">
  </a>
  `,
})
export class CoverartComponent implements OnInit {
  @Input() songId;
  image = '/assets/img/album_placeholder.jpg';

  private oldId: string;

  constructor(private api: Api) { }
  ngOnInit() {
    this.api.getSpotify(this.songId).subscribe((spotify) => {
      if (!spotify) {
        return;
      }
      this.image = spotify.cover;
    });
  }

}
