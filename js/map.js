if( document.getElementsByClassName("map_wrapp")[0] ) {

	var map;
	var marker;
	var image = "img/map_marker.png";
	var styles;

	function initMap() {

		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 55.861083, lng: 37.535082},
			scrollwheel: false,
			scaleControl: false,
			zoom: 14
		});

		marker = new google.maps.Marker({
			map: map,
			draggable: false,
			animation: google.maps.Animation.DROP,
			position: {lat: 55.858883, lng: 37.562282},
			map: map,
			icon: image,
			title: 'Интернет маркетинг'
		});

		marker.addListener('click', toggleBounce);

	}

	function toggleBounce() {
	  if (marker.getAnimation() !== null) {
	    marker.setAnimation(null);
	  } else {
	    marker.setAnimation(google.maps.Animation.BOUNCE);
	  }
	}

}



