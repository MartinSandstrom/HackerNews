
angular.module("hackerNewsApp").factory("NewsService", function($http){
    return {
        getStories: function(typeOfStorie){
            return $http.get('https://hacker-news.firebaseio.com/v0/' + (typeOfStorie || 'topstories') + '.json');
        },
        getStorie: function(id){
            return $http.get('https://hacker-news.firebaseio.com/v0/item/' + id  + '.json?print=pretty');
        }
    }
});
