
angular.module("hackerNewsApp", [])
    .controller('newsController', function(NewsService){

    var vm = this;
    var firstTen = [];
    var numberOfArticles = 10;
    var currentStorie = '';
    vm.stories = [];

    vm.viewMoreItems = function(){
        NewsService.getStories(currentStorie).then(function(response){
           publishTenStories(response.data, true);
        });
    }

    vm.getStories = function(typeOfStories){
        currentStorie = typeOfStories;
        NewsService.getStories(typeOfStories).then(function(response){
            publishTenStories(response.data);
        });
    }

    vm.getStories();

    function publishTenStories(stories, addMore){
        firstTen = stories.slice(0,10);
        if(!addMore) vm.stories = [];

        angular.forEach(firstTen, function(id){
            NewsService.getStorie(id).then(function(response){
                vm.stories.push(response.data);
            });
        });
    }
})
.filter('datediff', function(){
  return function(date) {

      var seconds = Math.floor((new Date() - date) / 1000);

      var interval = Math.floor(seconds / 31536000);

      if (interval > 1) {
          return interval + " years ago";
      }
      interval = Math.floor(seconds / 2592000);
      if (interval > 1) {
          return interval + " months ago";
      }
      interval = Math.floor(seconds / 86400);
      if (interval > 1) {
          return interval + " days ago";
      }
      interval = Math.floor(seconds / 3600);
      if (interval > 1) {
          return interval + " hours ago";
      }
      interval = Math.floor(seconds / 60);
      return interval + " minutes ago";
}
});
