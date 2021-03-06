// Generated by CoffeeScript 1.3.3
(function() {

  jasmine.getFixtures().fixturesPath = 'fixtures';

  describe('jquery.get_selector', function() {
    beforeEach(function() {
      return loadFixtures('jquery_plugins/jquery.get_selector.html');
    });
    it('should return the id', function() {
      return expect($('#foo').getSelector()).toEqual('#foo');
    });
    it('should return nth child selector', function() {
      return expect($('.same:nth(2)').getSelector()).toEqual('.inner > .same:nth-child(2)');
    });
    return it('should return nested selector', function() {
      return expect($('.outer div div div').getSelector()).toEqual('.outer > div > div > div');
    });
  });

}).call(this);
