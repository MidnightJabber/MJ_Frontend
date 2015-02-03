/* Main JS File */

API_KEY = '8c8b39627a63612c01f3fed9ef6f1db7';



function getMoviesNowPlaying(){

	url = 'http://api.themoviedb.org/3/movie/now_playing?api_key=' + API_KEY;
	base_img_link = 'http://image.tmdb.org/t/p/w500';

	//Use getJSON() or ajax(), ajax is used for more control for instance
	//failure cases, where getJSON does not acknowledge
	$.ajax({
		url: url,
		dataType: 'json',
		type: 'get',
		cache: false,
		success: function(data){
			
			$(data.results).each(function(index, value){
				$("#MoviesNowPlaying ul").append("<li>" + '<img src="' + base_img_link + value.poster_path +'">' + "</li>");
			});

		}
	});

}

$(document).ready(function(){
	getMoviesNowPlaying();
});