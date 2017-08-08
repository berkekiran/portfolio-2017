// AngularJs Module and Controller Setup

var app = angular.module("portfolio",['ngSanitize']);

// Work Control System

app.controller('WorkController', function($scope) {

  // Works List

  $scope.works = [
                  {name: "Orc Leader", info: "2017 / 3D Character / Game-Ready", link: "https://www.artstation.com/artwork/2V4Lx", style : {"background-image" : "url('https://cdna.artstation.com/p/assets/images/images/006/823/800/large/berke-kiran-screenshot006.jpg?1501534299')", "background-size" : "cover", "background-position" : "center", "background-repeat" : "no-repeat" } },
                  {name: "Sleeping Creature", info: "2016 / 3D Creature", link: "https://www.artstation.com/artwork/vdwLA", style : { "background-image" : "url('https://cdna.artstation.com/p/assets/images/images/006/823/646/large/berke-kiran-sleeping-creature.jpg?1501533327')", "background-size" : "cover", "background-position" : "center", "background-repeat" : "no-repeat" } },
                  {name: "John", info: "2016 / 3D Character", link: "https://www.artstation.com/artwork/4Vd4k", style : { "background-image" : "url('https://cdnb.artstation.com/p/assets/images/images/006/842/405/large/berke-kiran-john-render-1.jpg?1501662674')", "background-size" : "cover", "background-position" : "center", "background-repeat" : "no-repeat" } },
                  {name: "The God", info: "2016 / Digital Artwork", link: "https://www.artstation.com/artwork/Nm8g5", style : { "background-image" : "url('https://cdna.artstation.com/p/assets/images/images/006/805/672/large/berke-kiran-thegod.jpg?1501398937')", "background-size" : "cover", "background-position" : "center", "background-repeat" : "no-repeat" } },
                 ];

  var move = 0,
      numOfSlides = $scope.works.length-1,
      count = 0;

  $scope.next = function() {
    if(count < numOfSlides) {
      if(count == 0) move -= 3320;
      if(count >= 1) move -= 3320;
      $('.works-ul').animate({"margin-left": move},1200);
      count++;
    }
  };

  $scope.first = function() {
    move = 0;
    $('.works-ul').animate({"margin-left": move},1200);
    count = 0;
  };

  $scope.prev = function() {
    if(count == 0) move = 0;
    if(count == 1) {move += 3320; count--;}
    if(count >= 2) {move += 3320; count--;}
    $('.works-ul').animate({"margin-left": move},1200);
  };

});

// Load More Other Projects
app.controller('OtherController', function($scope) {

  var vm = this;
  vm.other = others;
  vm.limit = 6;

  $scope.loadMore = function() {
    var increamented = vm.limit + 3;
    vm.limit = increamented > vm.other.length ? vm.other.length : increamented;

    if(increamented >= vm.other.length){
      $('.more').hide();
    }
  };

});

// Others List

var others = [
              { color: '#161616 ', link: 'https://github.com/berkekiran/portfolio-2017', name: 'Portfolio 2017', year: '2017', image: 'images/other-projects/portfolio-2017.png'},
              { color: '#303030 ', link: 'https://github.com/berkekiran/portfolio-2016-v2', name: 'Portfolio 2016 v2', year: '2016', image: 'images/other-projects/portfolio-2016-v2.png'},
              { color: '#a8933a ', link: 'https://github.com/berkekiran/video-games-center-station', name: 'Video Games Center Station', year: '2016', image: 'images/other-projects/video-games-center-station.png'},
              { color: '#303030 ', link: 'https://github.com/berkekiran/portfolio-2016', name: 'Portfolio 2016', year: '2016', image: 'images/other-projects/portfolio-2016.png'},
              { color: '#303030 ', link: 'https://github.com/berkekiran/portfolio-2015-v5', name: 'Portfolio 2015 v5', year: '2015', image: 'images/other-projects/portfolio-2015-v5.png'},
              { color: '#cccccc ', link: 'https://www.artstation.com/artwork/ONdgg', name: 'UE4 Snowy Road', year: '2015', image: 'images/other-projects/snowyroad.png'},
              { color: '#cccccc ', link: 'https://github.com/berkekiran/ue4-snow-system-v2', name: 'UE4 Snow System v2', year: '2015', image: 'images/other-projects/ue4-snow-system-v2.png'},
              { color: '#cccccc ', link: 'https://github.com/berkekiran/ue4-snow-system-v1', name: 'UE4 Snow System v1', year: '2015', image: 'images/other-projects/ue4-snow-system-v1.png'},
              { color: '#1D1F1E ', link: 'https://github.com/berkekiran/portfolio-2015-v4', name: 'Portfolio 2015 v4', year: '2015', image: 'images/other-projects/portfolio-2015-v4.png'},
              { color: '#161616 ', link: 'https://github.com/berkekiran/portfolio-2015-v3-design', name: 'Portfolio 2015 v3 Design', year: '2015', image: 'images/other-projects/portfolio-2015-v3-design.png'},
              { color: '#cccccc ', link: 'https://github.com/berkekiran/portfolio-2015-v2-design', name: 'Portfolio 2015 v2 Design', year: '2015', image: 'images/other-projects/portfolio-2015-v2-design.png'},
              { color: '#f8f8f8 ', link: 'https://soundcloud.com/berkekiran/berkekiran-truth', name: 'Berke Kiran - Truth', year: '2015', image: 'images/other-projects/berkekiran-truth.png'},
              { color: '#f8f8f8 ', link: 'https://soundcloud.com/berkekiran/berkekiran-death', name: 'Berke Kiran - Death', year: '2015', image: 'images/other-projects/berkekiran-death.png'},
              { color: '#f8f8f8 ', link: 'https://soundcloud.com/berkekiran/adam-noise-soundtrack-v3', name: 'Adam Noise - Soundtrack v3', year: '2015', image: 'images/other-projects/adam-noise-soundtrack-v3.png'},
              { color: '#f8f8f8 ', link: 'https://soundcloud.com/berkekiran/adam-noise-soundtrack-v2', name: 'Adam Noise - Soundtrack v2', year: '2015', image: 'images/other-projects/adam-noise-soundtrack-v2.png'},
              { color: '#f8f8f8 ', link: 'https://soundcloud.com/berkekiran/adam-noise-soundtrack-v1', name: 'Adam Noise - Soundtrack v1', year: '2015', image: 'images/other-projects/adam-noise-soundtrack-v1.png'},
              { color: '#f8f8f8 ', link: 'https://vimeo.com/226496501', name: 'Metal Dragon - Video', year: '2015', image: 'images/other-projects/metal-dragon.png'},
              { color: '#f8f8f8 ', link: 'https://github.com/berkekiran/portfolio-2015', name: 'Portfolio 2015', year: '2015', image: 'images/other-projects/portfolio-2015.png'},
              { color: '#a7aaa9 ', link: 'https://github.com/berkekiran/photo-galleries', name: 'Photo Galleries', year: '2014', image: 'images/other-projects/photo-galleries.png'},
              { color: '#444349 ', link: 'https://github.com/berkekiran/quick-write', name: 'Quick Write', year: '2013', image: 'images/other-projects/quick-write.png'}
             ];


app.controller("bodyController", function($scope, $timeout){

  // Page Scroll Speed Controller

  jQuery.scrollSpeed(100, 2000);

  // Menu Buttons Animations and Redirect Process

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

  // Burger Menu Animation and Redirect Process

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

  // Social Buttons List

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


// Other Javascript Codes



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
