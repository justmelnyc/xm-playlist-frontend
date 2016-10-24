export function LinksDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/links/links.html',
        scope: {
            song: '='
        },
        controller: LinksController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
}

class LinksController {
    constructor() {
        'ngInject';

    }
    hypem(song) {
        if (!song) return;
        let str = song.track.replace(/[\s\/()]/g, '+') + '+' + song.artists.join('+').replace(/[\s\/()]/g, '+');
        return `http://hypem.com/search/${str}/1/?sortby=favorite`;
    }

    youtube(song) {
        if (!song) return;
        let str = song.track.replace(/[\s\/()]/g, '+') + '+' + song.artists.join('+').replace(/[\s\/()]/g, '+');
        return `https://www.youtube.com/results?search_query=${str}`;
    }
}
