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
  private url: string = environment.api;
  private spotifyCache: any = {};
  private channelCache: Observable<Channel[]>;

  constructor(private http: Http) { }

  getChannels(): Observable<Channel[]> {
    if (!this.channelCache)  {
      this.channelCache = this.http
        .get(`${this.url}/channels`)
        .map(res => res.json())
        .publishReplay()
        .refCount();
    }
    return this.channelCache;
  }

  getRecent(channelName: string, last?: Stream): Observable<Stream[]> {
    const search = new URLSearchParams();
    if (last) {
      search.set('last', String(new Date(last.startTime).getTime()));
    }
    return this.http
      .get(`${this.url}/recent/${channelName}`, { search })
      .map(res => res.json())
      .catch(this.handleError);
  }

  getTrack(songId: string): Observable<Track> {
    return this.http
      .get(`${this.url}/track/${songId}`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  mostHeard(channelName: string): Observable<any[]> {
    return this.http
      .get(`${this.url}/mostHeard/${channelName}`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getSpotify(songId: string): Observable<Spotify> {
    if (!songId) {
      return;
    }
    if (!this.spotifyCache[songId]) {
      this.spotifyCache[songId] = this.http
        .get(`${this.url}/spotify/${encodeURIComponent(songId)}`)
        .map(res => res.json())
        .catch(() => {
          return Observable.of(null);
        })
        .publishReplay()
        .refCount();
    }
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
