export function NavDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/nav/nav.html',
        scope: {},
        controller: NavController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
}

class NavController {
    constructor($location) {
        'ngInject';
        this.path = $location.path();

    }
}
