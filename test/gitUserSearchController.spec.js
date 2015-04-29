describe('GitUserSearchController', function() {
  beforeEach(module('GitUserSearch'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('GitUserSearchController');
  }));

  it('bla bla', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });
  
  describe('when searching for a user', function() {

    // var searchBox = element(by.model('searchTerm'))
    // var searchButton = element(by.className('btn'))

    var items = [
      {
        "login": "tansaku",
        "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
        "html_url": "https://github.com/tansaku"
      }, 
      {
        "login": "stephenlloyd",
        "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
        "html_url": "https://github.com/stephenlloyd"
      }
    ];

    var httpBackend;
    beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend
      httpBackend
        .when("GET", "http://api.github.com/search/user?q=hello")
        .respond(
          { items: items }
        );
    }));

    it('displays search results', function() {
      // searchBox.sendKeys('hello');
      // searchButton.click();
      ctrl.doSearch();
      expect(ctrl.searchResult.items).toEqual(items);
    });
  });

});