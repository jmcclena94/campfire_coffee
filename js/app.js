// Script for Campfire Coffee business analytics
'use strict';
/* jshint -W117 */
/* jshint -W040 */
/* jshint -W097 */

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
  for (var i = 0; i < hoursString.length; i++) {
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

function tableData(location) {
  var tableEl = document.createElement('table');
  var tabId = 'tableId' + location.location;
  tableEl.id = tabId;
  document.body.appendChild(tableEl);

  var theadEl = document.createElement('thead');
  var theadId = 'theadId' + location.location;
  theadEl.id = theadId;
  document.getElementById(tabId).appendChild(theadEl);

  var trEl = document.createElement('tr');
  var trId = 'trId' + location.location;
  trEl.id = trId;
  document.getElementById(theadId).appendChild(trEl);

  var th1El = document.createElement('th');
  var th1Id = 'th1Id' + location.location;
  th1El.id = th1Id;
  th1El.textContent = 'Location';
  document.getElementById(trId).appendChild(th1El);

  var th2El = document.createElement('th');
  var th2Id = 'th2Id' + location.location;
  th2El.id = th2Id;
  th2El.textContent = 'Hours';
  document.getElementById(trId).appendChild(th2El);

  var th3El = document.createElement('th');
  var th3Id = 'th3Id' + location.location;
  th3El.id = th3Id;
  th3El.textContent = 'Total Pounds(lbs)';
  document.getElementById(trId).appendChild(th2El);

  var th4El = document.createElement('th');
  var th4Id = 'th4Id' + location.location;
  th4El.id = th4Id;
  th4El.textContent = 'Customers';
  document.getElementById(trId).appendChild(th4El);

  var th5El = document.createElement('th');
  var th5Id = 'th5Id' + location.location;
  th5El.id = th5Id;
  th5El.textContent = 'Total Cups';
  document.getElementById(trId).appendChild(th5El);

  var th6El = document.createElement('th');
  var th6Id = 'th6Id' + location.location;
  th6El.id = th2Id;
  th6El.textContent = 'Cup Pounds (lbs)';
  document.getElementById(trId).appendChild(th6El);

  var th7El = document.createElement('th');
  var th7Id = 'th2Id' + location.location;
  th7El.id = th2Id;
  th7El.textContent = 'To-go Pounds (lbs)';
  document.getElementById(trId).appendChild(th7El);

  for (var i = 0; i < hoursString.length; i++) {
    var tempTrEl = document.createElement('tr');
    var tempTrId = 'tempTrId_' + i + '_' + location.location;
    tempTrEl.id = tempTrId;
    document.getElementById(tabId).appendChild(tempTrEl);

    var tempTdEl1 = document.createElement('td');
    tempTdEl1.textContent = location.location;
    tempTdEl1.rowspan = '15';
    document.getElementById(tempTrId).appendChild(tempTdEl1);

    var tempTdEl2 = document.createElement('td');
    tempTdEl2.textContent = hoursString[i];
    document.getElementById(tempTrId).appendChild(tempTdEl2);

    var tempTdEl3 = document.createElement('td');
    tempTdEl3.textContent = location.customers[i];
    document.getElementById(tempTrId).appendChild(tempTdEl3);

    var tempTdEl4 = document.createElement('td');
    tempTdEl4.textContent = location.cups[i];
    document.getElementById(tempTrId).appendChild(tempTdEl4);

    var tempTdEl5 = document.createElement('td');
    tempTdEl5.textContent = location.cupLbs[i];
    document.getElementById(tempTrId).appendChild(tempTdEl5);

    var tempTdEl6 = document.createElement('td');
    tempTdEl6.textContent = location.rawLbs[i];
    document.getElementById(tempTrId).appendChild(tempTdEl6);
  }
}

tableData(pikePlaceMarket);
tableData(capitolHill);
tableData(seattlePublicLibrary);
tableData(southLakeUnion);
tableData(seaTacAirport);
tableData(websiteSales);

// function appendData(location) {
//   var paragraphEl = document.createElement('p');
//   var parId = 'parId';
//   paragraphEl.textContent = location.location;
//   document.body.appendChild(paragraphEl);
//
//   var unorderedListEl = document.createElement('ul');
//   var ulId = location.location + 'ulId';
//   unorderedListEl.id = ulId;
//   document.body.appendChild(unorderedListEl);
//
//   for (var i = 0; i < hoursString.length; i++) {
//
//     var listEl = document.createElement('li');
//     listEl.textContent = hoursString[i] + ': ' + location.totLbs[i] + ' lbs [' + location.customers[i] + ' customers, ' + location.cups[i] + ' cups (' + location.cupLbs[i] + ' lbs), ' + location.rawLbs[i] + ' lbs to-go]';
//     document.getElementById(ulId).appendChild(listEl);
//
//   }
// }
//
// appendData(pikePlaceMarket);
// appendData(capitolHill);
// appendData(seattlePublicLibrary);
// appendData(southLakeUnion);
// appendData(seaTacAirport);
// appendData(websiteSales);
