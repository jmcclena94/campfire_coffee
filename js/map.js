function initialize() {
  var mapCanvas = document.getElementById('map');
  var mapOptions = {
    center: new google.maps.LatLng(47.548368, -122.329078),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);

  var m1ContentString = '<div id="content">' + '<div id="siteNotice">' + '</div>' + '<h3 id="firstHeading" class="firstHeading">Pike Place Market</h3>' + '<div id="bodyContent">' + '<p>Hours: 6am - 8pm</p>' + '<p>Phone: 206-555-1111</p>' + '</div>'+'</div>';
  var m1InfoWindow = new google.maps.InfoWindow({
    content: m1ContentString
  });

  var m1 = new google.maps.Marker({
    position: {lat: 47.609684, lng: -122.342611},
    map: map,
    title: 'Pike Place Market'
  });
  m1.setMap(map);
  m1.addListener('click',function() {
    m1InfoWindow.open(map,m1)
  });

  var m2ContentString = '<div id="content">' + '<div id="siteNotice">' + '</div>' + '<h3 id="firstHeading" class="firstHeading">Capitol Hill</h3>' + '<div id="bodyContent">' + '<p>Hours: 6am - 8pm</p>' + '<p>Phone: 206-555-2222</p>' + '</div>'+'</div>';
  var m2InfoWindow = new google.maps.InfoWindow({
    content: m2ContentString
  });

  var m2 = new google.maps.Marker({
    position: {lat: 47.619938, lng: -122.320876},
    map: map,
    title: 'Capitol Hill'
  });
  m2.setMap(map);
  m2.addListener('click',function() {
    m2InfoWindow.open(map,m2)
  });

  var m3ContentString = '<div id="content">' + '<div id="siteNotice">' + '</div>' + '<h3 id="firstHeading" class="firstHeading">Seattle Public Library</h3>' + '<div id="bodyContent">' + '<p>Hours: 6am - 8pm</p>' + '<p>Phone: 206-555-3333</p>' + '</div>'+'</div>';
  var m3InfoWindow = new google.maps.InfoWindow({
    content: m3ContentString
  });

  var m3 = new google.maps.Marker({
    position: {lat: 47.606703, lng: -122.332508},
    map: map,
    title: 'Seattle Public Library'
  });
  m3.setMap(map);
  m3.addListener('click',function() {
    m3InfoWindow.open(map,m3)
  });

  var m4ContentString = '<div id="content">' + '<div id="siteNotice">' + '</div>' + '<h3 id="firstHeading" class="firstHeading">South Lake Union</h3>' + '<div id="bodyContent">' + '<p>Hours: 6am - 8pm</p>' + '<p>Phone: 206-555-4444</p>' + '</div>'+'</div>';
  var m4InfoWindow = new google.maps.InfoWindow({
    content: m4ContentString
  });

  var m4 = new google.maps.Marker({
    position: {lat: 47.625623, lng: -122.334359},
    map: map,
    title: 'South Lake Union'
  });
  m4.setMap(map);
  m4.addListener('click',function() {
    m4InfoWindow.open(map,m4)
  });

  var m5ContentString = '<div id="content">' + '<div id="siteNotice">' + '</div>' + '<h3 id="firstHeading" class="firstHeading">SeaTac Airport</h3>' + '<div id="bodyContent">' + '<p>Hours: 6am - 8pm</p>' + '<p>Phone: 206-555-5555</p>' + '</div>'+'</div>';
  var m5InfoWindow = new google.maps.InfoWindow({
    content: m5ContentString
  });

  var m5 = new google.maps.Marker({
    position: {lat: 47.450250, lng: -122.308806},
    map: map,
    title: 'SeaTac Airport'
  });
  m5.setMap(map);
  m5.addListener('click',function() {
    m5InfoWindow.open(map,m5)
  });

}
google.maps.event.addDomListener(window, 'load', initialize);
