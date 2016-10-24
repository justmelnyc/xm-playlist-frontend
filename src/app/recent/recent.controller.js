export class RecentController {
    constructor($http, BaseUrl) {
        'ngInject';

        $http.get(BaseUrl.host() + '/new').then((res) => {
            this.songs = res.data;
        });

    }
}
