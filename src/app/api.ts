import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';
import { Channel, Stream, Spotify, Track } from './app.interfaces';

@Injectable()
export class Api {

  currentChannel: BehaviorSubject<string> = new BehaviorSubject('');
  private spotifyCache: any = {};

  constructor(private http: Http) { }

  getChannels(): Observable<Channel[]> {
    return this.http
      .get(`${environment.api}/channels`)
      .map(res => res.json());
  }

  getRecent(channelName: string, last?: Stream): Promise<Stream[]> {
    const search = new URLSearchParams();
    if (last) {
      search.set('last', String(new Date(last.startTime).getTime()));
    }
    return this.http
      .get(`${environment.api}/recent/${channelName}`, { search })
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  getTrack(songId: string): Promise<Track> {
    return this.http
      .get(`${environment.api}/track/${songId}`)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  mostHeard(channelName: string): Promise<any[]> {
    return this.http
      .get(`${environment.api}/mostHeard/${channelName}`)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  getSpotify(songId: string): Promise<Spotify> {
    if (this.spotifyCache[songId]) {
      return this.spotifyCache[songId];
    }
    this.spotifyCache[songId] = this.http
      .get(`${environment.api}/spotify/${encodeURIComponent(songId)}`)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
    return this.spotifyCache[songId];
  }

  private handleError(error: Response | any) {
    console.error(error);
  }

}
