// Script for Campfire Coffee business analytics

var lbsPerCup = 0.05;
var hours = [06,07,08,09,10,11,12,13,14,15,16,17,18,19,20];
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
  for (i = 0; i < hours.length; i++) {
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
  paragraphEl.textContent = pikePlaceMarket.location;
  document.body.appendChild(paragraphEl);
  for (i = 0; i < hours.length; i++) {
    if (hours[i] < 12) {

      var unorderedListEl = document.createElement('ul');
      var tempId = 'ul' + hours[i];
      unorderedListEl.id = tempId;
      document.body.appendChild(unorderedListEl);

      var listEl = document.createElement('li');
      listEl.textContent = hoursString[i] + ': ' + location.totLbs[i] + ' [' + location.customers[i] + ' customers, ' + location.cups[i] + ' cups (' + location.cupLbs[i] + ' lbs), ' + location.rawLbs[i] + ' lbs to-go]';
      document.getElementById(tempId).appendChild(listEl);

    } else if (hours[i] == 12) {
      var unorderedListEl = document.createElement('ul');
      var tempId = 'ul' + hours[i];
      unorderedListEl.id = tempId;
      document.body.appendChild(unorderedListEl);

      var listEl = document.createElement('li');
      listEl.textContent = hoursString[i] + ': ' + location.totLbs[i] + ' [' + location.customers[i] + ' customers, ' + location.cups[i] + ' cups (' + location.cupLbs[i] + ' lbs), ' + location.rawLbs[i] + ' lbs to-go]';
      document.getElementById(tempId).appendChild(listEl);

    } else {

      var unorderedListEl = document.createElement('ul');
      var tempId = 'ul' + hours[i];
      unorderedListEl.id = tempId;
      document.body.appendChild(unorderedListEl);

      var listEl = document.createElement('li');
      listEl.textContent = hoursString[i] + ': ' + location.totLbs[i] + ' [' + location.customers[i] + ' customers, ' + location.cups[i] + ' cups (' + location.cupLbs[i] + ' lbs), ' + location.rawLbs[i] + ' lbs to-go]';
      document.getElementById(tempId).appendChild(listEl);

    }
  }
}

appendData(pikePlaceMarket);
appendData(capitolHill);
appendData(seattlePublicLibrary);
appendData(southLakeUnion);
appendData(seaTacAirport);
appendData(websiteSales);

// var pikePlaceEl = document.createElement('p');
// pikePlaceEl.textContent = pikePlaceMarket.location;
// document.body.appendChild(pikePlaceEl);
//
// var pikePlaceUl = document.createElement('ul');
// pikePlaceUl.id = 'PikePlaceUl';
// document.body.appendChild(pikePlaceUl);
//
// var pikePlaceLi = document.createElement('li');
// pikePlaceLi.textContent = 'abcde';
// document.getElementById('PikePlaceUl').appendChild(pikePlaceLi);

// var pikePlaceMarket = {
//   location: 'Pike Place Market',
//   minCustomers: 14,
//   maxCustomers: 55,
//   cupsPer: 1.2,
//   poundsPer: 3.7,
// };
//
// var paragraphEl = document.createElement('p');
// paragraphEl.textContent = pikePlaceMarket.location;
// document.body.appendChild(paragraphEl);
//
// var capitolHill = {
//   location: 'Capitol Hill',
//   minCustomers: 32,
//   maxCustomers: 48,
//   cupsPer: 3.2,
//   poundsPer: 0.4,
// };
//
// var seattlePublicLibrary = {
//   location: 'Seattle Public Library',
//   minCustomers: 49,
//   maxCustomers: 75,
//   cupsPer: 2.6,
//   poundsPer: 0.2,
// };
//
// var southLakeUnion = {
//   location: 'South Lake Union',
//   minCustomers: 35,
//   maxCustomers: 88,
//   cupsPer: 1.3,
//   poundsPer: 3.7,
// };
//
// var seaTacAirport = {
//   location: 'SeaTac Airport',
//   minCustomers: 68,
//   maxCustomers: 124,
//   cupsPer: 1.1,
//   poundsPer: 2.7,
// };
//
// var websiteSales = {
//   location: 'Website Sales',
//   minCustomers: 3,
//   maxCustomers: 6,
//   cupsPer: 0,
//   poundsPer: 6.7,
// };
