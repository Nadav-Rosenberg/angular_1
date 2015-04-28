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

});