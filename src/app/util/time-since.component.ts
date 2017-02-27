import { Component, OnDestroy, Input, OnChanges } from '@angular/core';
import * as distanceInWordsStrict from 'date-fns/distance_in_words_strict';

@Component({
  selector: 'xm-time-since',
  template: `{{ timeSince }} ago`,
})
export class TimeSinceComponent implements OnDestroy, OnChanges {
  @Input() date: string;
  timeSince: string;
  private past: any;
  private timeout: any;

  ngOnChanges() {
    clearTimeout(this.timeout);
    this.past = new Date(this.date);
    this.format();
  }
  ngOnDestroy() {
    clearTimeout(this.timeout);
  }
  timeoutSetup() {
    let next;
    if (this.timeSince.indexOf('minute') !== -1) {
      next = 10000;
    } else {
      next = 100000;
    }
    this.timeout = setTimeout(() => this.format(), next);
  }
  format() {
    const res = distanceInWordsStrict(new Date(), this.past);
    if (res.indexOf('ms') !== -1 || res.indexOf('second') !== -1) {
      this.timeSince = '1 minute';
    } else {
      this.timeSince = res;
    }
    this.timeoutSetup();
  }
}
