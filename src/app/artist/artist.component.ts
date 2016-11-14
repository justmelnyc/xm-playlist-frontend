import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit, OnDestroy {

  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params: Params) => {
      const artistName = params['artistName'];

    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
