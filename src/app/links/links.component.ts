import { Component, OnInit, Input } from '@angular/core';

import { Api } from '../api';
import { Stream } from '../app.interfaces';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  @Input() stream: Stream;

  youtube: string;
  hypem: string;
  spotify: string;

  constructor(private api: Api) { }

  ngOnInit() {
    const str = this.stream.name.replace(/[\s\/()]/g, '+') + '+' + this.stream.artists.join('+').replace(/[\s\/()]/g, '+');
    this.hypem = `http://hypem.com/search/${str}/1/?sortby=favorite`;
    this.youtube = `https://www.youtube.com/results?search_query=${str}`;
    this.api.getSpotify(this.stream.songId).then((spotify) => {
      if (!spotify) {
        return;
      }
      this.spotify = `https://open.spotify.com/track/${spotify.spotifyId}`;
    });
  }

}
