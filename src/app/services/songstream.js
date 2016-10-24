export class songstream {
    constructor($http, BaseUrl, socket) {
        'ngInject';
        this.recent = [];
        this.isWatching = false;
        this.base = BaseUrl.host();
        this.socket = socket.connection();
        this.$http = $http;
    }
    get(callback) {
        if (this.recent.length !== 0) {
            callback(this.recent);
        } else {
            this.$http.get(this.base + '/recentBPM')
                .then((res) => {
                    for(let obj of res.data){
                        obj.xmSongID = obj.xmSongID.replace('#', '-');
                    }
                    this.recent = res.data;
                    callback(this.recent);
                });
        }
        if (!this.isWatching) {
            this.isWatching = true;
            this.socket.on('bpm', (data) => {
                data.xmSongID = data.xmSongID.replace('#', '-');
                this.recent.unshift(data);
            });
        }
    }
}
