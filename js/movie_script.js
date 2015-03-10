var movie_images = new Array();
API_KEY = '8c8b39627a63612c01f3fed9ef6f1db7';


function getBackdrop(){

	url = 'http://api.themoviedb.org/3/movie/tt0831387/images?api_key=' + API_KEY;
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

				movie_images.push('<li><img src="' + base_img_link + value.poster_path +'"' + ' title="' + value.original_title + '"/><br>' + value.original_title + '</li>');
				
				if(counter < 1){
					$('#backdrop').css("background-image", "url(" + '"' +base_img_link + value.poster_path+ '"' + ")");
					counter++;
				}
			});

		}
	});

}

$(document).ready(function(){
	getBackdrop();
});