import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { environment } from '../environments/environment';
import { Channel, Stream, Spotify } from './app.interfaces';

@Injectable()
export class Api {

  currentChannel: BehaviorSubject<string> = new BehaviorSubject('');
  private spotifyCache: any = {};

  constructor(private http: Http) { }

  getChannels(): Promise<Channel[]> {
    return this.http
      .get(`${environment.api}/channels`)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  getRecent(channelName: string): Promise<Stream[]> {
    return this.http
      .get(`${environment.api}/recent/${channelName}`)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  mostHeard(channelName: string): Promise<Stream[]> {
    return this.http
      .get(`${environment.api}/recent/${channelName}`)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  getSpotify(songId: string): Promise<Spotify> {
    if (this.spotifyCache[songId]) {
      return this.spotifyCache[songId];
    }
    this.spotifyCache[songId] = this.http
      .get(`${environment.api}/spotify/${songId}`)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
    return this.spotifyCache[songId];
  }

  private handleError(error: Response | any) {
    console.error(error);
  }

}
