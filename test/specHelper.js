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

  function setHttpBackend() {
    inject(function($httpBackend) {
    httpBackend = $httpBackend
    httpBackend
      .when("GET", 'https://api.github.com/search/users?access_token=7f0d71a4e79c1512f393b77d6db94478dc94184d&q=hello')
      .respond(
        { items: items }
      );
    })
  }