export class ArtistController {
    constructor($http, BaseUrl, $routeParams) {
        'ngInject';

        this.artist = $routeParams.artist;

        $http.get(BaseUrl.host() + '/artist/' + $routeParams.artist).then((res) => {
            this.songs = res.data;
        });
    }
}
