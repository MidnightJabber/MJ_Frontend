var pagetop, menu, yPos;

/*
Name: yScroll()
Description: Handles the thought_menu bar to go away and reduction of size of the
			 pagetop depending on the scroll-bar's position.
*/
function yScroll(){
	pagetop = document.getElementById('pagetop');
	menu = document.getElementById('thought_menu');
	yPos = window.pageYOffset;
	
	if(yPos > 150){
	
			pagetop.style.height = "40px";
			pagetop.style.paddingTop = "8px";
			pagetop.style.paddingBottom = "8px";
			menu.style.height = "0px";


			$("#social_id li:eq(0) i").attr('class', 'fa fa-twitter-square fa-black');
			$("#social_id li:eq(1) i").attr('class', 'fa fa-facebook-square fa-black');
			$("#social_id li:eq(2) i").attr('class', 'fa fa-google-plus-square fa-black');
			$("#social_id li:eq(3) i").attr('class', 'fa fa-linkedin-square fa-black');
			$("#social_id li:eq(4) i").attr('class', 'fa fa-youtube-play fa-black');
			$("#social_id li:eq(5) i").attr('class', 'fa fa-github-square fa-black');
			$("#social_id li:eq(6) i").attr('class', 'fa fa-twitch fa-black');
	} 

	else {
		
		pagetop.style.height = "80px";
		pagetop.style.paddingTop = "8px";
		pagetop.style.paddingBottom = "50px";
		menu.style.height = "60px";


		$("#social_id li:eq(0) i").attr('class', 'fa fa-twitter-square fa-1-5x fa-black');
		$("#social_id li:eq(1) i").attr('class', 'fa fa-facebook-square fa-1-5x fa-black');
		$("#social_id li:eq(2) i").attr('class', 'fa fa-google-plus-square fa-1-5x fa-black');
		$("#social_id li:eq(3) i").attr('class', 'fa fa-linkedin-square fa-1-5x fa-black');
		$("#social_id li:eq(4) i").attr('class', 'fa fa-youtube-play fa-1-5x fa-black');
		$("#social_id li:eq(5) i").attr('class', 'fa fa-github-square fa-1-5x fa-black');
		$("#social_id li:eq(6) i").attr('class', 'fa fa-twitch fa-1-5x fa-black');
	}
		
}
		
window.addEventListener("scroll", yScroll);


var isShowing = true;
var i1 = 0;
var i2 = 0;
var i3 = 0;

var images = new Array();

	images[0] = "http://i1197.photobucket.com/albums/aa426/Jastner/compiler_complaint.png";
	images[1] = "http://i1197.photobucket.com/albums/aa426/Jastner/tree.png";
	images[2] = "http://i1197.photobucket.com/albums/aa426/Jastner/flowchart.png";
	images[3] = "http://i1197.photobucket.com/albums/aa426/Jastner/the_general_problem.png";
	images[4] = "http://i1197.photobucket.com/albums/aa426/Jastner/donald_knuth-1.png";

//For thoughts
var arr = new Array();

			arr[0] = '"Quick....whats my favourite desert?...Jello!!!!!!!"<div style="font-size: 12px">-Phil Dunphy</div>';


			arr[1] = '"There are no secrets in life... just hidden truths that lie beneath the surface."<br><div style="font-size: 12px"> - Dexter</div>'; 


			arr[2] = '"Nothing is particularly hard if you divide it into small jobs."<br><div style="font-size: 12px"> - Henry Ford</div>';


			arr[3] = '"Computer science is no more about computers than astronomy is about telescopes."<br><div style="font-size: 12px"> - Edsger Dijkstra</div>';


			arr[4] = '"When nine hundred years old you reach, look as good you will not."<br><div style="font-size: 12px">- Master Yoda</div>';


			arr[5] = '"There is us and the dead. We survive this by pulling together, not apart."<br><div style="font-size: 12px">- Rick Grimes</div>';


			arr[6] = '"Those who cannot remember the past are doomed to repeat it."<br><div style="font-size: 12px">- George Santayana</div>';

$(function(){

	yPos = window.pageYOffset;

	var images_size = images.length;
	var size = arr.length;
	//0 -> min value
	//size - 1 -> max value
	var rand = Math.floor(Math.random() * ((size - 1) - 0 + 1)) + 0;;
	$("#thought").append(arr[rand]);

	var images_rand = Math.floor(Math.random() * ((images_size - 1) - 0 + 1)) + 0;;
	$("#homepage_content #left_container #homepage_image img").attr('src', images[images_rand]);

	//MENU COLOR CHANGE
	$("#side_menu_top").hover(
	function(){
			$("#side_menu_top i").attr('class', 'fa fa-bars fa-1-5x fa-google-plus-color');
			
		
	},

	function(){
			$("#side_menu_top i").attr('class', 'fa fa-bars fa-1-5x fa-black');
	}

	);

	//HOME COLOR CHANGE
	$("#side_menu #menu li:eq(0)").hover(
	function(){
			$("#side_menu #menu li:eq(0) i").attr('class', 'fa fa-home fa-2x fa-twitter-color');
			$("#side_menu #menu li:eq(0)").css('border-color', '#D34836');
			$("#side_menu #menu li:eq(0) i").attr('text-color', '#4099FF');
			$("#side_menu #menu li:eq(0)").css('margin-top', '10px');
			$("#side_menu #menu li:eq(0)").css('padding-bottom', '30px');
		
	},

	function(){
			$("#side_menu #menu li:eq(0) i").attr('class', 'fa fa-home fa-2x fa-black');
			$("#side_menu #menu li:eq(0)").css('border-color', '#4099FF');
			$("#side_menu #menu li:eq(0) i").attr('text-color', 'black');
			$("#side_menu #menu li:eq(0)").css('margin-top', '20px');
			$("#side_menu #menu li:eq(0)").css('padding-bottom', '0px');
	}

	);

	//EXPERIENCE COLOR CHANGE
	$("#side_menu #menu li:eq(1)").hover(
	function(){
			$("#side_menu #menu li:eq(1) i").attr('class', 'fa fa-connectdevelop fa-2x fa-twitter-color');
			$("#side_menu #menu li:eq(1)").css('border-color', '#D34836');
			$("#menu li:eq(1) i").attr('text-color', '#4099FF');
			$("#side_menu #menu li:eq(1)").css('margin-top', '10px');
			$("#side_menu #menu li:eq(1)").css('padding-bottom', '30px');
		
	},

	function(){
			$("#side_menu #menu li:eq(1) i").attr('class', 'fa fa-connectdevelop fa-2x fa-black');
			$("#side_menu #menu li:eq(1)").css('border-color', '#4099FF');
			$("#side_menu #menu li:eq(1) i").attr('text-color', 'black');
			$("#side_menu #menu li:eq(1)").css('margin-top', '20px');
			$("#side_menu #menu li:eq(1)").css('padding-bottom', '0px');
		
	}

	);

	//HOME COLOR CHANGE
	$("#side_menu #menu li:eq(2)").hover(
	function(){
			$("#side_menu #menu li:eq(2) i").attr('class', 'fa fa-code-fork fa-2x fa-twitter-color');
			$("#side_menu #menu li:eq(2)").css('border-color', '#D34836');
			$("#side_menu #menu li:eq(2) i").attr('text-color', '#4099FF');
			$("#side_menu #menu li:eq(2)").css('margin-top', '10px');
			$("#side_menu #menu li:eq(2)").css('padding-bottom', '30px');
		
	},

	function(){
			$("#side_menu #menu li:eq(2) i").attr('class', 'fa fa-code-fork fa-2x fa-black');
			$("#side_menu #menu li:eq(2)").css('border-color', '#4099FF');
			$("#side_menu #menu li:eq(2) i").attr('text-color', 'black');
			$("#side_menu #menu li:eq(2)").css('margin-top', '20px');
			$("#side_menu #menu li:eq(2)").css('padding-bottom', '0px');
	}

	);

	//RESUME COLOR CHANGE
	$("#side_menu #menu li:eq(3)").hover(
	function(){
			$("#side_menu #menu li:eq(3) i").attr('class', 'fa fa-file fa-2x fa-twitter-color');
			$("#side_menu #menu li:eq(3)").css('border-color', '#D34836');
			$("#side_menu #menu li:eq(3) i").attr('text-color', '#4099FF');
			$("#side_menu #menu li:eq(3)").css('margin-top', '10px');
			$("#side_menu #menu li:eq(3)").css('padding-bottom', '30px');
		
	},

	function(){
			$("#side_menu #menu li:eq(3) i").attr('class', 'fa fa-file fa-2x fa-black');
			$("#side_menu #menu li:eq(3)").css('border-color', '#4099FF');
			$("#side_menu #menu li:eq(3) i").attr('text-color', 'black');
			$("#side_menu #menu li:eq(3)").css('margin-top', '20px');
			$("#side_menu #menu li:eq(3)").css('padding-bottom', '0px');
	}

	);

	//BLOG COLOR CHANGE
	$("#side_menu #menu li:eq(4)").hover(
	function(){
			$("#side_menu #menu li:eq(4) i").attr('class', 'fa fa-paw fa-2x fa-twitter-color');
			$("#side_menu #menu li:eq(4)").css('border-color', '#D34836');
			$("#side_menu #menu li:eq(4) i").attr('text-color', '#4099FF');
			$("#side_menu #menu li:eq(4)").css('margin-top', '10px');
			$("#side_menu #menu li:eq(4)").css('padding-bottom', '30px');
		
	},

	function(){
			$("#side_menu #menu li:eq(4) i").attr('class', 'fa fa-paw fa-2x fa-black');
			$("#side_menu #menu li:eq(4)").css('border-color', '#4099FF');
			$("#side_menu #menu li:eq(4) i").attr('text-color', 'black');
			$("#side_menu #menu li:eq(4)").css('margin-top', '20px');
			$("#side_menu #menu li:eq(4)").css('padding-bottom', '0px');
	}

	);

	//CONTACT COLOR CHANGE
	$("#side_menu #menu li:eq(5)").hover(
	function(){
			$("#side_menu #menu li:eq(5) i").attr('class', 'fa fa-user fa-2x fa-twitter-color');
			$("#side_menu #menu li:eq(5)").css('border-color', '#D34836');
			$("#side_menu #menu li:eq(5) i").attr('text-color', '#4099FF');
			$("#side_menu #menu li:eq(5)").css('margin-top', '10px');
			$("#side_menu #menu li:eq(5))").css('padding-bottom', '30px');
		
	},

	function(){
			$("#side_menu #menu li:eq(5) i").attr('class', 'fa fa-user fa-2x fa-black');
			$("#side_menu #menu li:eq(5)").css('border-color', '#4099FF');
			$("#side_menu #menu li:eq(5) i").attr('text-color', 'black');
			$("#side_menu #menu li:eq(5)").css('margin-top', '20px');
			$("#side_menu #menu li:eq(5)").css('padding-bottom', '0px');
	}

	);

	/*************************************************************************************************/
	//TWITTER COLOR CHANGE
	$("#social_id li:eq(0)").hover(
	function(){
		if(yPos > 150)
			$("#social_id li:eq(0) i").attr('class', 'fa fa-twitter-square fa-twitter-color');
		else
			$("#social_id li:eq(0) i").attr('class', 'fa fa-twitter-square fa-1-5x fa-twitter-color');
	},

	function(){
		if(yPos > 150)
			$("#social_id li:eq(0) i").attr('class', 'fa fa-twitter-square fa-black');
		else
			$("#social_id li:eq(0) i").attr('class', 'fa fa-twitter-square fa-1-5x fa-black');
	}

	);

	//FACEBOOK COLOR CHANGE
	$("#social_id li:eq(1)").hover(
	function(){
		if(yPos > 150)
			$("#social_id li:eq(1) i").attr('class', 'fa fa-facebook-square fa-facebook-color');
		else
			$("#social_id li:eq(1) i").attr('class', 'fa fa-facebook-square fa-1-5x fa-facebook-color');
	},

	function(){
		if(yPos > 150)
			$("#social_id li:eq(1) i").attr('class', 'fa fa-facebook-square fa-black');
		else
			$("#social_id li:eq(1) i").attr('class', 'fa fa-facebook-square fa-1-5x fa-black');
	}

	);

	//GOOGLE+ COLOR CHANGE
	$("#social_id li:eq(2)").hover(
	function(){
		if(yPos > 150)
			$("#social_id li:eq(2) i").attr('class', 'fa fa-google-plus-square fa-google-plus-color');
		else
			$("#social_id li:eq(2) i").attr('class', 'fa fa-google-plus-square fa-1-5x fa-google-plus-color');
	},

	function(){
		if(yPos > 150)
			$("#social_id li:eq(2) i").attr('class', 'fa fa-google-plus-square fa-black');
		else
			$("#social_id li:eq(2) i").attr('class', 'fa fa-google-plus-square fa-1-5x fa-black');
	}

	);

	//LINKEDIN COLOR CHANGE
	$("#social_id li:eq(3)").hover(
	function(){
		if(yPos > 150)
			$("#social_id li:eq(3) i").attr('class', 'fa fa-linkedin-square fa-linkedin-color');
		else
			$("#social_id li:eq(3) i").attr('class', 'fa fa-linkedin-square fa-1-5x fa-linkedin-color');
	},

	function(){
		if(yPos > 150)
			$("#social_id li:eq(3) i").attr('class', 'fa fa-linkedin-square fa-black');
		else
			$("#social_id li:eq(3) i").attr('class', 'fa fa-linkedin-square fa-1-5x fa-black');
	}

	);

	//YOUTUBE COLOR CHANGE
	$("#social_id li:eq(4)").hover(
	function(){
		if(yPos > 150)
			$("#social_id li:eq(4) i").attr('class', 'fa fa-youtube-play fa-youtube-color');
		else
			$("#social_id li:eq(4) i").attr('class', 'fa fa-youtube-play fa-1-5x fa-youtube-color');
	},

	function(){
		if(yPos > 150)
			$("#social_id li:eq(4) i").attr('class', 'fa fa-youtube-play fa-black');
		else
			$("#social_id li:eq(4) i").attr('class', 'fa fa-youtube-play fa-1-5x fa-black');
	}

	);

	//GITHUB COLOR CHANGE
	$("#social_id li:eq(5)").hover(
	function(){
		if(yPos > 150)
			$("#social_id li:eq(5) i").attr('class', 'fa fa-github-square fa-github-color');
		else
			$("#social_id li:eq(5) i").attr('class', 'fa fa-github-square fa-1-5x fa-github-color');
	},

	function(){
		if(yPos > 150)
			$("#social_id li:eq(5) i").attr('class', 'fa fa-github-square fa-black');
		else
			$("#social_id li:eq(5) i").attr('class', 'fa fa-github-square fa-1-5x fa-black');
	}

	);

	//TWITCH COLOR CHANGE
	$("#social_id li:eq(6)").hover(
	function(){
		if(yPos > 150)
			$("#social_id li:eq(6) i").attr('class', 'fa fa-twitch fa-twitch-color');
		else
			$("#social_id li:eq(6) i").attr('class', 'fa fa-twitch fa-1-5x fa-twitch-color');
	},

	function(){
		if(yPos > 150)
			$("#social_id li:eq(6) i").attr('class', 'fa fa-twitch fa-black');
		else
			$("#social_id li:eq(6) i").attr('class', 'fa fa-twitch fa-1-5x fa-black');
	}
	
	);


	/*****************************SIDE MENU SLIDE-DOWN PART***************************************/

	var side_menu = $('#side_menu');

		side_menu.hide();

		//dd.filter(':nth-child(n+4)').addClass('hide');


		//Earlier the Event listner was like:
		//$('dt').on('mouseenter', function(){})();
		//But if we have a lot of 'dt's then the event listener will be called
		//a lot of times which is not good performance-wise. Therefore we added a new
		//second parameter which basically says that the event listner would work for the 
		//parent (dl) only if the 'mouseenter' is on 'some' particular child ONLY. In this
		//case it is dt.


		$('#side_menu_top').on('click', function(){
			
			if ( $(side_menu).is( ":hidden" ) ) {
				$(side_menu)
						.slideDown(200);
			}
			else{
				$(side_menu)
						.slideUp(200);
			}
			

		});

})();



