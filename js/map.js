function initialize() {
  var mapCanvas = document.getElementById('map');
  var mapOptions = {
    center: new google.maps.LatLng(47.548368, -122.329078),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var m1 = new google.maps.Marker({
    position: {lat: 47.609684, lng: -122.342611},
    map: map,
    title: 'Pike Place Market'
  });
  m1.setMap(map);
  var m2 = new google.maps.Marker({
    position: {lat: 47.619938, lng: -122.320876},
    map: map,
    title: 'Capitol Hill'
  });
  m2.setMap(map);
  var m3 = new google.maps.Marker({
    position: {lat: 47.606703, lng: -122.332508},
    map: map,
    title: 'Seattle Public Library'
  });
  m3.setMap(map);
  var m4 = new google.maps.Marker({
    position: {lat: 47.625623, lng: -122.334359},
    map: map,
    title: 'South Lake Union'
  });
  m4.setMap(map);
  var m5 = new google.maps.Marker({
    position: {lat: 47.450250, lng: -122.308806},
    map: map,
    title: 'SeaTac Airport'
  });
  m5.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);
