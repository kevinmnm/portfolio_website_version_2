let paren;
let offX = 0;
let offY = 0;
let noteZ = [
	{
    	title: 'Example Title',
        tBC: '#FFA500',
        tFC: '#000000',
        bBC: '#FFFF00',
        bFC: '#000000',
        pIn: true,
        zIn: 2,
        keyer: 1234
    }
];

new Vue({
	el: '#content',
    data: {
    	opaYes: false,
        darkMM: false,
    	cont: 'Notes',
        cr: 'Create',
        cl: 'Cancel',
        tT: 'TITLE',
        tt: 'Title: ',
        tc: 'Background Color: ',
        ba: 'BASE',
        baf: 'Font Color: ',
        bCo: 'Background Color: ',
        des1: 'Max 10 characters',
        des2: '*Once created, title cannot be changed!*',
        notz: noteZ,
        titlez: '',
        pinner: true,
        titleBackColor: '#FFA500',
        titleFontColor: '#000000',
        baseBackColor: '#FFFF00',
        baseFontColor: '#000000',
        zinV: [2],
        preTitleBack: '',
        preTitleCol: '',
        preBaseBack: '',
        preBaseCol: '',
        prePin: ''
    },
    methods: {
    	opaci: function(){
        	this.opaYes = true;
        },
        opaciEnd: function(){
        	this.opaYes = false;	
        },
        pinShower: function(e, all){
        	let curr = e.target;
            let currPin = curr.querySelector('.pin');
            currPin.style.display = 'none';
        },
        pinShowerEnd: function(e, all){
        	let curr = e.target;
            let currPin = curr.querySelector('.pin');
            if (all.pIn !== false){
            	currPin.style.display = 'block';
            }
        },
        darkM: function(e){
        	if (e.target.style.color !== 'yellow'){
        		e.target.style.color = 'yellow';
            } else {
            	e.target.style.color = 'black';
            }
            this.darkMM = !this.darkMM;
        },
    	pop: function(){
        	this.$el.querySelector('.coverr').style.display = 'block';
        },
        preCreate: function(){
        	let preview = document.querySelector('.preview');
        	let preNote = document.querySelector('.preNote');
            let preTopS = preNote.querySelector('.topS');
            let titleTxt = preTopS.querySelector('.titleTxt');
            let preEdito = preNote.querySelector('.edito');
            
            preview.style.display = 'block';
            titleTxt.innerHTML = this.titlez;
            preTopS.style.backgroundColor = this.titleBackColor;
            preTopS.style.color = this.titleFontColor;
            preEdito.style.backgroundColor = this.baseBackColor;
            preEdito.style.color = this.baseFontColor;
        },
        pinSelect: function(e){
        	if (e.target.value === 'No'){
            	this.pinner = false;
            } else {
            	this.pinner = true;
            }
        },
    	creator: function(){
        	let ranKey = Math.random();
            let highestZin = Math.max(...(this.zinV));
            this.zinV.push(highestZin + 1);
        	this.notz.push(
            	{
                	title: this.titlez,
                    tBC: this.titleBackColor,
       			 	tFC: this.titleFontColor,
        			bBC: this.baseBackColor,
        			bFC: this.baseFontColor,
                    pIn: this.pinner,
                    zIn: highestZin + 1,
                    keyer: ranKey
                }
            );
            this.titlez = '';
            this.$el.querySelector('.coverr').style.display = 'none';
        },
        closer: function(){
        	let preview = document.querySelector('.preview');
        	this.$el.querySelector('.coverr').style.display = 'none';
            preview.style.display = 'none';
        },
        del: function(e, m){
        	let xxx = confirm('Delete this note?');
            if (xxx) {
            	let disNote = e.target.parentNode.parentNode;
                let disPin = disNote.querySelector('.pin');
                disPin.style.opacity = '0';
                disNote.classList.remove('animate__jackInTheBox');
                disNote.classList.add('animate__hinge');
            	setTimeout(()=>{
                	this.notz.splice(m,1);
                }, 2500);
            }
        },
        nestedFunc: function(e){
        	if (e.target.classList.contains('topS')) {
            	paren = e.target.parentNode;
                paren.classList.add('sel');

                offX = e.offsetX;
                offY = e.offsetY;
                document.onmousemove = this.mouseM;
            }
        },
        mouseM: function(e){
            if (paren.classList.contains('sel')){
                paren.style.left = e.pageX - offX + 'px';
                paren.style.top = e.pageY - offY + 'px';
                paren.onmouseup = this.mouseU;
            }
        },
        mouseU: function(e){
        	if (paren.classList.contains('note')){
                paren.classList.remove('sel');
                if (e.target.classList.contains('topS')){
                    let hZ = Math.max(...(this.zinV));
                    this.zinV.push(hZ + 1);
                    paren.style.zIndex = hZ + 1;
                }
            }
        }
    }
});