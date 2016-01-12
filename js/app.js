// Script for Campfire Coffee business analytics
'use strict';
/* jshint -W117 */
/* jshint -W040 */
/* jshint -W097 */

var lbsPerCup = 0.05;
var hoursString = ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','8 pm'];

function shopLocData(location,minCustomers,maxCustomers,cupsPer,poundsPer) {
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.cupsPer = cupsPer;
  this.poundsPer = poundsPer;

  this.customers = [];
  this.cups = [];
  this.cupLbs = [];
  this.rawLbs = [];
  this.totLbs = [];
  this.calculator = function () {
    for (var i = 0; i < hoursString.length; i++) {
      var randomCustomers = Math.floor(Math.random() * (maxCustomers - minCustomers) + 1) + minCustomers;
      var tempCups = randomCustomers * cupsPer;
      var tempCupLbs = tempCups * lbsPerCup;
      var tempRawLbs = randomCustomers * poundsPer;
      var tempTotLbs = tempCupLbs + tempRawLbs;
      this.customers[i] = randomCustomers;
      this.cups[i] = tempCups.toFixed(1);
      this.cupLbs[i] = tempCupLbs.toFixed(1);
      this.rawLbs[i] = tempRawLbs.toFixed(1);
      this.totLbs[i] = tempTotLbs.toFixed(1);
    }
  };
  this.calculator();
}

var pikePlaceMarket = new shopLocData('Pike Place Market',14,55,1.2,3.7);
var capitolHill = new shopLocData('Capitol Hill',32,48,3.2,0.4);
var seattlePublicLibrary = new shopLocData('Seattle Public Library',49,75,2.6,0.2);
var southLakeUnion = new shopLocData('South Lake Union',35,88,1.3,3.7);
var seaTacAirport = new shopLocData('SeaTac Airport',68,124,1.1,2.7);
var websiteSales = new shopLocData('Website Sales',3,6,0,6.7);

var tableEl = document.createElement('table');
var tabId = 'tableId';
tableEl.id = tabId;
document.body.appendChild(tableEl);

var theadEl = document.createElement('thead');
var theadId = 'theadId';
theadEl.id = theadId;
document.getElementById(tabId).appendChild(theadEl);

var trTopEl = document.createElement('tr');
var trTopId = 'trTopId';
trTopEl.id = trTopId;
document.getElementById(theadId).appendChild(trTopId);

var tdTopEl = document.createElement('td');
var tdTopId

var trEl = document.createElement('tr');
var trId = 'trId';
trEl.id = trId;
document.getElementById(theadId).appendChild(trEl);

var th1El = document.createElement('th');
var th1Id = 'th1Id';
th1El.id = th1Id;
th1El.textContent = 'Location';
document.getElementById(trId).appendChild(th1El);

function initTable(hoursString) {
  for (var i = 0; i < hoursString.length; i++) {
    var iEl = document.createElement('th');
    var iId = 'th2Id' + hoursString[i];
    iEl.id = iId;
    iEl.textContent = hoursString[i];
    document.getElementById(trId).appendChild(iEl);
  }
}
initTable(hoursString);

function tablePopulate(location) {
  var rowEl = document.createElement('tr');
  var rowId = 'rowId' + location.location;
  rowEl.id = rowId;
  document.getElementById(tabId).appendChild(rowEl);

  var nameEl = document.createElement('td');
  var nameId = 'nameId' + location.location;
  nameEl.id = nameId;
  nameEl.textContent = location.location;
  document.getElementById(rowId).appendChild(nameEl);

  for (var i = 0; i < hoursString.length; i++) {
    var tdEl = document.createElement('td');
    var tdId = 'tdId' + hoursString[i];
    tdEl.id = tdId;
    tdEl.textContent = location.totLbs[i];
    document.getElementById(rowId).appendChild(tdEl);
  }
}

tablePopulate(pikePlaceMarket);
tablePopulate(capitolHill);
tablePopulate(seattlePublicLibrary);
tablePopulate(southLakeUnion);
tablePopulate(seaTacAirport);
tablePopulate(websiteSales);

// function tableData(location) {
//   var tableEl = document.createElement('table');
//   var tabId = 'tableId' + location.location;
//   tableEl.id = tabId;
//   document.body.appendChild(tableEl);
//
//   var theadEl = document.createElement('thead');
//   var theadId = 'theadId' + location.location;
//   theadEl.id = theadId;
//   document.getElementById(tabId).appendChild(theadEl);
//
//   var trEl = document.createElement('tr');
//   var trId = 'trId' + location.location;
//   trEl.id = trId;
//   document.getElementById(theadId).appendChild(trEl);
//
//   var th1El = document.createElement('th');
//   var th1Id = 'th1Id' + location.location;
//   th1El.id = th1Id;
//   th1El.textContent = 'Location';
//   document.getElementById(trId).appendChild(th1El);
//
//   var th2El = document.createElement('th');
//   var th2Id = 'th2Id' + location.location;
//   th2El.id = th2Id;
//   th2El.textContent = 'Hours';
//   document.getElementById(trId).appendChild(th2El);
//
//   var th3El = document.createElement('th');
//   var th3Id = 'th3Id' + location.location;
//   th3El.id = th3Id;
//   th3El.textContent = 'Total Pounds(lbs)';
//   document.getElementById(trId).appendChild(th3El);
//
//   for (var i = 0; i < hoursString.length; i++) {
//     var tempTrEl = document.createElement('tr');
//     var tempTrId = 'tempTrId_' + i + '_' + location.location;
//     tempTrEl.id = tempTrId;
//     document.getElementById(tabId).appendChild(tempTrEl);
//
//     if (i === 0) {
//       var tempTdEl1 = document.createElement('td');
//       tempTdEl1.textContent = location.location;
//       tempTdEl1.rowSpan = '15';
//       document.getElementById(tempTrId).appendChild(tempTdEl1);
//     }
//
//     var tempTdEl2 = document.createElement('td');
//     tempTdEl2.textContent = hoursString[i];
//     document.getElementById(tempTrId).appendChild(tempTdEl2);
//
//     var tempTdEl3 = document.createElement('td');
//     tempTdEl3.textContent = location.totLbs[i];
//     document.getElementById(tempTrId).appendChild(tempTdEl3);
//
//   }
// }
//
// tableData(pikePlaceMarket);
// tableData(capitolHill);
// tableData(seattlePublicLibrary);
// tableData(southLakeUnion);
// tableData(seaTacAirport);
// tableData(websiteSales);
