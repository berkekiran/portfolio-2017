var app = angular.module("portfolio",[]);
app.controller("bodyController", function($scope, $timeout){

  $scope.aboutclick = function(){
    $('html, body').animate({
 	        scrollTop: 1200
 	    }, 1600);
  }

  $scope.introclick = function(){
    $('html, body').animate({
 	        scrollTop: 0
 	    }, 1600);
  }

  $scope.worksclick = function(){
    $('html, body').animate({
 	        scrollTop: 2480
 	    }, 1600);
  }


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

  $scope.works = ["Portfolio 2017",
                 "Video Games Center Station",
                 "Portfolio 2016",
                 "Portfolio 2015 v5",
                 "UE4 Snow System v2",
                 "UE4 Snow System v1",
                 "Portfolio 2015 v4",
                 "Portfolio 2015 v3 Design",
                 "Portfolio 2015 v2 Design",
                 "Berke Kiran - Truth",
                 "Berke Kiran - Death",
                 "Adam Noise - Soundtrack v3",
                 "Adam Noise - Soundtrack v2",
                 "Adam Noise - Soundtrack v1",
                 "Metal Dragon - Video",
                 "Portfolio 2015",
                 "Photo Galleries",
                 "Quick Write"];

   var sectionName0 = document.getElementById('section-name0');
   var sectionName1 = document.getElementById('section-name1');
   var aboutButton = document.getElementById('about-button');
   window.addEventListener("scroll", function(){

     var timeout;
     clearTimeout(timeout);
     timeout = setTimeout(function() {
       var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
       if(scrollTop >= 700 && scrollTop < 2200){
         sectionName1.style.animation = "section-name 0.35s linear forwards";
         sectionName0.style.animation = "section-name-off 0.35s linear forwards";
         aboutButton.style.animation = "opacity-off 0.35s linear forwards";
       } else if(scrollTop <= 700 || scrollTop > 2200){
         sectionName1.style.animation = "section-name-off 0.35s linear forwards";
         sectionName0.style.animation = "section-name 0.35s linear forwards";
         aboutButton.style.animation = "opacity 0.35s linear forwards";
       }

       if(scrollTop >= 160){
         aboutButton.style.animation = "opacity-off 0.35s linear forwards";
       } else if(scrollTop <= 160){
         aboutButton.style.animation = "opacity 0.35s linear forwards";
       }
     }, 820);

   }, true);

});

//other javascript codes
jQuery.scrollSpeed(100, 2000);
