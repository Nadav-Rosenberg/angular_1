githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {

  var self = this;

  var searchResource = $resource('https://api.github.com/search/users?access_token=f9cdb85ee08d2d92462d96be9245822b3c5729e2');

  self.doSearch = function() {

    self.searchResult = searchResource.get(
      { q: self.searchTerm }
    );

    console.log(self.searchResult )
  };

}]);