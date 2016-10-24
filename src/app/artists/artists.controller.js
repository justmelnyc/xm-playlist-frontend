export class ArtistsController {
    constructor($http, BaseUrl) {
        'ngInject';

        $http.get(BaseUrl.host() + '/artists').then((res) => {
            this.artists = res.data;
        });

    }
}
