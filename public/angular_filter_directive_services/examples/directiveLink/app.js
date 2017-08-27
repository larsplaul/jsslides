var app = angular.module("directiveDemo", []);

app.directive('listBuilder', function () {
  return{
    restrict : 'E',
    link : function ($scope, element, attributes) {
      var a = attributes.items.split(",");
      var listItems = "<ul>";
      a.forEach(function (image) {
        listItems += '<li>' + image + '</li>';
      });
      listItems += "</ul>";
      element.html(listItems);
    }
  };
});