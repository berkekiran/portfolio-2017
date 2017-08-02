var app = angular.module("portfolio",['ngSanitize']);
app.controller("bodyController", function($scope, $timeout){

  $scope.aboutoneclick = function(){
    $('html, body').animate({
 	        scrollTop: 1200
 	    }, 1400);
  }

  $scope.aboutclick = function(){
    $('html, body').animate({
 	        scrollTop: 1200
 	    }, 1400);
      $scope.menustyle = {
        "animation" : "menu-ui-off 0.6s linear forwards",
        "margin-left" : "-800px",
      }
      $scope.menuButtonstyle = {
        "background-color" : "#ffffff"
      }
  }

  $scope.introclick = function(){
    $('html, body').animate({
 	        scrollTop: 0
 	    }, 1400);
      $scope.menustyle = {
        "animation" : "menu-ui-off 0.6s linear forwards",
        "margin-left" : "-800px",
      }
      $scope.menuButtonstyle = {
        "background-color" : "#ffffff"
      }
  }

  $scope.worksclick = function(){
    $('html, body').animate({
 	        scrollTop: 2480
 	    }, 1400);
    $scope.menustyle = {
      "animation" : "menu-ui-off 0.6s linear forwards",
      "margin-left" : "-800px",
    }
    $scope.menuButtonstyle = {
      "background-color" : "#ffffff"
    }
  }

  $scope.exploreclick = function(){
    $('html, body').animate({
 	        scrollTop: 2480
 	    }, 1400);
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

  $scope.works = [
                  {workName: "orcleader",
                   workHref: "",
                   workSrc : {
                               "background-image" : "url('images/works/orcleader.png')",
                               "background-size" : "cover",
                               "background-position" : "top",
                               "background-repeat" : "no-repeat"
                             }
                  },
                  {workName: "sleepingcreature",
                   workHref: "",
                   workSrc : {
                               "background-image" : "url('images/works/sleepingcreature.png')",
                               "background-size" : "cover",
                               "background-position" : "top",
                               "background-repeat" : "no-repeat"
                             }
                  },
                  {workName: "john",
                   workHref: "",
                   workSrc : {
                               "background-image" : "url('images/works/john.png')",
                               "background-size" : "cover",
                               "background-position" : "top",
                               "background-repeat" : "no-repeat"
                             }
                  }

                 ];

  $scope.socialLinks = [{ socialName: "linkedin", socialHref: "https://www.linkedin.com/in/berkekiran/", socialSrc : "images/social-buttons/linkedin-logo.svg"},
                        { socialName: "github", socialHref: "https://github.com/berkekiran", socialSrc : "images/social-buttons/github-logo.svg"},
                        { socialName: "artstation", socialHref: "https://www.artstation.com/artist/berkekiran", socialSrc : "images/social-buttons/artstation-logo.svg"},
                        { socialName: "behance", socialHref: "https://www.behance.net/berkekiran", socialSrc : "images/social-buttons/behance-logo.svg"},
                        { socialName: "vimeo", socialHref: "https://vimeo.com/berkekiran", socialSrc : "images/social-buttons/vimeo-logo.svg"},
                        { socialName: "soundcloud", socialHref: "https://soundcloud.com/berkekiran", socialSrc : "images/social-buttons/soundcloud-logo.svg"},
                        { socialName: "instagram", socialHref: "https://www.instagram.com/berkekiran.official/", socialSrc : "images/social-buttons/instagram-logo.svg"},
                        { socialName: "facebook", socialHref: "https://www.facebook.com/xBerkeKiranx", socialSrc : "images/social-buttons/facebook-logo.svg"}
                       ];
});

//other javascript codes
jQuery.scrollSpeed(100, 2000);

/*
var $window = $(window);
$window.on("mousewheel DOMMouseScroll", onMouseWheel);
function onMouseWheel(e) {
    e.preventDefault();
}
*/
//scroll animations
/*
var sectionName0 = document.getElementById('section-name0');
var sectionName1 = document.getElementById('section-name1');
var aboutButton = document.getElementById('about-button');
var recentWorkInfo0 = document.getElementById('recent-work-info0');
var recentWorkInfo1 = document.getElementById('recent-work-info1');
var recentWorkInfo2 = document.getElementById('recent-work-info2');
var exploreButton = document.getElementById('explore-button');
var recentWork = document.getElementById('recent-work0');

window.addEventListener("scroll", function(){
  var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
}, true);

if(scrollTop >= 160){
  recentWorkInfo0.style.animation = "intro-info-off 0.85s linear forwards";
  recentWorkInfo1.style.animation = "intro-info-off 1.15s linear forwards";
  recentWorkInfo2.style.animation = "intro-info-off 1.35s linear forwards";
  exploreButton.style.animation = "opacity-off 1.15s linear forwards";
  aboutButton.style.animation = "opacity-off 0.35s linear forwards";
  if(scrollTop >= 700){
    if(scrollTop < 2200){
      sectionName1.style.animation = "section-name 0.35s linear forwards";
      sectionName0.style.animation = "section-name-off 0.35s linear forwards";
      recentWork.style.animation = "opacity-off 1.45s linear forwards";
      sectionName1.style.animation = "section-name 0.35s linear forwards";
      sectionName0.style.animation = "section-name-off 0.35s linear forwards";
      recentWork.style.animation = "opacity-off 1.85s linear forwards";
    } else if(scrollTop > 2200){
      sectionName1.style.animation = "section-name-off 0.35s linear forwards";
      sectionName0.style.animation = "section-name 0.35s linear forwards";
    }
  } else if(scrollTop < 700){
    sectionName1.style.animation = "section-name-off 0.35s linear forwards";
    sectionName0.style.animation = "section-name 0.35s linear forwards";
    recentWork.style.animation = "opacity 1.45s linear forwards";
  }
}else if(scrollTop <= 160){
   recentWorkInfo0.style.animation = "intro-info 0.85s linear forwards";
   recentWorkInfo1.style.animation = "intro-info 1.15s linear forwards";
   recentWorkInfo2.style.animation = "intro-info 1.35s linear forwards";
   exploreButton.style.animation = "opacity 1.15s linear forwards";
   aboutButton.style.animation = "opacity 0.35s linear forwards";
}
*/
