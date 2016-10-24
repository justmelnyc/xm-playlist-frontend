export class PopularController {
    constructor($http, BaseUrl) {
        'ngInject';

        $http.get(BaseUrl.host() + '/mostHeard').then((res) => {
            this.songs = res.data;
        });

    }
}
