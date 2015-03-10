var upcoming_movies = new Array();
API_KEY = '8c8b39627a63612c01f3fed9ef6f1db7';


function getUpcomingMovies(){

	url = 'http://api.themoviedb.org/3/movie/upcoming?api_key=' + API_KEY;
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

				upcoming_movies.push('<li><img src="' + base_img_link + value.poster_path +'"' + ' title="' + value.original_title + '"/><br>' + value.original_title + '</li>');
				
				if(counter < 5){
					$("#UpcomingMoviesContainer .LeftSectionUpcomingMovies .container ul").append('<li><img src="' + base_img_link + value.poster_path +'"' + ' title="' + value.original_title + '"/><br>' + value.original_title + '</li>');
					counter++;
				}
			});

		}
	});

}

$(document).ready(function(){
	getUpcomingMovies();
});