export class socket {
    constructor(socketFactory, BaseUrl) {
        'ngInject';
        this.socketFactory = socketFactory;
        this.base = BaseUrl.host();
    }
    connection() {
        return this.socketFactory({
            ioSocket: io.connect(this.base)
        });
    }
}
