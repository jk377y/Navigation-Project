
//! access token = pk.eyJ1IjoiamszNzd5IiwiYSI6ImNsY3NoNG0xZDBnMWQzb3BzdWhmZDlxYTQifQ.BMHBg9dkavXGI10wSUfWRQ
//! [-95.35, 29.74] Houston, Texas;  [-97.74, 37.93] Witchita, KS;

mapboxgl.accessToken = 'pk.eyJ1IjoiamszNzd5IiwiYSI6ImNsY3NoNG0xZDBnMWQzb3BzdWhmZDlxYTQifQ.BMHBg9dkavXGI10wSUfWRQ';
navigator.geolocation.getCurrentPosition( successLocation, errorLocation, {  // use geo location to get client physical location
    enableHighAccuracy: true
});
function successLocation(position){
    setUpMap([position.coords.longitude, position.coords.latitude])  // assuming client physical location is obtained, get coords
};
function errorLocation(){
    setUpMap([-99.35, 40.53])  //  if unable to get client location, map start defaults to Houston, Texas
};
function setUpMap(center){
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',  //  newest map layer
    center: ([-97.74, 37.93]),  // start up coords position to center of map
    zoom: 3.5  //  on start, zooms in to local street level
    });
    map.addControl(new mapboxgl.NavigationControl());  // adds control buttons for zoom in/out
    map.addControl(new MapboxDirections({accessToken: mapboxgl.accessToken}),'top-left');  //  adds navigation module
};