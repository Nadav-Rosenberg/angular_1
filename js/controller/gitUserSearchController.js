githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {

 

  var self = this;

  self.doSearch = function() {

    self.searchResult = {
      "items": [
        {
          "login": "spike0",
          "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
          "html_url": "https://github.com/tansaku"
        }, 
        {
          "login": "stephenlloyd",
          "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
          "html_url": "https://github.com/stephenlloyd"
        }
      ]
    };
    

    console.log(self.searchTerm);
    // console.log(GitUserSearchController.searchTerm);
  };


}]);