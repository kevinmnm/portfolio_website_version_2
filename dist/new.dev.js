"use strict";

var _icon = _interopRequireDefault(require("./src/icon.js"));

var _githubIcon = _interopRequireDefault(require("./src/github-icon.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Global declarations
var interV;
var interVV;
var covers = document.querySelectorAll('.cover');
var pp = document.querySelector('.pp');
var navItem = document.querySelectorAll('.nav-menu');
var allProjects = [{
  title: 'IniTravel Website',
  desc: 'Indonesia Travel Guide website built with Vue CLI plus other useful repositories. This project is also integrated with Google Firebase to manipulate basic server side tasks including storage system and user registeration management. Watch the video or visit Github to see details.',
  category: '<i class="fa fa-window-maximize in-win"></i>',
  github: 'https://github.com/kevinmnm/ini_travel_website',
  link: 'projects/initravel/',
  vid: 'projects/initravel/initravel.mp4',
  "new": true,
  developing: false
}, {
  title: 'A Knowledge A Day v2',
  desc: 'My personal learning tracker/archive. Note started on 7/1/2020. Developed for personal quick referencing guide. Developed to adhere to "learn at least one thing a day" to improve my web development skill. ',
  category: '<i class="fa fa-lightbulb-o in-uti"></i>',
  github: 'https://github.com/kevinmnm/a_day_a_knowledge',
  link: 'projects/ADAK/ADAK.html',
  vid: 'projects/ADAK/ADAK.mp4',
  "new": false,
  developing: true
}, {
  title: 'GSG Website',
  desc: 'Gaming Setup Guide website built with React CLI along with other powerful repositories. Website requires login before viewing contents. Login function is implemented with Firebase with 3rd party provider login methods. Watch the intro video or visit Github for details.',
  category: '<i class="fa fa-window-maximize in-win"></i>',
  github: 'https://github.com/kevinmnm/gsg-website',
  link: 'projects/GSG/',
  vid: 'projects/GSG/GSG.mp4',
  "new": false,
  developing: false
}, {
  title: 'Website Version 1.0.0',
  desc: 'My first portfolio website. See how much I improved since this project was developed. The website you are currently viewing is verion 2. Unlike the simplicity version 2 emphasizes, this project has lots of extra contents including my story of how I got into web development and more.',
  category: '<i class="fa fa-window-maximize in-win"></i>',
  github: 'https://github.com/kevinmnm/portfolio_website_version_1',
  link: 'projects/websiteV1/index.html',
  vid: 'projects/websiteV1/websiteV1.mp4',
  "new": false,
  developing: false
}, {
  title: 'Compact Note Generator',
  desc: 'CVS Specialty Pharmacy note creator. This project was my very second project ever. This project gave momentum for me to dive deeper into web development. I learned so much with this project as a beginner. This project is a real-world application and still being used by many people I work with.',
  category: '<i class="fa fa-lightbulb-o in-uti"></i>',
  github: 'https://github.com/kevinmnm/compact_note_generator',
  link: 'projects/CNG/CNG.html',
  vid: 'projects/CNG/CNG.mp4',
  "new": false,
  developing: false
}, {
  title: 'Card Match Game',
  desc: 'Fun card matching game! Play against AI and stack up your win rate. Stats are saved locally.',
  category: '<i class="fa fa-gamepad in-gam"></i>',
  github: 'https://github.com/kevinmnm/card_game',
  link: 'projects/cardGame/cardMatch.html',
  vid: 'projects/cardGame/cardMatch.mp4',
  "new": false,
  developing: false
}, {
  title: 'Sticky Notes',
  desc: "Developed upon one of my friend's request. Requester wanted to have specific sticky note design thus, all designs implemented are requested by my friend (by hand drawing) except for the dark mode function.",
  category: '<i class="fa fa-lightbulb-o in-uti"></i>',
  github: 'https://github.com/kevinmnm/sticky_notes',
  link: 'projects/stickyNotes/stickyNotes.html',
  vid: 'projects/stickyNotes/stickyNotes.mp4',
  "new": false,
  developing: false
}, {
  title: 'Rock Paper Scissor Game',
  desc: 'Fun Rock Paper Scissor game! Play against AI built with JavaScript.',
  category: '<i class="fa fa-gamepad in-gam"></i>',
  github: 'https://github.com/kevinmnm/rock_paper_scissor_game',
  link: 'projects/RPSGame/miniGame2.html',
  vid: 'projects/RPSGame/RPSGame.mp4',
  "new": false,
  developing: false
}, {
  title: 'E-Commerce Website',
  desc: 'Responsive e-commerce website. Built mostly with jQuery.',
  category: '<i class="fa fa-window-maximize in-win"></i>',
  github: 'https://github.com/kevinmnm/e_commerce_website',
  link: 'projects/e-commerce/eCommerce.html',
  vid: 'projects/e-commerce/eCommerce.mp4',
  "new": false,
  developing: false
}, {
  title: 'Flash Cards Creator',
  desc: 'Flash card application with responsive design. Implemented Animate.css along with Vue transition for flip animation.',
  category: '<i class="fa fa-lightbulb-o in-uti"></i>',
  github: 'https://github.com/kevinmnm/flash_cards',
  link: 'projects/FlashCards/flashCard.html',
  vid: 'projects/FlashCards/flashCard.mp4',
  "new": false,
  developing: false
}, {
  title: 'Finance Book App',
  desc: 'Finance tracker in Korean language. Built for my Korean friend who wanted simpler approach to manage finance history.',
  category: '<i class="fa fa-lightbulb-o in-uti"></i>',
  github: 'https://github.com/kevinmnm/financial_book',
  link: 'projects/financeBook/financeBook.html',
  vid: 'projects/financeBook/financeBook.mp4',
  "new": false,
  developing: false
}, {
  title: 'IT Note Creator',
  desc: 'Developed for my current work-related use. As I was transferred to IT department in my current company, I needed an application that can auto-generate case note. I use this application everyday at my work.',
  category: '<i class="fa fa-lightbulb-o in-uti"></i>',
  github: 'https://github.com/kevinmnm/gsd_note_creator',
  link: 'projects/GSD/GSD.html',
  vid: 'projects/GSD/GSD.mp4',
  "new": false,
  developing: false
}, {
  title: 'Stop Watch',
  desc: 'Simple stop watch application with advanced functionality.',
  category: '<i class="fa fa-lightbulb-o in-uti"></i>',
  github: 'https://github.com/kevinmnm/stop_watch',
  link: 'projects/stopWatch/timeClock.html',
  vid: 'projects/stopWatch/stopWatch.mp4',
  "new": false,
  developing: false
}, {
  title: 'Fish Farm Game',
  desc: 'Fish Fram game prototype for future development.',
  category: '<i class="fa fa-gamepad in-gam"></i>',
  github: 'https://github.com/kevinmnm/fish_farm_game',
  link: 'projects/fishFarmGame/miniGame3.html',
  vid: 'projects/fishFarmGame/fishFarmGame.mp4',
  "new": false,
  developing: false
}, {
  title: 'Clicker Game',
  desc: 'Monster clicker game! Click fast and use skills to beat the monster before it beats you.',
  category: '<i class="fa fa-gamepad in-gam"></i>',
  github: 'https://github.com/kevinmnm/monster_clicker_game',
  link: 'projects/clickerGame/miniGame.html',
  vid: 'projects/clickerGame/clickerGame.mp4',
  "new": false,
  developing: false
}, {
  title: 'Furnished BV Template',
  desc: 'My very first project ever. This project allowed me to comprehend basic HTML, CSS, and simple JavaScript logics starting out as a beginner.',
  category: '<i class="fa fa-lightbulb-o in-uti"></i>',
  github: 'https://github.com/kevinmnm/furnished_bv_template',
  link: 'projects/FBT/FBT.html',
  vid: 'projects/FBT/FBT.mp4',
  "new": false,
  developing: false
}];
new Vue({
  el: '#projects-list',
  data: {
    allProj: allProjects
  }
});
Vue.component("project-comp-desc", {
  template: "\n        <div><slot></slot></div>\n    "
});
var projects = new Vue({
  el: '#projects',
  data: {
    title: 'Projects',
    allP: allProjects
  },
  components: {
    "projects-comp": {
      template: "             \n                <div class='project pop2' @touchstart='hidee()' @mouseenter='hidee()' @mouseleave='showw()'>\n                <div class='folder' v-html='folder' @click='open_project(valProp)'></div>\n                <div class='github' v-html='github' @click='open_github(valProp)'></div>\n                    <div class='cover' v-if='!hide'>\n                    <div class=\"ribbon-wrapper\" v-show='valProp.new'>\n                        <div class=\"glow\">&nbsp;</div>\n\t\t                  <div class=\"ribbon-front\">NEW</div>\n                     </div>\n                     <div class=\"ribbon-wrapper\" v-show='valProp.developing'>\n                        <div class=\"glow-dev\">&nbsp;</div>\n\t\t                  <div class=\"ribbon-front-dev\">Updating..</div>\n\t                  </div>\n                        <div class='proTitle'>\n                            {{ titleProp }}\n                            <hr style='margin-top:0;'>\n                        </div>\n                        <div class='proDesc'>{{ descProp }}</div>\n                    </div>\n                    <div v-else>\n                        <video controls preload='auto' @mouseenter='playVid($event)' @mouseleave='pauseVid($event)'>\n                            <source :src='vidProp' />\n                        </video>\n                    </div>\n                </div>\n            ",
      props: ['title-prop', 'desc-prop', 'vid-prop', 'val-prop'],
      data: function data() {
        return {
          hide: false,
          folder: _icon["default"],
          github: _githubIcon["default"]
        };
      },
      methods: {
        hidee: function hidee() {
          this.hide = true;
        },
        showw: function showw() {
          this.hide = false;
        },
        playVid: function playVid(e) {
          if (!e.target.play()) {
            e.target.play();
          }
        },
        pauseVid: function pauseVid(e) {
          if (e.target.play()) {
            e.target.pause();
          }
        },
        open_project: function open_project(valProp) {
          open(valProp.link);
        },
        open_github: function open_github(valProp) {
          open(valProp.github);
        }
      }
    }
  }
});
var ppInter;
var profilePics = document.querySelectorAll('.profile');
var myself = new Vue({
  el: '#myself',
  data: {
    clk: true,
    whichPic: 1,
    shower_left_ani: false,
    shower_right_ani: false,
    hider_left_ani: true,
    hider_right_ani: true,
    show_arrowL: false,
    show_arrowR: false,
    cList: ['Responsive UI/UX Designer', 'SEO & E-Commerce Marketing', 'Social Media Marketer', 'Bilingual: English & Korean', 'English/Korean Freelance Interpreter', 'TESOL Certified Teacher', 'CVS Specialty Pharmacy Agent'],
    sList: ['HTML', '(S)CSS', 'JavaScript (Vanilla)', 'Vue.js', 'Vuetify', 'React.js', 'Redux', 'Firebase', 'jQuery', 'GIT', 'Node.js', 'MongoDB', 'NPM', 'Webpack', 'MySQL']
  },
  methods: {
    clic1: function clic1() {
      this.clk = true;
    },
    clic2: function clic2() {
      this.clk = false;
    },
    slid: function slid() {
      var _this = this;

      ppInter = setInterval(function () {
        _this.whichPic = !_this.whichPic;
      }, 2000);
    },
    slidd: function slidd() {
      clearInterval(ppInter);
      this.whichPic = true;
    },
    show_pic: function show_pic() {
      var _this2 = this;

      this.show_arrowL = true;
      this.show_arrowR = true;
      setTimeout(function () {
        if (_this2.hider_left_ani) {
          _this2.hider_left_ani = false;
        }

        _this2.shower_left_ani = true;
        setTimeout(function () {
          if (_this2.hider_right_ani) {
            _this2.hider_right_ani = false;
          }

          _this2.shower_right_ani = true;
        }, 200);
      }, 400);
      document.querySelectorAll('.profile').forEach(function (profile) {
        return profile.style.opacity = '1';
      });
    },
    hide_pic: function hide_pic() {
      // Hide arrow animation.
      // if (this.shower_right){this.shower_right = false;}
      // this.hider_right = true;
      // setTimeout(()=>{
      //    if (this.shower_left){this.shower_left = false;}
      //    this.hider_left = true;
      // },200);
      this.show_arrowL = false;
      this.show_arrowR = false;
      document.querySelectorAll('.profile').forEach(function (profile) {
        return profile.style.opacity = '0.5';
      });
    },
    profile_prev: function profile_prev() {
      this.arrow_temp_hide();
      this.whichPic === 1 ? this.whichPic = 3 : this.whichPic--;
    },
    profile_next: function profile_next() {
      this.arrow_temp_hide();
      this.whichPic === 3 ? this.whichPic = 1 : this.whichPic++;
    },
    disable_right_click: function disable_right_click(e) {
      e.preventDefault();
    },
    arrow_temp_hide: function arrow_temp_hide() {
      var _this3 = this;

      this.show_arrowL = false;
      this.show_arrowR = false;
      setTimeout(function () {
        _this3.show_arrowL = true;
        _this3.show_arrowR = true;
      }, 700);
    }
  }
}); // // Detect browser type.
//    // Opera 8.0+
//    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
//    // Firefox 1.0+
//    var isFirefox = typeof InstallTrigger !== 'undefined';
//    // Safari 3.0+ "[object HTMLElementConstructor]" 
//    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
//    // Internet Explorer 6-11
//    var isIE = /*@cc_on!@*/false || !!document.documentMode;
//    // Edge 20+
//    var isEdge = !isIE && !!window.StyleMedia;
//    // Chrome 1 - 79
//    var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
//    // Edge (based on chromium) detection
//    var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);
//    // Blink engine detection
//    var isBlink = (isChrome || isOpera) && !!window.CSS;
//    let marq = document.querySelector('#marq');

var sideR = new Vue({
  el: '#sideR',
  data: {
    text: 'kevinmnm2010@gmail.com',
    chrome: null
  },
  methods: {
    stopi: function stopi() {
      document.querySelector('#marq').stop();
    },
    starti: function starti() {
      document.querySelector('#marq').start();
    },
    shutdown: function shutdown() {
      var destroy = document.querySelectorAll('.destroy');
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
      document.querySelector('#cover_up').style.display = 'block';
      document.querySelector('.destroy_fill').classList.add('destroy_fill_animation');
      document.querySelector('.destroy_fill_animation').addEventListener('animationend', function () {
        document.body.style.overflow = 'hidden';
        document.querySelector('.destroy_wrap').style.display = 'none';
        document.querySelector('#cover_up').style.opacity = '0.1';
        var timer = 0;

        var _loop = function _loop(i) {
          setTimeout(function () {
            destroy[i].className = '';
            destroy[i].classList.add('animate__hinge', 'animate__animated');
          }, timer);
          timer += 350;
        };

        for (var i = 0; i < destroy.length; i++) {
          _loop(i);
        }
      });
      destroy[destroy.length - 1].addEventListener('animationend', function () {
        window.location.reload();
      });
    }
  },
  mounted: function mounted() {
    if (navigator.userAgent.indexOf('Chrome') > 0) {
      this.chrome = true;

      if (window.innerWidth >= 600) {
        console.warn("You are using Chrome browser.\n Try different browser for different sidebar animation!");
      }
    } else {
      this.chrome = false;

      if (window.innerWidth >= 600) {
        console.warn("You are not using Chrome browser.\n Try Chrome for different sidebar animation!");
      }
    }
  }
});
var aboutMe = new Vue({
  el: '#about-me',
  data: {
    title: "<span class='royal_blue'></span> <span class='sky_blue'> </span><div class='chocolate'></div>",
    iCount: 0,
    iCount2: 0,
    iCount3: 0,
    txt: 'let',
    txt2: ' kevin',
    txt3: "'Actively looking for Web Developer job.'",
    ended: false
  },
  methods: {
    typeWriter: function typeWriter() {
      var _this4 = this;

      var mmm = document.querySelector('.royal_blue');
      var nnn = document.querySelector('.sky_blue');
      var bbb = document.querySelector('.chocolate');
      var marq = document.querySelector('#marq');
      var shutdown = document.querySelector('#shutdown');
      window.scroll(0, 0);
      document.body.style.overflow = 'hidden';
      marq.stop();

      if (this.iCount < this.txt.length) {
        mmm.innerHTML += this.txt.charAt(this.iCount);
        this.iCount++;
        return setTimeout(function () {
          _this4.typeWriter();
        }, 40);
      } else if (this.iCount2 < this.txt2.length) {
        nnn.innerHTML += this.txt2.charAt(this.iCount2);
        this.iCount2++;
        return setTimeout(function () {
          _this4.typeWriter();
        }, 40);
      } else if (this.iCount2 === 6) {
        nnn.innerHTML += ' <b class="white">=</b>';
        this.iCount2++;
        return setTimeout(function () {
          _this4.typeWriter();
        }, 40);
      } else if (this.iCount2 === 7 && this.iCount3 < this.txt3.length) {
        bbb.innerHTML += this.txt3.charAt(this.iCount3);
        this.iCount3++;
        return setTimeout(function () {
          _this4.typeWriter();
        }, 40);
      } else if (this.iCount3 === 41) {
        bbb.innerHTML += '<b class="white">;</b>';
        setTimeout(function () {
          _this4.ended = !_this4.ended;
        }, 40);
        this.$el.addEventListener('animationend', function () {
          document.body.style.overflow = 'auto';
          document.querySelector('.intro').style.visibility = 'visible';
          document.querySelector('.intro').classList.add('animate__animated');
          document.querySelector('.intro').classList.add('animate__backInDown');
          document.querySelector('#logo').style.display = 'block';
          document.querySelector('#logo').classList.add('animate__animated');
          document.querySelector('#logo').classList.add('animate__flipInY');
          var faList = document.querySelectorAll('.fas');
          var time = 0;

          var _loop2 = function _loop2(i) {
            setTimeout(function () {
              faList[i].style.display = 'block';
              faList[i].classList.add('animate__bounceInLeft');
            }, time);
            time += 100;
          };

          for (var i = 0; i < faList.length; i++) {
            _loop2(i);
          }

          var _loop3 = function _loop3(_i) {
            setTimeout(function () {
              document.querySelector('#navBar').style.visibility = 'visible';
              navItem[_i].style.visibility = 'visible';

              navItem[_i].classList.add('animate__bounceInDown');

              setTimeout(function () {
                navItem[_i].classList.remove('animate__bounceInDown');
              }, 2000);
            }, time);
            time += 100;
          };

          for (var _i = 0; _i < navItem.length; _i++) {
            _loop3(_i);
          }

          if (navigator.userAgent.indexOf('Chrome') > 0) {
            marq.style.display = 'block';
            marq.start();
          } else {
            setTimeout(function () {
              shutdown.style.display = 'block';
              shutdown.classList.add('animate__bounceInRight');
            }, 1000);
          }

          _this4.$el.classList.remove('about-me-effect'); //$('.about-me-effect').animate({'background-color':'rgba(21, 22, 27, 0.3)'});


          document.querySelector('#desc').style.visibility = 'visible';
          document.querySelector('#desc').classList.add('animate__fadeIn');
          document.querySelector('#resume').style.visibility = 'visible';
          document.querySelector('#resume').classList.add('animate__flipInY');
        });
      }
    }
  }
});
aboutMe.typeWriter(); //Vanilla JS

var listAll = document.querySelectorAll('.list-all');
var logo = document.querySelector('#logo');
var logo_wrap = document.querySelector('.logo-wrap');
var desc = document.querySelector('#desc');
var sideRR = document.querySelector('#sideR');
var sideLL = document.querySelector('#sideL');
var intro = document.querySelector('.intro');
var aboutMee = document.querySelector('#about-me');
var expla = document.querySelector('#expla');
var project = document.querySelectorAll('.project');
var proj = document.querySelector('#project');
var blockList = document.querySelector('#blockList');
var rendList = document.querySelector('#rendList');
var projectsList = document.querySelector('#projects-list');
var projectsBlock = document.querySelector('#projects');
var sortBy = document.querySelector('#sortBy');
var navMenu = document.querySelectorAll('.nav-menu');
var amTitle = document.querySelectorAll('.amTitle');
var email = document.querySelectorAll('.email'); //Buttons onclick event listeners

logo_wrap.addEventListener('click', function () {
  if (navigator.userAgent.indexOf('Chrome') > 0) {
    sideR.$options.methods.shutdown();
  } else {
    window.scroll(0, 0);
    location.reload();
  }
});
logo_wrap.addEventListener('mouseenter', function () {
  logo.classList.remove('animate__flipInY');
  logo.classList.add('animate__flip');
  logo.classList.add('animate__infinite');
});
logo_wrap.addEventListener('mouseleave', function () {
  logo.classList.remove('animate__flip');
  logo.classList.add('animate__infinite');
}); //Email function

email.forEach(function (elem) {
  elem.addEventListener('click', function () {
    window.location.href = 'mailto:kevinmnm2010@gmail.com,kevinmnm2012@gmail.com';
  });
});

window.onload = function () {
  //Project css setup
  for (var i = 0; i < project.length; i++) {
    project[i].style.height = project[i].getBoundingClientRect().width * 0.54 + 'px';
  }

  if (window.innerWidth < 600) {
    sideRR.style.display = 'none';
    sideLL.style.display = 'none';
    $('.intro, #about-me, #expla, #resume').css({
      'margin-left': '10px',
      'margin-right': '10px'
    });
    $('#resume').css({
      'width': '90%',
      'margin': 'auto',
      'margin-top': '100px',
      'margin-bottom': '200px'
    });
    $('#desc').css({
      'width': '80%',
      'font-size': '18px',
      'margin': 'auto'
    });
    $('#navBar').css({
      'width': '95%',
      'margin': 'auto',
      'left': '0',
      'font-size': '15px'
    });
    $('.social-media-bottom').css({
      'display': 'flex'
    });
    $('#myself').css({
      'margin-left': '10px',
      'margin-right': '10px'
    });
    $('.glower').css({
      'display': 'none'
    });
  }
};

window.onresize = function () {
  //Project css setup
  for (var i = 0; i < project.length; i++) {
    project[i].style.height = project[i].getBoundingClientRect().width * 0.54 + 'px';
  }

  if (window.innerWidth < 600) {
    sideRR.style.display = 'none';
    sideLL.style.display = 'none';
    $('.intro, #about-me, #expla, #resume').css({
      'margin-left': '10px',
      'margin-right': '10px'
    });
    $('#resume').css({
      'width': '90%',
      'margin': 'auto',
      'margin-top': '100px',
      'margin-bottom': '200px'
    });
    $('#desc').css({
      'width': '80%',
      'font-size': '18px',
      'margin': 'auto'
    });
    $('#navBar').css({
      'width': '95%',
      'margin': 'auto',
      'left': '0',
      'font-size': '15px',
      'padding': '10px'
    });
    $('.social-media-bottom').css({
      'display': 'flex'
    });
    $('#myself').css({
      'margin-left': '10px',
      'margin-right': '10px'
    });
    $('.glower').css({
      'display': 'none'
    });
  } else {
    //proj.style.width = '50%';
    sideRR.style.display = 'block';
    sideLL.style.display = 'block';
    $('.intro, #about-me, #expla').css({
      'margin-left': '80px',
      'margin-right': '80px'
    });
    $('#resume').css({
      'width': '25%',
      'margin-left': '0px',
      'margin-top': '150px',
      'margin-bottom': '200px'
    });
    $('#desc').css({
      'font-size': 'calc(0.8vw + 0.8vh)',
      'width': '30%',
      'margin-left': '0px'
    });
    $('#navBar').css({
      'width': '70%',
      'right': '0',
      'margin-right': '50px',
      'font-size': '20px',
      'padding': '15px'
    });
    $('.social-media-bottom').css({
      'display': 'none'
    });
    $('#myself').css({
      'margin-left': '80px',
      'margin-right': '80px'
    });
    $('.glower').css({
      'display': 'block'
    });
  }
}; //List onclick
//let theHr = document.querySelector('.theHr');


blockList.addEventListener('click', function () {
  if (blockList.classList.contains('opaci')) {
    blockList.classList.remove('opaci');
    rendList.classList.add('opaci');
  }

  projectsBlock.style.display = 'block';
  projectsList.style.display = 'none';
  sortBy.style.visibility = 'hidden'; //theHr.style.display = 'block';

  for (var i = 0; i < project.length; i++) {
    project[i].style.height = project[i].getBoundingClientRect().width * 0.54 + 'px';
  }
});
rendList.addEventListener('click', function () {
  if (rendList.classList.contains('opaci')) {
    rendList.classList.remove('opaci');
    blockList.classList.add('opaci');
  }

  projectsBlock.style.display = 'none';
  projectsList.style.display = 'flex';
  sortBy.style.visibility = 'visible';
  sortBy.style.opacity = '1'; //theHr.style.display = 'none';

  var tt = 0;

  var _loop4 = function _loop4(i) {
    tt += 100;
    setTimeout(function () {
      listAll[i].style.visibility = 'visible';
      listAll[i].classList.add('animate__animated');
      listAll[i].classList.add('animate__fadeInUp');
    }, tt);
  };

  for (var i = 0; i < listAll.length; i++) {
    _loop4(i);
  }
});
var utility = document.querySelector('#utility');
var website = document.querySelector('#website');
var game = document.querySelector('#game');
var inUti = document.querySelectorAll('.in-uti');
var inWin = document.querySelectorAll('.in-win');
var inGam = document.querySelectorAll('.in-gam');
var tL = inUti.length + inWin.length + inGam.length;
var utiOnly = listAll.inUti; //Sort on click icon

utility.onclick = function () {
  if (utility.style.opacity == '0.4') {
    utility.style.opacity = '1';

    for (var i = 0; i < tL; i++) {
      if (listAll[i].querySelector('.in-uti')) {
        listAll[i].style.display = 'block';
      }
    }
  } else if (utility.style.opacity = '1') {
    utility.style.opacity = '0.4';

    for (var _i2 = 0; _i2 < tL; _i2++) {
      if (listAll[_i2].querySelector('.in-uti')) {
        listAll[_i2].style.display = 'none';
      }
    }
  }
};

website.onclick = function () {
  if (website.style.opacity == '0.4') {
    website.style.opacity = '1';

    for (var i = 0; i < tL; i++) {
      if (listAll[i].querySelector('.in-win')) {
        listAll[i].style.display = 'block';
      }
    }
  } else if (website.style.opacity = '1') {
    website.style.opacity = '0.4';

    for (var _i3 = 0; _i3 < tL; _i3++) {
      if (listAll[_i3].querySelector('.in-win')) {
        listAll[_i3].style.display = 'none';
      }
    }
  }
};

game.onclick = function () {
  if (game.style.opacity == '0.4') {
    game.style.opacity = '1';

    for (var i = 0; i < tL; i++) {
      if (listAll[i].querySelector('.in-gam')) {
        listAll[i].style.display = 'block';
      }
    }
  } else if (game.style.opacity = '1') {
    game.style.opacity = '0.4';

    for (var _i4 = 0; _i4 < tL; _i4++) {
      if (listAll[_i4].querySelector('.in-gam')) {
        listAll[_i4].style.display = 'none';
      }
    }
  }
}; //Custom hover setup


var customT = document.querySelector('.custom-title');
document.querySelectorAll('.sort').forEach(function (item) {
  item.addEventListener('mousemove', function (event) {
    var posB = event.pageX;
    var posL = event.pageY;
    customT.style.top = posL + 15 + 'px';
    customT.style.left = posB + 20 + 'px';
    customT.style.display = 'block';

    if (item.classList.contains('fa-lightbulb-o')) {
      customT.innerHTML = 'Utiliy';
    } else if (item.classList.contains('fa-gamepad')) {
      customT.innerHTML = 'Game';
    } else {
      customT.innerHTML = 'Website';
    }
  });
});
document.querySelectorAll('.sort').forEach(function (item) {
  item.addEventListener('mouseleave', function (event) {
    customT.style.display = 'none';
  });
});
document.querySelector('#blockList').addEventListener('mouseenter', function () {
  var posB = event.pageX;
  var posL = event.pageY;
  customT.style.top = posL + 15 + 'px';
  customT.style.left = posB + 20 + 'px';
  customT.style.display = 'block';
  customT.innerHTML = 'Sort Chunk';
});
document.querySelector('#rendList').addEventListener('mouseenter', function () {
  var posB = event.pageX;
  var posL = event.pageY;
  customT.style.top = posL + 15 + 'px';
  customT.style.left = posB + 20 + 'px';
  customT.style.display = 'block';
  customT.innerHTML = 'Sort Detail';
});
document.querySelector('#blockList').addEventListener('mouseleave', function () {
  customT.style.display = 'none';
});
document.querySelector('#rendList').addEventListener('mouseleave', function () {
  customT.style.display = 'none';
}); //Nav bar setup

var currentPos = $(window).scrollTop();
$(window).scroll(function () {
  var scrolled = $(window).scrollTop();

  if (scrolled > currentPos) {
    $('#navBar').stop().slideUp(100);
  } else {
    $('#navBar').stop().slideDown(100);
  }

  currentPos = scrolled;
});

navMenu[0].onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

navMenu[1].onclick = function () {
  amTitle[0].scrollIntoView({
    behavior: 'smooth'
  });
};

navMenu[2].onclick = function () {
  amTitle[1].scrollIntoView({
    behavior: 'smooth'
  });
};

navMenu[3].onclick = function () {
  amTitle[2].scrollIntoView({
    behavior: 'smooth'
  });
}; //--Show on scroll


function isInViewport(el) {
  var rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
} //Project width & height setup

/**
document.addEventListener('scroll', () => {
   let popList = document.querySelectorAll('.pop');
   let popList2 = document.querySelectorAll('.pop2');
   if (pp.style.visibility == 'hidden'){
      pp.style.visibility = 'visible';
   }

   for (let i = 0; i < popList.length; i++) {
      if (isInViewport(popList[i])) {
         popList[i].style.visibility = 'visible';
         popList[i].classList.add('animate__animated');
         popList[i].classList.add('animate__flipInX');
      }
   }
   for (let k = 0; k < popList2.length; k++) {
      if (isInViewport(popList2[k])) {
         popList2[k].style.visibility = 'visible';
         popList2[k].classList.add('animate__animated');
         popList2[k].classList.add('animate__fadeInUp');
      }
   }
}, {
   passive: true
});
**/


var popList = document.querySelectorAll('.pop');
var popList2 = document.querySelectorAll('.pop2');
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.style.visibility = 'visible';

      if (entry.target.classList.contains('pop')) {
        return entry.target.classList.add('animate__animated', 'animate__flipInX');
      }

      entry.target.classList.add('animate__animated', 'animate__fadeInUp');
    }
  });
}, {
  threshold: 0.3
});
popList.forEach(function (el) {
  observer.observe(el);
});
popList2.forEach(function (el) {
  observer.observe(el);
}); //Click resume to open resume.

document.querySelector('#resume').addEventListener('click', function () {
  window.open('resume/resume.pdf');
});
document.querySelectorAll('.glower').forEach(function (item) {
  item.addEventListener('animationend', function () {
    item.style.display = 'none';
  });
});
var last_navItem = navItem[navItem.length - 1];
var glowers = document.querySelectorAll('.glower');
last_navItem.addEventListener('animationend', function () {
  for (var i = 0; i < glowers.length; i++) {
    glowers[i].classList.add('glow-horizon');
  }
});