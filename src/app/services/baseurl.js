export class BaseUrl {
    constructor($location) {
        'ngInject';

        this.hosted = $location.host();

    }
    host() {
        if (this.hosted === 'localhost' || this.hosted === '127.0.0.1') {
            return '//localhost:5000';
        }
        return '//bpmbackend.scttcper.com';
    }
}


export function BaseUrlInterceptor(BaseUrl) {
    'ngInject';

    return {
        'request': function(config) {
            if (config.url.indexOf('/api') === 0) {
                config.url = BaseUrl.host() + config.url.slice(4);
            }
            return config;
        }
    };
}
