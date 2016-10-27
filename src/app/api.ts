import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { environment } from '../environments/environment';
import { Channel } from './channel';
import { Stream } from './stream';

@Injectable()
export class Api {

  currentChannel: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(private http: Http) { }

  getChannels(): Promise<Channel[]> {
    return this.http.get(`${environment.api}/channels`)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  getRecent(channelName: string): Promise<Stream[]> {
    return this.http.get(`${environment.api}/recent/${channelName}`)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  mostHeard(channelName: string): Promise<Stream[]> {
    return this.http.get(`${environment.api}/recent/${channelName}`)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.error(error);
  }

}
