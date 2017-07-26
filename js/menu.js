var app = angular.module("menu",[]);
app.controller("menuController", function($scope, $timeout){
  $scope.menuclick = function(){

    if($(".menu-ui").css('margin-left') == "-800px"){
      $scope.menustyle = {
        "animation" : "menu-ui 0.6s linear forwards",
        "margin-left" : "0px"
      }

      $scope.menulinkstyle = {
        "animation" : "menu-ui-link 0.7s linear forwards"
      }
      $scope.menulinkstyle1 = {
        "animation" : "menu-ui-link 0.86s linear forwards"
      }
      $scope.menulinkstyle2 = {
        "animation" : "menu-ui-link 0.95s linear forwards"
      }
      $scope.menulinkstyle3 = {
        "animation" : "menu-ui-link 1.04s linear forwards"
      }

      $scope.menuButtonstyle = {
        "background-color" : "#F44336"
      }

    }else if($(".menu-ui").css('margin-left') == "0px"){
      $scope.menustyle = {
        "animation" : "menu-ui-off 0.6s linear forwards",
        "margin-left" : "-800px",
      }

      $scope.menulinkstyle = {
        "animation" : "menu-ui-link-off 0.7s linear forwards"
      }
      $scope.menulinkstyle1 = {
        "animation" : "menu-ui-link-off 0.86s linear forwards"
      }
      $scope.menulinkstyle2 = {
        "animation" : "menu-ui-link-off 0.95s linear forwards"
      }
      $scope.menulinkstyle3 = {
        "animation" : "menu-ui-link-off 1.04s linear forwards"
      }

      $scope.menuButtonstyle = {
        "background-color" : "#ffffff"
      }
    }

  }
});
