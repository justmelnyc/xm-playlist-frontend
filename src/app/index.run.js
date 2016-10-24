export function runBlock($log, contextualDateService) {
    'ngInject';
    $log.debug('runBlock end');
    // for some reaosn isn't loaded until runblock?
    contextualDateService.config.hideFullDate = true;
}
