
angular.module("hackerNewsApp").factory("NewsService", function($http){
    return {
        getStories: function(typeOfStory){
            return $http.get('https://hacker-news.firebaseio.com/v0/' + (typeOfStory || 'topstories') + '.json');
        },
        getStory: function(id){
            return $http.get('https://hacker-news.firebaseio.com/v0/item/' + id  + '.json?print=pretty');
        }
    }
});
