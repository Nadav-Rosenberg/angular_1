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
      .when("GET", 'https://api.github.com/search/users?access_token=0db3cd0834a55aec0db075d4f92492c54edf73a9&q=hello')
      .respond(
        { items: items }
      );
    })
  }