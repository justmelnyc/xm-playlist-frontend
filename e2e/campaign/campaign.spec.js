'use strict';

var pages = require('./campaign.po');

describe('The main view', function() {
    var home;
    var login;
    var params = browser.params;

    beforeEach(function() {
        browser.get('/index.html');
        home = new pages.HomePage();
        login = new pages.LoginPage();
    });

    it('should be logged out', function() {
        expect(home.navLogin.getText()).toBe('Login');
    });

    it('should be able to go to login page', function() {
        home.navLogin.click();
        login.username.sendKeys(params.login.user);
        login.password.sendKeys(params.login.password);
        login.password.sendKeys(protractor.Key.ENTER);
    });

});
