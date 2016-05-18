describe('App', function () {
    beforeEach(function () {
        browser.get('/');
    });
    it('should have a title', function () {
        var subject = browser.getTitle();
        var result = 'Angular2 Webpack Starter by @gdi2290 from @AngularClass';
        expect(subject).toEqual(result);
    });
    it('should have <header>', function () {
        var subject = element(by.css('app header')).isPresent();
        var result = true;
        expect(subject).toEqual(result);
    });
    it('should have <main>', function () {
        var subject = element(by.css('app main')).isPresent();
        var result = true;
        expect(subject).toEqual(result);
    });
    it('should have <footer>', function () {
        var subject = element(by.css('app footer')).getText();
        var result = 'WebPack Angular 2 Starter by @AngularClass';
        expect(subject).toEqual(result);
    });
});
//# sourceMappingURL=app.e2e.js.map