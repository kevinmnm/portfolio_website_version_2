//Global declarations
let interV;
let interVV;
let covers = document.querySelectorAll('.cover');
let pp = document.querySelector('.pp');
let allProjects = [
    {
        title: 'Website Version 1.0.0',
        desc: 'Portfolio website version 1. See how much I improved since! The website you are currently viewing is v2.',
        category: '<i class="fa fa-window-maximize in-win"></i>',
        github: 'https://github.com/kevinmnm/portfolio_website_version_1',
        link: '/projects/websiteV1/index.html',
        vid: ''
    },
    { 
        title: 'Compact Note Generator',
        desc: 'CVS Specialty Pharmacy note creator. This application is in used among many BV agents today. Find out about its main funtionality and many hidden perks.',
        category: '<i class="fa fa-lightbulb-o in-uti"></i>',
        github: 'https://github.com/kevinmnm/compact_note_generator',
        link: '/projects/CNG/CNG.html',
        vid: ''
    }, 
    {
        title: 'Card Match Game',
        desc: 'Fun card matching game! Play against AI and stack up your win rate!',
        category: '<i class="fa fa-gamepad in-gam"></i>',
        github: 'https://github.com/kevinmnm/card_game',
        link: '/projects/cardGame/cardMatch.html',
        vid: ''
    },
    {
        title: 'A Knowledge A Day',
        desc: 'Learning progress archives that I started on 7/1/2020',
        category: '<i class="fa fa-lightbulb-o in-uti"></i>',
        github: 'https://github.com/kevinmnm/a_day_a_knowledge',
        link: '/projects/ADAK.ADAK.html',
        vid: ''
    },
    {
        title: 'Sticky Notes',
        desc: 'Customizable sticky notes!',
        category: '<i class="fa fa-lightbulb-o in-uti"></i>',
        github: 'https://github.com/kevinmnm/sticky_notes',
        link: '/projects/stickyNotes/stickyNotes.html',
        vid: 'projects/stickyNotes/stickyNotes.mp4'
    },
    {
        title: 'Rock Paper Scissor Game',
        desc: 'Rock Paper Scissor game. Play against AI built with JavaScript.',
        category: '<i class="fa fa-gamepad in-gam"></i>',
        github: 'https://github.com/kevinmnm/rock_paper_scissor_game',
        link: '/projects/RPSGame/miniGame2.html',
        vid: ''
    },
    {
        title: 'E-Commerce Website',
        desc: 'Responsive dummy e-commerce website.',
        category: '<i class="fa fa-window-maximize in-win"></i>',
        github: 'https://github.com/kevinmnm/e_commerce_website',
        link: '/projects/e-commerce/eCommerce.html',
        vid: ''
    }, 
    {
        title: 'Flash Cards Creator',
        desc: 'Flash card application with responsive design implication.',
        category: '<i class="fa fa-lightbulb-o in-uti"></i>',
        github: 'https://github.com/kevinmnm/flash_cards',
        link: '/projects/FlashCards/flashCard.html',
        vid: ''
    },
    {
        title: 'Finance Book App',
        desc: 'Finance book in Korean language. Built for my Korean friend who wanted simpler approach to archive finance history.',
        category: '<i class="fa fa-lightbulb-o in-uti"></i>',
        github: 'https://github.com/kevinmnm/financial_book',
        link: '/projects/financeBook/financeBook.html',
        vid: ''
    }, 
    {
        title: 'IT Note Creator',
        desc: 'Created for personal use. Auto note creator for my current job - Global Service Desk IT department.',
        category: '<i class="fa fa-lightbulb-o in-uti"></i>',
        github: 'https://github.com/kevinmnm/gsd_note_creator',
        link: '/projects/GSD/GSD.html',
        vid: ''
    }, 
    {
        title: 'Stop Watch',
        desc: 'Stop watch with advanced functionality.',
        category: '<i class="fa fa-lightbulb-o in-uti"></i>',
        github: 'https://github.com/kevinmnm/stop_watch',
        link: '/projects/stopWatch/timeClock.html',
        vid: ''
    }, 
    {
        title: 'Fish Farm Game',
        desc: 'Fish Fram game prototype for future development.',
        category: '<i class="fa fa-gamepad in-gam"></i>',
        github: 'https://github.com/kevinmnm/fish_farm_game',
        link: '',
        vid: ''
    }, 
    {
        title: 'Clicker Game',
        desc: 'Monster clicker game. Click fast and use skill to beat the monster before it beats you!',
        category: '<i class="fa fa-gamepad in-gam"></i>',
        github: 'https://github.com/kevinmnm/monster_clicker_game',
        link: '',
        vid: ''
    },
    {
        title: 'Furnished BV Template',
        desc: 'Refined template guide for CVS BV specialty agents. Still widely in use even today.',
        category: '<i class="fa fa-lightbulb-o in-uti"></i>',
        github: 'https://github.com/kevinmnm/furnished_bv_template',
        link: '',
        vid: 'projects/stickyNotes/FBT.mp4'
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
                <div class='project pop2' @mouseenter='hidee()' @mouseleave='showw()'>
                    <div class='cover' v-if='!hide'>
                        <div class='proTitle'>
                            {{ titleProp }}
                            <hr style='margin-top:0;'>
                        </div>
                        <div>{{ descProp }}</div>
                    </div>
                    <div v-else>
                        <video controls preload='auto' @mouseenter='playVid($event)' @mouseleave='pauseVid($event)'>
                            <source :src='vidProp' />
                        </video>
                    </div>
                </div>
            `,
            props: ['title-prop', 'desc-prop', 'vid-prop'],
            data(){
                return {
                    hide: false                
                }
            },
            methods: {
                hidee(){
                    this.hide = true;
                },
                showw(){
                    this.hide = false;
                },
                playVid(e){
                    if (!e.target.play()){
                        e.target.play();
                    }
                },
                pauseVid(e){
                    if (e.target.play()){
                        e.target.pause();
                    }
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
        whichPic: true,
        cList: ['Responsive UI/UX Designer','SEO & E-Commerce Marketing', 'Social Media Marketer', 'Bilingual: English & Korean', 'English/Korean Freelance Interpreter', 'TESOL Certified Teacher','CVS Specialty Pharmacy Agent'],
        sList: ['HTML', '(S)CSS', 'JavaScript (Vanilla)', 'Vue.js', 'jQuery', 'GIT', 'Node.js', 'MySQL'],
    },
    methods: {
        clic1: function(){
            this.clk = true;
        },
        clic2: function(){
            this.clk = false;
        },
        slid: function(){
            ppInter = setInterval(()=>{
                this.whichPic = !this.whichPic;
            },2000);
        },
        slidd: function(){
            clearInterval(ppInter);
            this.whichPic = true;
        }
    }
});

const sideR = new Vue({
    el: '#sideR',
    data: {
        text: 'kevinmnm2010@gmail.com'
    },
    methods: {
        stopi: function(){
            document.querySelector('#marq').stop();
        },
        starti: function(){
            document.querySelector('#marq').start();
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
        typeWriter: function(){
            let mmm = document.querySelector('.royal_blue');
            let nnn = document.querySelector('.sky_blue');
            let bbb = document.querySelector('.chocolate');
            let marq = document.querySelector('#marq');
            marq.stop();
            
            if (this.iCount < this.txt.length){
                mmm.innerHTML += this.txt.charAt(this.iCount);
                this.iCount++;
                return setTimeout(()=>{this.typeWriter();},40);
            } else if (this.iCount2 < this.txt2.length){
                nnn.innerHTML += this.txt2.charAt(this.iCount2);
                this.iCount2++;
                return setTimeout(()=>{this.typeWriter();},40);
            } else if (this.iCount2 === 6){
                nnn.innerHTML += ' <b class="white">=</b>';
                this.iCount2++;
                return setTimeout(()=>{this.typeWriter();},40);
            } else if (this.iCount2 === 7 && this.iCount3 < this.txt3.length){
                bbb.innerHTML += this.txt3.charAt(this.iCount3);
                this.iCount3++;
                return setTimeout(()=>{this.typeWriter();},40);
            } else if (this.iCount3 === 41){
                bbb.innerHTML += '<b class="white">;</b>';
                setTimeout(()=>{this.ended = !this.ended;},40);
                this.$el.addEventListener('animationend', () => {
                	document.querySelector('.intro').style.visibility = 'visible';
                    document.querySelector('.intro').classList.add('animate__animated');
                    document.querySelector('.intro').classList.add('animate__backInDown');
                    document.querySelector('#logo').style.display = 'block';
                    document.querySelector('#logo').classList.add('animate__animated');
                    document.querySelector('#logo').classList.add('animate__flipInY');
                    let faList = document.querySelectorAll('.fas');
                    let time = 0;
                    for (let i=0; i<faList.length; i++){
                        setTimeout(()=>{
                            faList[i].style.display = 'block';
                            faList[i].classList.add('animate__bounceInLeft');             
                        },time);
                        time += 100;
                    }
                    let navItem = document.querySelectorAll('.nav-menu');
                    for (let i=0; i<navItem.length; i++){
                        setTimeout(()=>{
                            document.querySelector('#navBar').style.visibility = 'visible';
                            navItem[i].style.visibility = 'visible';
                            navItem[i].classList.add('animate__bounceInDown');
                            setTimeout(()=>{
                                navItem[i].classList.remove('animate__bounceInDown');
                            },2000);
                        },time);
                        time += 100;
                    }
                    marq.style.display = 'block';
                    marq.start();
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
logo.addEventListener('click',function(){
    window.scroll(0,0);
    //window.scrollTo({top:0});
    location.reload();
});
logo.addEventListener('mouseover',function(){
    logo.classList.remove('animate__flipInY');
    logo.classList.add('animate__flip');
    logo.classList.add('animate__infinite');
});
logo.addEventListener('mouseout',function(){
    logo.classList.remove('animate__flip');
    logo.classList.add('animate__infinite');
});

//Email function
email.forEach(elem =>{
    elem.addEventListener('click', function(){
        window.location.href = 'mailto:kevinmnm2010@gmail.com,kevinmnm2012@gmail.com';
    });
});

window.onload = ()=>{
    //Project css setup
    for (let i=0; i<project.length; i++){
        project[i].style.height = project[i].getBoundingClientRect().width * 0.54 + 'px';
    }
    if (window.innerWidth < 600){    
        sideRR.style.display = 'none';
        sideLL.style.display = 'none';
        $('.intro, #about-me, #expla #resume').css({
            'margin-left':'10px',
            'margin-right':'10px'
        });
        $('#resume').css({
            'width':'90%',
            'margin':'auto',
            'margin-top':'100px',
            'margin-bottom':'200px'
        });
        $('#desc').css({
            'width':'80%',
            'font-size':'18px',
            'margin':'auto'
        });
        $('#navBar').css({
            'width':'95%',
            'margin':'auto',
            'left':'0'
        });
        $('.social-media-bottom').css({
            'display':'flex'
        });
        $('#myself').css({
            'margin-left':'10px',
            'margin-right':'10px'
        });
    }
}
window.onresize = ()=>{
    //Project css setup
    for (let i=0; i<project.length; i++){
        project[i].style.height = project[i].getBoundingClientRect().width * 0.54 + 'px';
    }

    if (window.innerWidth < 600){
        sideRR.style.display = 'none';
        sideLL.style.display = 'none';
        $('.intro, #about-me, #expla, #resume').css({
            'margin-left':'10px',
            'margin-right':'10px'
        });
        $('#resume').css({
            'width':'90%',
            'margin':'auto',
            'margin-top':'100px',
            'margin-bottom':'200px'
        });
        $('#desc').css({
            'width':'80%',
            'font-size':'18px',
            'margin':'auto'
        });
        $('#navBar').css({
            'width':'95%',
            'margin':'auto',
            'left':'0'
        });
        $('.social-media-bottom').css({
            'display':'flex'
        });
        $('#myself').css({
            'margin-left':'10px',
            'margin-right':'10px'
        });
    } else {
        //proj.style.width = '50%';
        sideRR.style.display = 'block';
        sideLL.style.display = 'block';
        $('.intro, #about-me, #expla').css({
            'margin-left':'80px',
            'margin-right':'80px'
        });
        $('#resume').css({
            'width':'25%',
            'margin-left':'0px',
            'margin-top':'150px',
            'margin-bottom':'200px'
        });
        $('#desc').css({
            'font-size':'calc(0.8vw + 0.8vh)',
            'width':'30%',
            'margin-left':'0px'
        });
        $('#navBar').css({
            'width':'70%',
            'right':'0',
            'margin-right':'50px'
        });
        $('.social-media-bottom').css({
            'display':'none'
        });
        $('#myself').css({
            'margin-left':'80px',
            'margin-right':'80px'
        });
    }   
}

//List onclick
//let theHr = document.querySelector('.theHr');

blockList.addEventListener('click',function(){
    if (blockList.classList.contains('opaci')){
        blockList.classList.remove('opaci');
        rendList.classList.add('opaci');
    }
    projectsBlock.style.display = 'block';
    projectsList.style.display = 'none';
    sortBy.style.visibility = 'hidden';
    //theHr.style.display = 'block';
    for (let i=0; i<project.length; i++){
        project[i].style.height = project[i].getBoundingClientRect().width * 0.54 + 'px';
    }
});
rendList.addEventListener('click',function(){
    if (rendList.classList.contains('opaci')){
        rendList.classList.remove('opaci');
        blockList.classList.add('opaci');
    }
    projectsBlock.style.display = 'none';
    projectsList.style.display = 'flex';
    sortBy.style.visibility = 'visible';
    sortBy.style.opacity = '1';
    //theHr.style.display = 'none';

    let tt = 0;
    for (let i=0; i<listAll.length; i++){
        tt += 100;
        setTimeout(()=>{
            listAll[i].style.visibility = 'visible';
            listAll[i].classList.add('animate__animated');
            listAll[i].classList.add('animate__fadeInUp');
        },tt);
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
utility.onclick = ()=>{
    if (utility.style.opacity == '0.4'){
        utility.style.opacity = '1';
        for (let i=0; i<tL; i++){
            if (listAll[i].querySelector('.in-uti')){
                listAll[i].style.display = 'block';
            }
        }
    } else if (utility.style.opacity = '1'){
        utility.style.opacity = '0.4';
        for (let i=0; i<tL; i++){
            if (listAll[i].querySelector('.in-uti')){
                listAll[i].style.display = 'none';
            }
        }
    }
}
website.onclick = ()=>{
    if (website.style.opacity == '0.4'){
        website.style.opacity = '1';
        for (let i=0; i<tL; i++){
            if (listAll[i].querySelector('.in-win')){
                listAll[i].style.display = 'block';
            }
        }
    } else if (website.style.opacity = '1'){
        website.style.opacity = '0.4';
        for (let i=0; i<tL; i++){
            if (listAll[i].querySelector('.in-win')){
                listAll[i].style.display = 'none';
            }
        }
    }
}
game.onclick = ()=>{
    if (game.style.opacity == '0.4'){
        game.style.opacity = '1';
        for (let i=0; i<tL; i++){
            if (listAll[i].querySelector('.in-gam')){
                listAll[i].style.display = 'block';
            }
        }
    } else if (game.style.opacity = '1'){
        game.style.opacity = '0.4';
        for (let i=0; i<tL; i++){
            if (listAll[i].querySelector('.in-gam')){
                listAll[i].style.display = 'none';
            }
        }
    }
}
//Custom hover setup
let customT = document.querySelector('.custom-title');
document.querySelectorAll('.sort').forEach(item => {
    item.addEventListener('mousemove',function(event){
        let posB = event.pageX;
        let posL = event.pageY;
        customT.style.top = posL + 15 + 'px';
        customT.style.left = posB + 20 + 'px';
        customT.style.display = 'block';
        if (item.classList.contains('fa-lightbulb-o')){
            customT.innerHTML = 'Utiliy';
        } else if (item.classList.contains('fa-gamepad')){
            customT.innerHTML = 'Game';
        } else {
            customT.innerHTML = 'Website';
        }
    });
});

document.querySelectorAll('.sort').forEach(item => {
    item.addEventListener('mouseleave',function(event){
        customT.style.display = 'none';
    });
});

document.querySelector('#blockList').addEventListener('mouseenter',function(){
    let posB = event.pageX;
    let posL = event.pageY;
    customT.style.top = posL + 15 + 'px';
    customT.style.left = posB + 20 + 'px';
    customT.style.display = 'block';
    customT.innerHTML = 'Sort Chunk';
});
document.querySelector('#rendList').addEventListener('mouseenter',function(){
    let posB = event.pageX;
    let posL = event.pageY;
    customT.style.top = posL + 15 + 'px';
    customT.style.left = posB + 20 + 'px';
    customT.style.display = 'block';
    customT.innerHTML = 'Sort Detail';
});

document.querySelector('#blockList').addEventListener('mouseleave',function(){
    customT.style.display = 'none';
});
document.querySelector('#rendList').addEventListener('mouseleave',function(){
    customT.style.display = 'none';
});

//Nav bar setup
let currentPos = $(window).scrollTop();
$(window).scroll(function(){
    let scrolled = $(window).scrollTop();
    if (scrolled > currentPos){
        $('#navBar').slideUp(200);
    } else {
        $('#navBar').slideDown(200);
    }
    currentPos = scrolled;
});

navMenu[0].onclick = ()=>{window.scrollTo({top:0,behavior:'smooth'});}
navMenu[1].onclick = ()=>{amTitle[0].scrollIntoView({behavior: 'smooth'});}
navMenu[2].onclick = ()=>{amTitle[1].scrollIntoView({behavior: 'smooth'});}
navMenu[3].onclick = ()=>{amTitle[2].scrollIntoView({behavior:'smooth'});}

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
document.addEventListener('scroll', ()=>{
    let popList = document.querySelectorAll('.pop');
    let popList2 = document.querySelectorAll('.pop2');
    for (let i=0; i<popList.length; i++){
        if (isInViewport(popList[i])){
            popList[i].style.visibility = 'visible';
            popList[i].classList.add('animate__animated');
            popList[i].classList.add('animate__flipInX');
        }
    }
    for (let k=0; k<popList2.length; k++){
        if (isInViewport(popList2[k])){
            popList2[k].style.visibility = 'visible';
            popList2[k].classList.add('animate__animated');
            popList2[k].classList.add('animate__fadeInUp');
        }
    }
},{
    passive: true
});

document.querySelector('#resume').addEventListener('click', function(){
    window.open('resume/resume.pdf');
});