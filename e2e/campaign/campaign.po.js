/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

exports.HomePage = function()  {
    this.jumbotron = element(by.css('.jumbotron'));
    this.navLogin = $('.navbar-right');
};

exports.LoginPage = function() {
    this.username = element(by.model('vm.username'));
    this.password = element(by.model('vm.password'));
};
