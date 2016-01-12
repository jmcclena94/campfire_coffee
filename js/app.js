// Script for Campfire Coffee business analytics

var lbsPerCup = 0.05;
var hoursString = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12 noon','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'];

function shopLocData(location,minCustomers,maxCustomers,cupsPer,poundsPer) {
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.cupsPer = cupsPer;
  this.poundsPer = poundsPer;

  var customers = [];
  var cups = [];
  var cupLbs = [];
  var rawLbs = [];
  var totLbs = [];
  for (i = 0; i < hoursString.length; i++) {
    var randomCustomers = Math.floor(Math.random() * (maxCustomers - minCustomers)) + minCustomers;
    var tempCups = randomCustomers * cupsPer;
    var tempCupLbs = tempCups * lbsPerCup;
    var tempRawLbs = randomCustomers * poundsPer;
    var tempTotLbs = tempCupLbs + tempRawLbs;
    customers[i] = randomCustomers;
    cups[i] = tempCups.toFixed(1);
    cupLbs[i] = tempCupLbs.toFixed(1);
    rawLbs[i] = tempRawLbs.toFixed(1);
    totLbs[i] = tempTotLbs.toFixed(1);
  }
  this.customers = customers;
  this.cups = cups;
  this.cupLbs = cupLbs;
  this.rawLbs = rawLbs;
  this.totLbs = totLbs;
}

var pikePlaceMarket = new shopLocData('Pike Place Market',14,55,1.2,3.7);
var capitolHill = new shopLocData('Capitol Hill',32,48,3.2,0.4);
var seattlePublicLibrary = new shopLocData('Seattle Public Library',49,75,2.6,0.2);
var southLakeUnion = new shopLocData('South Lake Union',35,88,1.3,3.7);
var seaTacAirport = new shopLocData('SeaTac Airport',68,124,1.1,2.7);
var websiteSales = new shopLocData('Website Sales',3,6,0,6.7);

function appendData(location) {
  var paragraphEl = document.createElement('p');
  var parId = 'parId';
  paragraphEl.textContent = location.location;
  document.body.appendChild(paragraphEl);

  var unorderedListEl = document.createElement('ul');
  var ulId = location.location + 'ulId';
  unorderedListEl.id = ulId;
  document.body.appendChild(unorderedListEl);

  for (i = 0; i < hoursString.length; i++) {

    var listEl = document.createElement('li');
    listEl.textContent = hoursString[i] + ': ' + location.totLbs[i] + ' lbs [' + location.customers[i] + ' customers, ' + location.cups[i] + ' cups (' + location.cupLbs[i] + ' lbs), ' + location.rawLbs[i] + ' lbs to-go]';
    document.getElementById(ulId).appendChild(listEl);

  }
}

appendData(pikePlaceMarket);
appendData(capitolHill);
appendData(seattlePublicLibrary);
appendData(southLakeUnion);
appendData(seaTacAirport);
appendData(websiteSales);
