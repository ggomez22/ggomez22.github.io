$(document).ready(function(){
    $('#load-content').click(function(){
    	$('#home').removeClass('active');
    	$('#load-content').addClass('active');

        $('#latest-restaurants').hide('fast');
        $('#restaurants').show('fast');
        $('#pages').show('fast');

        $('.section-title').find('.subtitle').text('¿Buscas un restaurante?');
        $('.section-title').find('.pr-font').text('MELP es tu solución');
    });

    $('.navbar-brand, #home').click(function(){
    	$('#load-content').removeClass('active');
    	$('#home').addClass('active');

        $('#restaurants').hide('fast');
        $('#latest-restaurants').show('fast');
        $('#pages').hide('fast');

        $('.section-title').find('.subtitle').text('Nuevos en Melp');
        $('.section-title').find('.pr-font').text('Conócelos');
    });

    $('#first, #link-0').click(function() {
    	$('#page-0').removeClass('hide-page').addClass('show-page');
    	
    	$('#page-1').removeClass('show-page').addClass('hide-page');
    	$('#page-2').removeClass('show-page').addClass('hide-page');
    	$('#page-3').removeClass('show-page').addClass('hide-page');
    	$('#page-4').removeClass('show-page').addClass('hide-page');
    	$('#page-5').removeClass('show-page').addClass('hide-page');
    	$('#page-6').removeClass('show-page').addClass('hide-page');
    	$('#page-7').removeClass('show-page').addClass('hide-page');
    	$('#page-8').removeClass('show-page').addClass('hide-page');
    	$('#page-9').removeClass('show-page').addClass('hide-page');
    });
    $('#link-1').click(function() {
    	$('#page-1').removeClass('hide-page').addClass('show-page');

    	$('#page-0').removeClass('show-page').addClass('hide-page');
    	$('#page-2').removeClass('show-page').addClass('hide-page');
    	$('#page-3').removeClass('show-page').addClass('hide-page');
    	$('#page-4').removeClass('show-page').addClass('hide-page');
    	$('#page-5').removeClass('show-page').addClass('hide-page');
    	$('#page-6').removeClass('show-page').addClass('hide-page');
    	$('#page-7').removeClass('show-page').addClass('hide-page');
    	$('#page-8').removeClass('show-page').addClass('hide-page');
    	$('#page-9').removeClass('show-page').addClass('hide-page');
    });
    $('#link-2').click(function() {
    	$('#page-2').removeClass('hide-page').addClass('show-page');

    	$('#page-0').removeClass('show-page').addClass('hide-page');
    	$('#page-1').removeClass('show-page').addClass('hide-page');
    	$('#page-3').removeClass('show-page').addClass('hide-page');
    	$('#page-4').removeClass('show-page').addClass('hide-page');
    	$('#page-5').removeClass('show-page').addClass('hide-page');
    	$('#page-6').removeClass('show-page').addClass('hide-page');
    	$('#page-7').removeClass('show-page').addClass('hide-page');
    	$('#page-8').removeClass('show-page').addClass('hide-page');
    	$('#page-9').removeClass('show-page').addClass('hide-page');
    });
    $('#link-3').click(function() {
    	$('#page-3').removeClass('hide-page').addClass('show-page');

    	$('#page-0').removeClass('show-page').addClass('hide-page');
    	$('#page-1').removeClass('show-page').addClass('hide-page');
    	$('#page-2').removeClass('show-page').addClass('hide-page');
    	$('#page-4').removeClass('show-page').addClass('hide-page');
    	$('#page-5').removeClass('show-page').addClass('hide-page');
    	$('#page-6').removeClass('show-page').addClass('hide-page');
    	$('#page-7').removeClass('show-page').addClass('hide-page');
    	$('#page-8').removeClass('show-page').addClass('hide-page');
    	$('#page-9').removeClass('show-page').addClass('hide-page');
    });
    $('#link-4').click(function() {
    	$('#page-4').removeClass('hide-page').addClass('show-page');
    	
    	$('#page-0').removeClass('show-page').addClass('hide-page');
    	$('#page-1').removeClass('show-page').addClass('hide-page');
    	$('#page-2').removeClass('show-page').addClass('hide-page');
    	$('#page-3').removeClass('show-page').addClass('hide-page');
    	$('#page-5').removeClass('show-page').addClass('hide-page');
    	$('#page-6').removeClass('show-page').addClass('hide-page');
    	$('#page-7').removeClass('show-page').addClass('hide-page');
    	$('#page-8').removeClass('show-page').addClass('hide-page');
    	$('#page-9').removeClass('show-page').addClass('hide-page');
    });
    $('#link-5').click(function() {
    	$('#page-5').removeClass('hide-page').addClass('show-page');
    	
    	$('#page-0').removeClass('show-page').addClass('hide-page');
    	$('#page-1').removeClass('show-page').addClass('hide-page');
    	$('#page-2').removeClass('show-page').addClass('hide-page');
    	$('#page-3').removeClass('show-page').addClass('hide-page');
    	$('#page-4').removeClass('show-page').addClass('hide-page');
    	$('#page-6').removeClass('show-page').addClass('hide-page');
    	$('#page-7').removeClass('show-page').addClass('hide-page');
    	$('#page-8').removeClass('show-page').addClass('hide-page');
    	$('#page-9').removeClass('show-page').addClass('hide-page');
    });
    $('#link-6').click(function() {
    	$('#page-6').removeClass('hide-page').addClass('show-page');
    	
    	$('#page-0').removeClass('show-page').addClass('hide-page');
    	$('#page-1').removeClass('show-page').addClass('hide-page');
    	$('#page-2').removeClass('show-page').addClass('hide-page');
    	$('#page-3').removeClass('show-page').addClass('hide-page');
    	$('#page-4').removeClass('show-page').addClass('hide-page');
    	$('#page-5').removeClass('show-page').addClass('hide-page');
    	$('#page-7').removeClass('show-page').addClass('hide-page');
    	$('#page-8').removeClass('show-page').addClass('hide-page');
    	$('#page-9').removeClass('show-page').addClass('hide-page');
    });
    $('#link-7').click(function() {
    	$('#page-7').removeClass('hide-page').addClass('show-page');
    	
    	$('#page-0').removeClass('show-page').addClass('hide-page');
    	$('#page-1').removeClass('show-page').addClass('hide-page');
    	$('#page-2').removeClass('show-page').addClass('hide-page');
    	$('#page-3').removeClass('show-page').addClass('hide-page');
    	$('#page-4').removeClass('show-page').addClass('hide-page');
    	$('#page-5').removeClass('show-page').addClass('hide-page');
    	$('#page-6').removeClass('show-page').addClass('hide-page');
    	$('#page-8').removeClass('show-page').addClass('hide-page');
    	$('#page-9').removeClass('show-page').addClass('hide-page');
    });
    $('#link-8').click(function() {
    	$('#page-8').removeClass('hide-page').addClass('show-page');
    	
    	$('#page-0').removeClass('show-page').addClass('hide-page');
    	$('#page-1').removeClass('show-page').addClass('hide-page');
    	$('#page-2').removeClass('show-page').addClass('hide-page');
    	$('#page-3').removeClass('show-page').addClass('hide-page');
    	$('#page-4').removeClass('show-page').addClass('hide-page');
    	$('#page-5').removeClass('show-page').addClass('hide-page');
    	$('#page-6').removeClass('show-page').addClass('hide-page');
    	$('#page-7').removeClass('show-page').addClass('hide-page');
    	$('#page-9').removeClass('show-page').addClass('hide-page');
    });
    $('#last, #link-9').click(function() {
    	$('#page-9').removeClass('hide-page').addClass('show-page');
    	
    	$('#page-0').removeClass('show-page').addClass('hide-page');
    	$('#page-1').removeClass('show-page').addClass('hide-page');
    	$('#page-2').removeClass('show-page').addClass('hide-page');
    	$('#page-3').removeClass('show-page').addClass('hide-page');
    	$('#page-4').removeClass('show-page').addClass('hide-page');
    	$('#page-5').removeClass('show-page').addClass('hide-page');
    	$('#page-6').removeClass('show-page').addClass('hide-page');
    	$('#page-7').removeClass('show-page').addClass('hide-page');
    	$('#page-8').removeClass('show-page').addClass('hide-page');
    });
})

function initMap() {
	/*$.ajax({
		url: 'https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json​',
		type: 'GET',
		async : true,
		//dataType : 'jsonp',
		headers: { 'Access-Control-Allow-Origin': '*' },
		withCredentials: false,
		success: function(melp) {
			console.log(melp);
			//loadMap(melp);
		},
		error: function (xhr, ajaxOptions, thrownError) {
			console.log("Se ha producido un error: " + xhr.status + " " + thrownError);
		}
	});*/
	//Due to the need of extra configuration for local server to access htttps
	//the AJAX request is made to a local file
	$.ajax({
		url: 'js/data_melp.json',
		type: 'GET',
		async : true,
		success: function(melp) {
			loadMap(melp);
			loadLatest(melp);
			loadAll(melp);
		},
		error: function (xhr, ajaxOptions, thrownError) {
			console.log("Se ha producido un error: " + xhr.status + " " + thrownError);
		}
	});

	function loadLatest(latest) {
		var key = "AIzaSyCDyLPA9c9HxUz7Nr7aB-29fsVx9zAhhOk";
		var urlMap = 'https://www.google.com/maps/embed/v1/place?key=' + key + '&q=';
		var rest = [latest[0], latest[1], latest[2]];
		var count = 0;
		var location;
		rest.forEach(function (rest) {
			var rating = rest.rating;
			location = rest.address.location;
			count ++;
			$('#latest-restaurant-container').append('<div class="col-md-4 restaurants-3">' +
														'<div class="restaurants-3-image star-'+ rating +'" style="background: url(\'img/restaurants/' + 
															count + '.jpg\') no-repeat center; background-size: 100% auto;">' +
														'</div>' +
														'<div class="rest-data">' +
															'<div class="map-embed">' +
																'<iframe width="100%" height="100%" frameborder="0" style="border:0;"' +
																'src=' + urlMap + location.lat + ',' + location.lng + ' allowfullscreen>' +
																'</iframe>' +
															'</div>'+
															'<div class="description">' +
																'<h3>' + rest.name + '</h3>' +
																'<div class="address">' +
																	'<p>' + rest.address.street + 
																 	', '  + rest.address.city + 
																 	', '  +	rest.address.state + '</p>' +
																'</div>'+
																'<div class="contact">' +
																	'<p> Tel.: ' + rest.contact.phone + '</p>' +
																	'<p> Email: ' + rest.contact.email + '</p>' +
																	'<p>Sitio web: <a>' + rest.contact.site + '</a></p>' +
																'</div>'+
															'</div>'+ 
														'</div>'+ 
											  		'</div>');
		})
	}

	function loadAll(all) {
		var key = "AIzaSyCDyLPA9c9HxUz7Nr7aB-29fsVx9zAhhOk";
		var urlMap = 'https://www.google.com/maps/embed/v1/place?key=' + key + '&q=';
		var count = 0, pageCount = 0;
		var location;
		all.forEach(function (all) {
			pic = Math.floor(Math.random() * 20) + 1;
			var rating = all.rating;
			location = all.address.location;
			if (count >= 10) {
				count = 0;
				pageCount++;
			}
			count ++;
			$('#restaurant-container').find('#page-'+pageCount).append('<div class="flip-container col-md-5 restaurants-2">' +
													'<div class="flipper">' +
														'<div class="front restaurants-2-image all-star-'+ rating +'"">' +
															'<img src="img/restaurants/'+ pic +'.jpg">' +
														'</div>' +
														'<div class="back">' +
															'<div class="map-embed">' +
																'<iframe width="100%" height="100%" frameborder="0" style="border:0;"' +
																'src=' + urlMap + location.lat + ',' + location.lng + ' allowfullscreen>' +
																'</iframe>' +
															'</div>'+
															'<div class="description">' +
																'<h4>' + all.name + '</h4>' +
																'<div class="address">' +
																	'<p>' + all.address.street + 
																 	', '  + all.address.city + 
																 	', '  +	all.address.state + '</p>' +
																'</div>'+
																'<div class="contact">' +
																	'<p> Tel.: ' + all.contact.phone + '</p>' +
																	'<p> Email: ' + all.contact.email + '</p>' +
																	'<p>Sitio web: <a>' + all.contact.site + '</a></p>' +
																'</div>'+
															'</div>'+ 
														'</div>' +
													'</div>');
		})
	}

	function loadMap(melpData) {
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 15,
			scrollwheel: false,
			center: { lat: 19.437951, lng: -99.127885 }
		});

		melpData.forEach(function (melp) {
			var location = { lat: melp.address.location.lat, lng: melp.address.location.lng };
			var name = melp.name;
			addMarker(location, name, map);
		})

		// Adds a marker to the map.
		var marker;

		function addMarker(location, name, map) {
			// Add an infoWindow for each restaurant
			var contentString = '<h6>' + name + '</h6>';

			var infowindow = new google.maps.InfoWindow({
				content: contentString
			});

			// Add the markers asigned to each restaurant
			marker = new google.maps.Marker({
				position: location,
				infowindow: infowindow,
				map: map
			});

			google.maps.event.addListener(marker, 'click', function() {
				this.infowindow.open(map, this);

			});
		}
	}	
}