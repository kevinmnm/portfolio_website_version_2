import folder_icon from "./src/icon.js"
import github_icon from "./src/github-icon.js"

//Global declarations
let interV;
let interVV;
let covers = document.querySelectorAll('.cover');
let pp = document.querySelector('.pp');
let navItem = document.querySelectorAll('.nav-menu');
let allProjects = [
   {
      title: 'IniTravel Website',
      desc: 'Indonesia Travel Guide website built with Vue CLI plus other useful repositories. This project is also integrated with Google Firebase to manipulate basic server side tasks including storage system and user registeration management. Watch the video or visit Github to see details.',
      category: '<i class="fa fa-window-maximize in-win"></i>',
      github: 'https://github.com/kevinmnm/ini_travel_website',
      link: 'projects/initravel/',
      vid: 'projects/initravel/initravel.mp4',
      new: true,
      developing: false
   },
   {
      title: 'GSG Website',
      desc: 'Gaming Setup Guide website built with React CLI along with other powerful repositories. Website requires login before viewing contents. Login function is implemented with Firebase with 3rd party provider login methods. Watch the intro video or visit Github for details.',
      category: '<i class="fa fa-window-maximize in-win"></i>',
      github: 'https://github.com/kevinmnm/gsg-website',
      link: 'projects/GSG/index.html',
      vid: 'projects/GSG/GSG.mp4',
      new: false,
      developing: true
   },
   {
      title: 'A Knowledge A Day v2',
      desc: 'My personal learning tracker/archive. Note started on 7/1/2020. Developed for personal quick referencing guide. Developed to adhere to "learn at least one thing a day" to improve my web development skill. ',
      category: '<i class="fa fa-lightbulb-o in-uti"></i>',
      github: 'https://github.com/kevinmnm/a_day_a_knowledge',
      link: 'projects/ADAK/ADAK.html',
      vid: 'projects/ADAK/ADAK.mp4',
      new: false,
      developing: true
   },
   {
      title: 'Website Version 1.0.0',
      desc: 'My first portfolio website. See how much I improved since this project was developed. The website you are currently viewing is verion 2. Unlike the simplicity version 2 emphasizes, this project has lots of extra contents including my story of how I got into web development and more.',
      category: '<i class="fa fa-window-maximize in-win"></i>',
      github: 'https://github.com/kevinmnm/portfolio_website_version_1',
      link: 'projects/websiteV1/index.html',
      vid: 'projects/websiteV1/websiteV1.mp4',
      new: false,
      developing: false
   },
   {
      title: 'Compact Note Generator',
      desc: 'CVS Specialty Pharmacy note creator. This project was my very second project ever. This project gave momentum for me to dive deeper into web development. I learned so much with this project as a beginner. This project is a real-world application and still being used by many people I work with.',
      category: '<i class="fa fa-lightbulb-o in-uti"></i>',
      github: 'https://github.com/kevinmnm/compact_note_generator',
      link: 'projects/CNG/CNG.html',
      vid: 'projects/CNG/CNG.mp4',
      new: false,
      developing: false
   },
   {
      title: 'Card Match Game',
      desc: 'Fun card matching game! Play against AI and stack up your win rate. Stats are saved locally.',
      category: '<i class="fa fa-gamepad in-gam"></i>',
      github: 'https://github.com/kevinmnm/card_game',
      link: 'projects/cardGame/cardMatch.html',
      vid: 'projects/cardGame/cardMatch.mp4',
      new: false,
      developing: false
   },
   {
      title: 'Sticky Notes',
      desc: "Developed upon one of my friend's request. Requester wanted to have specific sticky note design thus, all designs implemented are requested by my friend (by hand drawing) except for the dark mode function.",
      category: '<i class="fa fa-lightbulb-o in-uti"></i>',
      github: 'https://github.com/kevinmnm/sticky_notes',
      link: 'projects/stickyNotes/stickyNotes.html',
      vid: 'projects/stickyNotes/stickyNotes.mp4',
      new: false,
      developing: false
   },
   {
      title: 'Rock Paper Scissor Game',
      desc: 'Fun Rock Paper Scissor game! Play against AI built with JavaScript.',
      category: '<i class="fa fa-gamepad in-gam"></i>',
      github: 'https://github.com/kevinmnm/rock_paper_scissor_game',
      link: 'projects/RPSGame/miniGame2.html',
      vid: 'projects/RPSGame/RPSGame.mp4',
      new: false,
      developing: false
   },
   {
      title: 'E-Commerce Website',
      desc: 'Responsive e-commerce website. Built mostly with jQuery.',
      category: '<i class="fa fa-window-maximize in-win"></i>',
      github: 'https://github.com/kevinmnm/e_commerce_website',
      link: 'projects/e-commerce/eCommerce.html',
      vid: 'projects/e-commerce/eCommerce.mp4',
      new: false,
      developing: false
   },
   {
      title: 'Flash Cards Creator',
      desc: 'Flash card application with responsive design. Implemented Animate.css along with Vue transition for flip animation.',
      category: '<i class="fa fa-lightbulb-o in-uti"></i>',
      github: 'https://github.com/kevinmnm/flash_cards',
      link: 'projects/FlashCards/flashCard.html',
      vid: 'projects/FlashCards/flashCard.mp4',
      new: false,
      developing: false
   },
   {
      title: 'Finance Book App',
      desc: 'Finance tracker in Korean language. Built for my Korean friend who wanted simpler approach to manage finance history.',
      category: '<i class="fa fa-lightbulb-o in-uti"></i>',
      github: 'https://github.com/kevinmnm/financial_book',
      link: 'projects/financeBook/financeBook.html',
      vid: 'projects/financeBook/financeBook.mp4',
      new: false,
      developing: false
   },
   {
      title: 'IT Note Creator',
      desc: 'Developed for my current work-related use. As I was transferred to IT department in my current company, I needed an application that can auto-generate case note. I use this application everyday at my work.',
      category: '<i class="fa fa-lightbulb-o in-uti"></i>',
      github: 'https://github.com/kevinmnm/gsd_note_creator',
      link: 'projects/GSD/GSD.html',
      vid: 'projects/GSD/GSD.mp4',
      new: false,
      developing: false
   },
   {
      title: 'Stop Watch',
      desc: 'Simple stop watch application with advanced functionality.',
      category: '<i class="fa fa-lightbulb-o in-uti"></i>',
      github: 'https://github.com/kevinmnm/stop_watch',
      link: 'projects/stopWatch/timeClock.html',
      vid: 'projects/stopWatch/stopWatch.mp4',
      new: false,
      developing: false
   },
   {
      title: 'Fish Farm Game',
      desc: 'Fish Fram game prototype for future development.',
      category: '<i class="fa fa-gamepad in-gam"></i>',
      github: 'https://github.com/kevinmnm/fish_farm_game',
      link: 'projects/fishFarmGame/miniGame3.html',
      vid: 'projects/fishFarmGame/fishFarmGame.mp4',
      new: false,
      developing: false
   },
   {
      title: 'Clicker Game',
      desc: 'Monster clicker game! Click fast and use skills to beat the monster before it beats you.',
      category: '<i class="fa fa-gamepad in-gam"></i>',
      github: 'https://github.com/kevinmnm/monster_clicker_game',
      link: 'projects/clickerGame/miniGame.html',
      vid: 'projects/clickerGame/clickerGame.mp4',
      new: false,
      developing: false
   },
   {
      title: 'Furnished BV Template',
      desc: 'My very first project ever. This project allowed me to comprehend basic HTML, CSS, and simple JavaScript logics starting out as a beginner.',
      category: '<i class="fa fa-lightbulb-o in-uti"></i>',
      github: 'https://github.com/kevinmnm/furnished_bv_template',
      link: 'projects/FBT/FBT.html',
      vid: 'projects/FBT/FBT.mp4',
      new: false,
      developing: false
   }
];

new Vue({
   el: '#projects-list',
   data: {
      allProj: allProjects
   }
});

Vue.component("project-comp-desc", {
   template: `
        <div><slot></slot></div>
    `
});

const projects = new Vue({
   el: '#projects',
   data: {
      title: 'Projects',
      allP: allProjects
   },
   components: {
      "projects-comp": {
         template: `             
                <div class='project pop2' @touchstart='hidee()' @mouseenter='hidee()' @mouseleave='showw()'>
                <div class='folder' v-html='folder' @click='open_project(valProp)'></div>
                <div class='github' v-html='github' @click='open_github(valProp)'></div>
                    <div class='cover' v-if='!hide'>
                    <div class="ribbon-wrapper" v-show='valProp.new'>
                        <div class="glow">&nbsp;</div>
		                  <div class="ribbon-front">NEW</div>
                     </div>
                     <div class="ribbon-wrapper" v-show='valProp.developing'>
                        <div class="glow-dev">&nbsp;</div>
		                  <div class="ribbon-front-dev">Updating..</div>
	                  </div>
                        <div class='proTitle'>
                            {{ titleProp }}
                            <hr style='margin-top:0;'>
                        </div>
                        <div class='proDesc'>{{ descProp }}</div>
                    </div>
                    <div v-else>
                        <video controls preload='auto' @mouseenter='playVid($event)' @mouseleave='pauseVid($event)'>
                            <source :src='vidProp' />
                        </video>
                    </div>
                </div>
            `,
         props: ['title-prop', 'desc-prop', 'vid-prop', 'val-prop'],
         data() {
            return {
               hide: false,
               folder: folder_icon,
               github: github_icon
            }
         },
         methods: {
            hidee() {
               this.hide = true;
            },
            showw() {
               this.hide = false;
            },
            playVid(e) {
               if (!e.target.play()) {
                  e.target.play();
               }
            },
            pauseVid(e) {
               if (e.target.play()) {
                  e.target.pause();
               }
            },
            open_project(valProp) {
               open(valProp.link);
            },
            open_github(valProp) {
               open(valProp.github);
            }
         }
      }
   }
});

let ppInter;
let profilePics = document.querySelectorAll('.profile');

const myself = new Vue({
   el: '#myself',
   data: {
      clk: true,
      whichPic: 1,
      shower_left: false,
      shower_right: false,
      hider_left: true,
      hider_right: true,
      cList: ['Responsive UI/UX Designer', 'SEO & E-Commerce Marketing', 'Social Media Marketer', 'Bilingual: English & Korean', 'English/Korean Freelance Interpreter', 'TESOL Certified Teacher', 'CVS Specialty Pharmacy Agent'],
      sList: ['HTML', '(S)CSS', 'JavaScript (Vanilla)', 'Vue.js', 'Vuetify', 'React.js', 'Redux', 'Firebase', 'jQuery', 'GIT', 'Node.js', 'MongoDB', 'NPM', 'Webpack', 'MySQL']
   },
   methods: {
      clic1: function () {
         this.clk = true;
      },
      clic2: function () {
         this.clk = false;
      },
      slid: function () {
         ppInter = setInterval(() => {
            this.whichPic = !this.whichPic;
         }, 2000);
      },
      slidd: function () {
         clearInterval(ppInter);
         this.whichPic = true;
      },
      show_pic() {
         setTimeout(()=>{
            if (this.hider_left){this.hider_left = false;}
            this.shower_left = true;
            setTimeout(()=>{
               if (this.hider_right){this.hider_right = false;}
               this.shower_right = true;
            },200);
         },400);
         document.querySelectorAll('.profile').forEach(profile => profile.style.opacity = '1');
      },
      hide_pic() {
         if (this.shower_right){this.shower_right = false;}
         this.hider_right = true;
         setTimeout(()=>{
            if (this.shower_left){this.shower_left = false;}
            this.hider_left = true;
         },200);
         document.querySelectorAll('.profile').forEach(profile => profile.style.opacity = '0.5');
      },
      profile_prev(){
         (this.whichPic === 1) ? this.whichPic = 3 : this.whichPic--;
      },
      profile_next(){
         (this.whichPic === 3) ? this.whichPic = 1 : this.whichPic++;
      },
      disable_right_click(e){
         e.preventDefault();
      }
   }
});

// // Detect browser type.

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

const sideR = new Vue({
   el: '#sideR',
   data: {
      text: 'kevinmnm2010@gmail.com',
      chrome: null
   },
   methods: {
      stopi: function () {
         document.querySelector('#marq').stop();
      },
      starti: function () {
         document.querySelector('#marq').start();
      },
      shutdown() {
         let destroy = document.querySelectorAll('.destroy');
         window.scrollTo(0, 0);
         document.body.style.overflow = 'hidden';
         document.querySelector('#cover_up').style.display = 'block';
         document.querySelector('.destroy_fill').classList.add('destroy_fill_animation');

         document.querySelector('.destroy_fill_animation').addEventListener('animationend', () => {
            document.body.style.overflow = 'hidden';
            document.querySelector('.destroy_wrap').style.display = 'none';
            document.querySelector('#cover_up').style.opacity = '0.1';

            let timer = 0;

            for (let i = 0; i < destroy.length; i++) {
               setTimeout(() => {
                  destroy[i].className = '';
                  destroy[i].classList.add('animate__hinge', 'animate__animated');
               }, timer);

               timer += 350;
            }
         });

         destroy[destroy.length - 1].addEventListener('animationend', () => {
            window.location.reload();
         });
      }
   },
   mounted() {
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

const aboutMe = new Vue({
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
      typeWriter: function () {
         let mmm = document.querySelector('.royal_blue');
         let nnn = document.querySelector('.sky_blue');
         let bbb = document.querySelector('.chocolate');
         let marq = document.querySelector('#marq');
         let shutdown = document.querySelector('#shutdown');
         window.scroll(0, 0);
         document.body.style.overflow = 'hidden';
         marq.stop();
         if (this.iCount < this.txt.length) {
            mmm.innerHTML += this.txt.charAt(this.iCount);
            this.iCount++;
            return setTimeout(() => { this.typeWriter(); }, 40);
         } else if (this.iCount2 < this.txt2.length) {
            nnn.innerHTML += this.txt2.charAt(this.iCount2);
            this.iCount2++;
            return setTimeout(() => { this.typeWriter(); }, 40);
         } else if (this.iCount2 === 6) {
            nnn.innerHTML += ' <b class="white">=</b>';
            this.iCount2++;
            return setTimeout(() => { this.typeWriter(); }, 40);
         } else if (this.iCount2 === 7 && this.iCount3 < this.txt3.length) {
            bbb.innerHTML += this.txt3.charAt(this.iCount3);
            this.iCount3++;
            return setTimeout(() => { this.typeWriter(); }, 40);
         } else if (this.iCount3 === 41) {
            bbb.innerHTML += '<b class="white">;</b>';
            setTimeout(() => { this.ended = !this.ended; }, 40);
            this.$el.addEventListener('animationend', () => {
               document.body.style.overflow = 'auto';
               document.querySelector('.intro').style.visibility = 'visible';
               document.querySelector('.intro').classList.add('animate__animated');
               document.querySelector('.intro').classList.add('animate__backInDown');
               document.querySelector('#logo').style.display = 'block';
               document.querySelector('#logo').classList.add('animate__animated');
               document.querySelector('#logo').classList.add('animate__flipInY');
               let faList = document.querySelectorAll('.fas');
               let time = 0;
               for (let i = 0; i < faList.length; i++) {
                  setTimeout(() => {
                     faList[i].style.display = 'block';
                     faList[i].classList.add('animate__bounceInLeft');
                  }, time);
                  time += 100;
               }

               for (let i = 0; i < navItem.length; i++) {
                  setTimeout(() => {
                     document.querySelector('#navBar').style.visibility = 'visible';
                     navItem[i].style.visibility = 'visible';
                     navItem[i].classList.add('animate__bounceInDown');
                     setTimeout(() => {
                        navItem[i].classList.remove('animate__bounceInDown');
                     }, 2000);
                  }, time);
                  time += 100;
               }
               if (navigator.userAgent.indexOf('Chrome') > 0) {
                  marq.style.display = 'block';
                  marq.start();
               } else {
                  setTimeout(() => {
                     shutdown.style.display = 'block';
                     shutdown.classList.add('animate__bounceInRight');
                  }, 1000);
               }
               this.$el.classList.remove('about-me-effect');
               //$('.about-me-effect').animate({'background-color':'rgba(21, 22, 27, 0.3)'});
               document.querySelector('#desc').style.visibility = 'visible';
               document.querySelector('#desc').classList.add('animate__fadeIn');
               document.querySelector('#resume').style.visibility = 'visible';
               document.querySelector('#resume').classList.add('animate__flipInY');
            });
         }
      }
   }
});

aboutMe.typeWriter();

//Vanilla JS
let listAll = document.querySelectorAll('.list-all');
let logo = document.querySelector('#logo');
let logo_wrap = document.querySelector('.logo-wrap');
let desc = document.querySelector('#desc');
let sideRR = document.querySelector('#sideR');
let sideLL = document.querySelector('#sideL');
let intro = document.querySelector('.intro');
let aboutMee = document.querySelector('#about-me');
let expla = document.querySelector('#expla');
let project = document.querySelectorAll('.project');
let proj = document.querySelector('#project');
let blockList = document.querySelector('#blockList');
let rendList = document.querySelector('#rendList');
let projectsList = document.querySelector('#projects-list');
let projectsBlock = document.querySelector('#projects');
let sortBy = document.querySelector('#sortBy');
let navMenu = document.querySelectorAll('.nav-menu');
let amTitle = document.querySelectorAll('.amTitle');
let email = document.querySelectorAll('.email');

//Buttons onclick event listeners
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
});

//Email function
email.forEach(elem => {
   elem.addEventListener('click', function () {
      window.location.href = 'mailto:kevinmnm2010@gmail.com,kevinmnm2012@gmail.com';
   });
});

window.onload = () => {
   //Project css setup
   for (let i = 0; i < project.length; i++) {
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
}
window.onresize = () => {
   //Project css setup
   for (let i = 0; i < project.length; i++) {
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
}

//List onclick
//let theHr = document.querySelector('.theHr');

blockList.addEventListener('click', function () {
   if (blockList.classList.contains('opaci')) {
      blockList.classList.remove('opaci');
      rendList.classList.add('opaci');
   }
   projectsBlock.style.display = 'block';
   projectsList.style.display = 'none';
   sortBy.style.visibility = 'hidden';
   //theHr.style.display = 'block';
   for (let i = 0; i < project.length; i++) {
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
   sortBy.style.opacity = '1';
   //theHr.style.display = 'none';

   let tt = 0;
   for (let i = 0; i < listAll.length; i++) {
      tt += 100;
      setTimeout(() => {
         listAll[i].style.visibility = 'visible';
         listAll[i].classList.add('animate__animated');
         listAll[i].classList.add('animate__fadeInUp');
      }, tt);
   }

});

let utility = document.querySelector('#utility');
let website = document.querySelector('#website');
let game = document.querySelector('#game');
let inUti = document.querySelectorAll('.in-uti');
let inWin = document.querySelectorAll('.in-win');
let inGam = document.querySelectorAll('.in-gam');
let tL = inUti.length + inWin.length + inGam.length;
let utiOnly = listAll.inUti;

//Sort on click icon
utility.onclick = () => {
   if (utility.style.opacity == '0.4') {
      utility.style.opacity = '1';
      for (let i = 0; i < tL; i++) {
         if (listAll[i].querySelector('.in-uti')) {
            listAll[i].style.display = 'block';
         }
      }
   } else if (utility.style.opacity = '1') {
      utility.style.opacity = '0.4';
      for (let i = 0; i < tL; i++) {
         if (listAll[i].querySelector('.in-uti')) {
            listAll[i].style.display = 'none';
         }
      }
   }
}
website.onclick = () => {
   if (website.style.opacity == '0.4') {
      website.style.opacity = '1';
      for (let i = 0; i < tL; i++) {
         if (listAll[i].querySelector('.in-win')) {
            listAll[i].style.display = 'block';
         }
      }
   } else if (website.style.opacity = '1') {
      website.style.opacity = '0.4';
      for (let i = 0; i < tL; i++) {
         if (listAll[i].querySelector('.in-win')) {
            listAll[i].style.display = 'none';
         }
      }
   }
}
game.onclick = () => {
   if (game.style.opacity == '0.4') {
      game.style.opacity = '1';
      for (let i = 0; i < tL; i++) {
         if (listAll[i].querySelector('.in-gam')) {
            listAll[i].style.display = 'block';
         }
      }
   } else if (game.style.opacity = '1') {
      game.style.opacity = '0.4';
      for (let i = 0; i < tL; i++) {
         if (listAll[i].querySelector('.in-gam')) {
            listAll[i].style.display = 'none';
         }
      }
   }
}
//Custom hover setup
let customT = document.querySelector('.custom-title');
document.querySelectorAll('.sort').forEach(item => {
   item.addEventListener('mousemove', function (event) {
      let posB = event.pageX;
      let posL = event.pageY;
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

document.querySelectorAll('.sort').forEach(item => {
   item.addEventListener('mouseleave', function (event) {
      customT.style.display = 'none';
   });
});

document.querySelector('#blockList').addEventListener('mouseenter', function () {
   let posB = event.pageX;
   let posL = event.pageY;
   customT.style.top = posL + 15 + 'px';
   customT.style.left = posB + 20 + 'px';
   customT.style.display = 'block';
   customT.innerHTML = 'Sort Chunk';
});
document.querySelector('#rendList').addEventListener('mouseenter', function () {
   let posB = event.pageX;
   let posL = event.pageY;
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
});

//Nav bar setup
let currentPos = $(window).scrollTop();
$(window).scroll(function () {
   let scrolled = $(window).scrollTop();
   if (scrolled > currentPos) {
      $('#navBar').stop().slideUp(100);
   } else {
      $('#navBar').stop().slideDown(100);
   }
   currentPos = scrolled;
});

navMenu[0].onclick = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); }
navMenu[1].onclick = () => { amTitle[0].scrollIntoView({ behavior: 'smooth' }); }
navMenu[2].onclick = () => { amTitle[1].scrollIntoView({ behavior: 'smooth' }); }
navMenu[3].onclick = () => { amTitle[2].scrollIntoView({ behavior: 'smooth' }); }

//--Show on scroll
function isInViewport(el) {
   const rect = el.getBoundingClientRect();
   return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
   );
}
//Project width & height setup
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

let popList = document.querySelectorAll('.pop');
let popList2 = document.querySelectorAll('.pop2');

let observer = new IntersectionObserver( entries => {
   entries.forEach( entry => {
      if (entry.isIntersecting){
         entry.target.style.visibility = 'visible';
         if (entry.target.classList.contains('pop')){
            return entry.target.classList.add('animate__animated', 'animate__flipInX');
         }
         entry.target.classList.add('animate__animated', 'animate__fadeInUp');
      }
   });
});

popList.forEach( el => {
   observer.observe(el);
});

popList2.forEach( el => {
   observer.observe(el);
});



//Click resume to open resume.
document.querySelector('#resume').addEventListener('click', function () {
   window.open('resume/resume.pdf');
});


document.querySelectorAll('.glower').forEach(item => {
   item.addEventListener('animationend', () => {
      item.style.display = 'none';
   });
});

let last_navItem = navItem[navItem.length - 1];
let glowers = document.querySelectorAll('.glower');

last_navItem.addEventListener('animationend', () => {
   for (let i = 0; i < glowers.length; i++) {
      glowers[i].classList.add('glow-horizon');
   }
});

