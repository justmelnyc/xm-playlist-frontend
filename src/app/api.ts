import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

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

  getRecent(channelName: string, last?: Stream): Observable<Stream[]> {
    const search = new URLSearchParams();
    if (last) {
      search.set('last', String(new Date(last.startTime).getTime()));
    }
    return this.http
      .get(`${environment.api}/recent/${channelName}`, { search })
      .map(res => res.json())
      .catch(this.handleError);
  }

  getTrack(songId: string): Observable<Track> {
    return this.http
      .get(`${environment.api}/track/${songId}`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  mostHeard(channelName: string): Observable<any[]> {
    return this.http
      .get(`${environment.api}/mostHeard/${channelName}`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getSpotify(songId: string): Observable<Spotify> {
    if (this.spotifyCache[songId]) {
      return this.spotifyCache[songId];
    }
    this.spotifyCache[songId] = this.http
      .get(`${environment.api}/spotify/${encodeURIComponent(songId)}`)
      .map(res => res.json())
      .catch(this.handleError);
    return this.spotifyCache[songId];
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error.text() || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
