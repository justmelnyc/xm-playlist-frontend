export function routerConfig($routeProvider) {
    'ngInject';
    $routeProvider
        .when('/', {
            templateUrl: 'app/home/home.html',
            controller: 'HomeController',
            controllerAs: 'vm'
        })
        .when('/popular', {
            templateUrl: 'app/popular/popular.html',
            controller: 'PopularController',
            controllerAs: 'vm'
        })
        .when('/recent', {
            templateUrl: 'app/recent/recent.html',
            controller: 'RecentController',
            controllerAs: 'vm'
        })
        .when('/artists', {
            templateUrl: 'app/artists/artists.html',
            controller: 'ArtistsController',
            controllerAs: 'vm'
        })
        .when('/song/:song', {
            templateUrl: 'app/song/song.html',
            controller: 'SongController',
            controllerAs: 'vm'
        })
        .when('/artist/:artist', {
            templateUrl: 'app/artist/artist.html',
            controller: 'ArtistController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        });
}
