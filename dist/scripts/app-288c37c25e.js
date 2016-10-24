/******/!function(t){function e(a){if(s[a])return s[a].exports;var n=s[a]={exports:{},id:a,loaded:!1};return t[a].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}// webpackBootstrap
/******/
var s={};return e.m=t,e.c=s,e.p="",e(0)}([function(t,e,s){"use strict";var a=s(1),n=s(2),r=s(3),i=s(4),o=s(5),l=s(6),c=s(7),u=s(8),d=s(9),m=s(10),p=s(11),g=s(12),h=s(13),f=s(14);angular.module("bpm",["ngRoute","btford.socket-io","angular-contextual-date"]).config(a.config).config(n.routerConfig).run(r.runBlock).service("BaseUrl",g.BaseUrl).factory("BaseUrlInterceptor",g.BaseUrlInterceptor).service("socket",h.socket).service("songstream",f.songstream).controller("HomeController",i.HomeController).controller("PopularController",o.PopularController).controller("RecentController",l.RecentController).controller("ArtistsController",c.ArtistsController).controller("ArtistController",u.ArtistController).controller("SongController",d.SongController).directive("bpmLinks",p.LinksDirective).directive("bpmNav",m.NavDirective)},function(t,e){"use strict";function s(t,e){"ngInject";t.debugEnabled(!0),e.useLegacyPromiseExtensions=!1,e.interceptors.push("BaseUrlInterceptor")}s.$inject=["$logProvider","$httpProvider"],Object.defineProperty(e,"__esModule",{value:!0}),e.config=s},function(t,e){"use strict";function s(t){"ngInject";t.when("/",{templateUrl:"app/home/home.html",controller:"HomeController",controllerAs:"vm"}).when("/popular",{templateUrl:"app/popular/popular.html",controller:"PopularController",controllerAs:"vm"}).when("/recent",{templateUrl:"app/recent/recent.html",controller:"RecentController",controllerAs:"vm"}).when("/artists",{templateUrl:"app/artists/artists.html",controller:"ArtistsController",controllerAs:"vm"}).when("/song/:song",{templateUrl:"app/song/song.html",controller:"SongController",controllerAs:"vm"}).when("/artist/:artist",{templateUrl:"app/artist/artist.html",controller:"ArtistController",controllerAs:"vm"}).otherwise({redirectTo:"/"})}s.$inject=["$routeProvider"],Object.defineProperty(e,"__esModule",{value:!0}),e.routerConfig=s},function(t,e){"use strict";function s(t,e){"ngInject";t.debug("runBlock end"),e.config.hideFullDate=!0}s.$inject=["$log","contextualDateService"],Object.defineProperty(e,"__esModule",{value:!0}),e.runBlock=s},function(t,e){"use strict";function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var s=0;s<e.length;s++){var a=e[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,s,a){return s&&t(e.prototype,s),a&&t(e,a),e}}();e.HomeController=function(){function t(e){"ngInject";var a=this;s(this,t),this.recent=[],this.unique24=[],e.get(function(t){a.recent=t,a.mostHeard()})}return t.$inject=["songstream"],a(t,[{key:"mostHeard",value:function(){var t=_.chain(this.recent).map("xmSongID").countBy().toPairs().max(_.last).first().value();this.mostHeard=_.find(this.recent,{xmSongID:t}),this.unique24=_.uniq(this.recent,function(t){return t.xmSongID})}}]),t}()},function(t,e){"use strict";function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});e.PopularController=["$http","BaseUrl",function a(t,e){"ngInject";var n=this;s(this,a),t.get(e.host()+"/mostHeard").then(function(t){n.songs=t.data})}]},function(t,e){"use strict";function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});e.RecentController=["$http","BaseUrl",function a(t,e){"ngInject";var n=this;s(this,a),t.get(e.host()+"/new").then(function(t){n.songs=t.data})}]},function(t,e){"use strict";function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});e.ArtistsController=["$http","BaseUrl",function a(t,e){"ngInject";var n=this;s(this,a),t.get(e.host()+"/artists").then(function(t){n.artists=t.data})}]},function(t,e){"use strict";function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});e.ArtistController=["$http","BaseUrl","$routeParams",function a(t,e,n){"ngInject";var r=this;s(this,a),this.artist=n.artist,t.get(e.host()+"/artist/"+n.artist).then(function(t){r.songs=t.data})}]},function(t,e){"use strict";function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});e.SongController=["$http","BaseUrl","$routeParams",function a(t,e,n){"ngInject";var r=this;s(this,a),t.get(e.host()+"/songstream/"+n.song.replace("#","-")).then(function(t){var e=_.map(t.data,function(t){return{date:new Date(t._id.year,t._id.month,t._id.day),plays:t.count}});MG.data_graphic({data:e,target:"#plays",x_accessor:"date",y_accessor:"plays",full_width:!0,xax_count:0,show_secondary_x_label:!1,xax_tick_length:0,yax_count:0,missing_is_zero:!0,buffer:0,left:0,right:0,top:21,bottom:0})}),t.get(e.host()+"/song/"+n.song.replace("#","-")).then(function(t){r.song=t.data[0]})}]},function(t,e){"use strict";function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(){"ngInject";var t={restrict:"E",templateUrl:"app/nav/nav.html",scope:{},controller:n,controllerAs:"vm",bindToController:!0};return t}Object.defineProperty(e,"__esModule",{value:!0}),e.NavDirective=a;var n=function r(t){"ngInject";s(this,r),this.path=t.path()};n.$inject=["$location"]},function(t,e){"use strict";function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(){"ngInject";var t={restrict:"E",templateUrl:"app/links/links.html",scope:{song:"="},controller:r,controllerAs:"vm",bindToController:!0};return t}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var s=0;s<e.length;s++){var a=e[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,s,a){return s&&t(e.prototype,s),a&&t(e,a),e}}();e.LinksDirective=a;var r=function(){function t(){"ngInject";s(this,t)}return n(t,[{key:"hypem",value:function(t){if(t){var e=t.track.replace(/[\s\/()]/g,"+")+"+"+t.artists.join("+").replace(/[\s\/()]/g,"+");return"http://hypem.com/search/"+e+"/1/?sortby=favorite"}}},{key:"youtube",value:function(t){if(t){var e=t.track.replace(/[\s\/()]/g,"+")+"+"+t.artists.join("+").replace(/[\s\/()]/g,"+");return"https://www.youtube.com/results?search_query="+e}}}]),t}()},function(t,e){"use strict";function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t){"ngInject";return{request:function(e){return 0===e.url.indexOf("/api")&&(e.url=t.host()+e.url.slice(4)),e}}}a.$inject=["BaseUrl"],Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var s=0;s<e.length;s++){var a=e[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,s,a){return s&&t(e.prototype,s),a&&t(e,a),e}}();e.BaseUrlInterceptor=a;e.BaseUrl=function(){function t(e){"ngInject";s(this,t),this.hosted=e.host()}return t.$inject=["$location"],n(t,[{key:"host",value:function(){return"localhost"===this.hosted||"127.0.0.1"===this.hosted?"//localhost:5000":"//bpmbackend.scttcper.com"}}]),t}()},function(t,e){"use strict";function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var s=0;s<e.length;s++){var a=e[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,s,a){return s&&t(e.prototype,s),a&&t(e,a),e}}();e.socket=function(){function t(e,a){"ngInject";s(this,t),this.socketFactory=e,this.base=a.host()}return t.$inject=["socketFactory","BaseUrl"],a(t,[{key:"connection",value:function(){return this.socketFactory({ioSocket:io.connect(this.base)})}}]),t}()},function(t,e){"use strict";function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var s=0;s<e.length;s++){var a=e[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,s,a){return s&&t(e.prototype,s),a&&t(e,a),e}}();e.songstream=function(){function t(e,a,n){"ngInject";s(this,t),this.recent=[],this.isWatching=!1,this.base=a.host(),this.socket=n.connection(),this.$http=e}return t.$inject=["$http","BaseUrl","socket"],a(t,[{key:"get",value:function(t){var e=this;0!==this.recent.length?t(this.recent):this.$http.get(this.base+"/recentBPM").then(function(s){var a=!0,n=!1,r=void 0;try{for(var i,o=s.data[Symbol.iterator]();!(a=(i=o.next()).done);a=!0){var l=i.value;l.xmSongID=l.xmSongID.replace("#","-")}}catch(c){n=!0,r=c}finally{try{!a&&o["return"]&&o["return"]()}finally{if(n)throw r}}e.recent=s.data,t(e.recent)}),this.isWatching||(this.isWatching=!0,this.socket.on("bpm",function(t){t.xmSongID=t.xmSongID.replace("#","-"),e.recent.unshift(t)}))}}]),t}()}]),angular.module("bpm").run(["$templateCache",function(t){t.put("app/artist/artist.html",'<bpm-nav></bpm-nav><div class=container><div class=row><div class=col-sm-12><legend><h3>{{::vm.artist}}</h3></legend></div></div></div><div class="container home"><div class=row><div class="col-md-4 col-lg-3" ng-repeat="song in vm.songs | orderBy:\'-plays\' track by $index"><div class=card><img class=card-img-top width=100% ng-src="{{::song.spotify.album_image || \'./assets/images/album_placeholder.jpg\'}}"><div class=card-block><p class=card-text><small class=text-muted>Plays: {{::song.plays}}</small></p><h6 class=card-title>{{::song.track}}</h6><ul class=list-inline><li ng-repeat="artist in song.artists track by $index"><a ng-href=#/artist/{{::artist}}><small>{{::artist}}</small></a></li></ul><bpm-links song=song align=center></bpm-links></div></div></div></div></div>'),t.put("app/artists/artists.html",'<bpm-nav></bpm-nav><div class=container><div class=row><div class=col-lg-12><legend><h3>{{ vm.artists.length || \'Loading\' }} Artists</h3></legend></div></div><div class=row><div class="col-sm-4 col-sm-offset-4"><form class=form-inline><div class=form-group><label for=search>Search:</label><input type=text class=form-control placeholder=Name name=search ng-model=vm.search></div></form><ul class=list-unstyled><li ng-repeat="artist in vm.artists | orderBy:artist | filter:vm.search track by $index"><a href=#/artist/{{artist}}>{{artist}}</a></li></ul></div></div></div>'),t.put("app/home/home.html",'<bpm-nav></bpm-nav><div class="container home-header"><div class=row style=padding-bottom:10px><div class=col-sm-6><div class=media><div class=media-left><img style="max-height: 140px;margin-left:2px" class=media-object max-width=20% ng-src="{{vm.mostHeard.spotify.album_image || \'assets/images/album_placeholder.jpg\'}}"></div><div class=media-body><h5 class=text-muted><small>Most Played Today</small></h5><h4>{{vm.mostHeard.track}}</h4><ul class=list-inline><li ng-repeat="artist in vm.mostHeard.artists track by $index"><small>{{artist}}</small></li></ul><div ng-if=vm.mostHeard.spotify><bpm-links song=vm.mostHeard></bpm-links></div></div></div></div><div class=col-sm-6><div class=row><div class=col-xs-6><div class="text-xs-center card"><div class=card-block><h2>{{vm.recent.length}}</h2><p class=card-text><small>songs last 24 hours</small></p></div></div></div><div class=col-xs-6><div class="text-xs-center card"><div class=card-block><h2>{{vm.unique24.length}}</h2><p class=card-text><small>unique songs last 24 hours</small></p></div></div></div></div></div></div></div><div class="container home"><div class=row><div class="col-md-4 col-lg-3" ng-repeat="song in vm.recent | limitTo:52 track by $index"><div class=card><img class=card-img-top width=100% ng-src="{{song.spotify.album_image || \'./assets/images/album_placeholder.jpg\'}}"><div class=card-block><p class=card-text><small class=text-muted>{{song.heard | contextualDate}}</small></p><h6 class=card-title>{{song.track}}</h6><ul class=list-inline><li ng-repeat="artist in song.artists track by $index"><a ng-href=#/artist/{{artist}}><small>{{artist}}</small></a></li></ul><bpm-links song=song align=center></bpm-links></div></div></div></div></div>'),t.put("app/links/links.html",'<div class=links><a ng-href=#/song/{{vm.song.xmSongID}} class="btn btn-secondary btn-sm" role=button><i class="fa fa-info-circle"></i> </a><a ng-href={{vm.youtube(vm.song)}} target=_blank class="btn btn-secondary btn-sm" role=button><i class="fa fa-youtube-play"></i> </a><a ng-href={{vm.hypem(vm.song)}} target=_blank class="btn btn-secondary btn-sm" role=button><i class="fa fa-heart"></i> </a><a ng-if=vm.song.spotify.album_image href={{vm.song.spotify.url}} target=_blank class="btn btn-secondary btn-sm" role=button><i class="fa fa-spotify"></i></a></div>'),t.put("app/main/main.html",'<div class=container><div><acme-navbar creation-date=main.creationDate></acme-navbar></div><div class="jumbotron text-xs-center"><h1>\'Allo, \'Allo!</h1><p class=lead><img src=assets/images/yeoman.png alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class=main.classAnimation><button type=button class="btn btn-lg btn-success" ng-click=main.showToastr()>Splendid Toastr</button></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div><div class=row><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class=thumbnail><img class=pull-right ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class=caption><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href={{awesomeThing.url}}>{{ awesomeThing.url }}</a></p></div></div></div></div></div><a ng-show=song.spotify.album_image href={{song.spotify.url}} target=_blank class="btn btn-success btn-sm" role=button><fa name=spotify size=1></fa></a><a ng-show=song.spotify.album_image href={{song.spotify.url}} target=_blank class="btn btn-success btn-sm" role=button><fa name=spotify size=1></fa></a><a ng-show=song.spotify.album_image href={{song.spotify.url}} target=_blank class="btn btn-success btn-sm" role=button><fa name=spotify size=1></fa></a><a ng-show=song.spotify.album_image href={{song.spotify.url}} target=_blank class="btn btn-success btn-sm" role=button><fa name=spotify size=1></fa></a><a ng-show=song.spotify.album_image href={{song.spotify.url}} target=_blank class="btn btn-success btn-sm" role=button><fa name=spotify size=1></fa></a><a ng-show=song.spotify.album_image href={{song.spotify.url}} target=_blank class="btn btn-success btn-sm" role=button><fa name=spotify size=1></fa></a><a ng-show=song.spotify.album_image href={{song.spotify.url}} target=_blank class="btn btn-success btn-sm" role=button><fa name=spotify size=1></fa></a><a ng-show=song.spotify.album_image href={{song.spotify.url}} target=_blank class="btn btn-success btn-sm" role=button><fa name=spotify size=1></fa></a>'),t.put("app/nav/nav.html",'<nav class="navbar navbar-light bg-faded"><div class=container><a class=navbar-brand href=#/ >BPM</a><ul class="nav navbar-nav"><li class=nav-item ng-class="{active: vm.path == \'/\'}"><a class=nav-link href=#/ >Latest</a></li><li class=nav-item ng-class="{active: vm.path == \'/popular\'}"><a class=nav-link href=#/popular>Popular</a></li><li class=nav-item ng-class="{active: vm.path == \'/recent\'}"><a class=nav-link href=#/recent>Recent</a></li><li class=nav-item ng-class="{active: vm.path == \'/artists\'}"><a class=nav-link href=#/artists>Artists</a></li></ul></div></nav>'),t.put("app/popular/popular.html",'<bpm-nav></bpm-nav><div class=container><div class=row><div class=col-md-12><legend>Most Played Last 7 Days</legend><table class="table table-condensed"><thead class=thead-default><tr><th>Cover</th><th>Track</th><th>Artists</th><th>Plays</th><th>Links</th></tr></thead><tbody><tr ng-repeat="song in vm.songs track by $index"><td style="padding: 0px 0px 0 0"><img width=60 ng-src="{{::song.spotify.album_image || \'assets/images/album_placeholder.jpg\'}}"></td><td>{{::song.track}}</td><td><ul class=list-inline><li ng-repeat="artist in song.artists track by $index"><a href=#/artist/{{::artist}} class=text-nowrap>{{::artist}}</a></li></ul></td><td>{{::song.count}}</td><td class=text-nowrap><bpm-links song=::song></bpm-links></td></tr></tbody></table></div></div></div>'),t.put("app/recent/recent.html",'<bpm-nav></bpm-nav><div class=container><div class=row><div class=col-md-12><legend>Most Recent New Songs</legend><table class="table table-condensed"><thead class=thead-default><tr><th>Cover</th><th>Track</th><th>Artists</th><th>Plays</th><th>First Heard</th><th>Links</th></tr></thead><tbody><tr ng-repeat="song in vm.songs track by $index"><td style="padding: 0px 0px 0 0"><img width=60 ng-src="{{::song.spotify.album_image || \'assets/images/album_placeholder.jpg\'}}"></td><td>{{::song.track}}</td><td><ul class=list-inline><li ng-repeat="artist in ::song.artists track by $index"><a href=#/artist/{{::artist}} class=text-nowrap>{{::artist}}</a></li></ul></td><td>{{::song.plays}}</td><td class=text-nowrap>{{::song.firstHeard | contextualDate}}</td><td class=text-nowrap><bpm-links song=::song></bpm-links></td></tr></tbody></table></div></div></div>'),t.put("app/song/song.html",'<bpm-nav></bpm-nav><div class=container><div class=row><div class="col-lg-6 col-lg-offset-3"><div class=card><img width=100% ng-src="{{vm.song.spotify.album_image || \'./assets/images/album_placeholder.jpg\'}}"><div class=card-block><p class=card-text><small class=text-muted>First: {{vm.song.firstHeard | contextualDate}}</small> - <small class=text-muted>Last: {{vm.song.lastHeard | contextualDate}}</small></p><p class=card-text></p><h6 class=card-title>{{vm.song.track}}</h6><ul class=list-inline><li ng-repeat="artist in vm.song.artists track by $index"><a ng-href=#/artist/{{artist}}><small>{{artist}}</small></a></li></ul><bpm-links song=vm.song></bpm-links></div><div id=plays style="margin-bottom: -6px"></div></div></div></div></div>')}]);
//# sourceMappingURL=../maps/scripts/app-288c37c25e.js.map
