import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';

import { AppComponent } from './app.component';
import { StreamComponent } from './stream/stream.component';
import { HomeComponent } from './home/home.component';
import { Api } from './api';
import { NavComponent } from './nav/nav.component';
import { XmUtility } from './util';
import { CoverartComponent } from './coverart/coverart.component';
import { LinksComponent } from './links/links.component';
import { TrackComponent } from './track/track.component';
import { ArtistComponent } from './artist/artist.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'station/:channelName', component: StreamComponent },
  { path: 'track/:songId', component: TrackComponent },
  { path: 'artist/:artist', component: ArtistComponent },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    StreamComponent,
    HomeComponent,
    NavComponent,
    CoverartComponent,
    LinksComponent,
    TrackComponent,
    ArtistComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    InfiniteScrollModule,
    XmUtility,
  ],
  providers: [Api],
  bootstrap: [AppComponent]
})
export class AppModule { }
