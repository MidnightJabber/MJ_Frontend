/* Main JS File */

API_KEY = '8c8b39627a63612c01f3fed9ef6f1db7';
var new_movies = new Array();
start = 5;
end = 10;



function getMoviesNowPlaying(){

	url = 'http://api.themoviedb.org/3/movie/now_playing?api_key=' + API_KEY;
	base_img_link = 'http://image.tmdb.org/t/p/w500';
	counter = 0;

	//Use getJSON() or ajax(), ajax is used for more control for instance
	//failure cases, where getJSON does not acknowledge
	$.ajax({
		url: url,
		dataType: 'json',
		type: 'get',
		cache: false,
		success: function(data){
			
			$(data.results).each(function(index, value){

				new_movies.push('<li><img src="' + base_img_link + value.poster_path +'"' + ' title="' + value.original_title + '"/><br>' + value.original_title + '</li>');
				
				if(counter < 5){
					$("#MoviesNowPlaying .container ul").append('<li><img src="' + base_img_link + value.poster_path +'"' + ' title="' + value.original_title + '"/><br>' + value.original_title + '</li>');
					counter++;
				}
			});

		}
	});
}




function prevNewMovies(){


	if(start <= 4){
		$(".previous").css('visibility', 'hidden');
		$(".next").css('visibility', 'visible');
	}
	else if(start + 5 >= new_movies.length){
		$(".previous").css('visibility', 'visible');
		$(".next").css('visibility', 'hidden');
	}
	else{
		$(".previous").css('visibility', 'visible');
		$(".next").css('visibility', 'visible');
	}

	start -= 5;

	end -= 5;

	$("#MoviesNowPlaying .container ul").empty();

	for(i = start; i < end; i++){
		$("#MoviesNowPlaying .container ul").append(new_movies[i]);
	}

}

function nextNewMovies(){


	if(start + 5 >= new_movies.length){
		$(".next").css('visibility', 'hidden');
		$(".previous").css('visibility', 'visible');
	}
	else if(start <= 4){
		$(".next").css('visibility', 'visible');
		$(".previous").css('visibility', 'hidden');
	}
	else{
		$(".previous").css('visibility', 'visible');
		$(".next").css('visibility', 'visible');
	}

	$("#MoviesNowPlaying .container ul").empty();

	for(i = start; i < end; i++){
		$("#MoviesNowPlaying .container ul").append(new_movies[i]);
	}
	start += 5;

	end += 5;

}

function animatePodcastSection(){

/*
	document.addEventListener('scroll', function(event){
		if(document.body.scrollHeight == document.body.scrollTop + window.innerHeight){
			alert('YOHOHOHOH');
		}
	});
*/

	$(window).scroll(function() {
	   if($(window).scrollTop() + $(window).height() > $(document).height() - 330) {
	   		ele1 = document.getElementById('phone-outer');
	        ele1.style.marginLeft = "5%";

	        ele2 = document.getElementById('podcast-comingSoon-text');
	        ele2.style.opacity = "1";

	       
	   }
	});

}


$(document).ready(function(){
	getMoviesNowPlaying();
	animatePodcastSection();
});