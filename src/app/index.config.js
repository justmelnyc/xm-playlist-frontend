export function config($logProvider, $httpProvider) {
    'ngInject';
    // Enable log
    $logProvider.debugEnabled(true);
    // Thow error if legacy $http success() and error() methods are used
    $httpProvider.useLegacyPromiseExtensions = false;
    $httpProvider.interceptors.push('BaseUrlInterceptor');
}
