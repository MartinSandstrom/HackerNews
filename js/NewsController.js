
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
});
