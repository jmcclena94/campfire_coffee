// Script for Campfire Coffee business analytics
'use strict';
/* jshint -W117 */
/* jshint -W040 */
/* jshint -W097 */

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
  var tempCupLbsTotal = 0;
  var tempRawLbsTotal = 0;
  var tempDayLbsTotal = 0;
  this.calculator = function () {
    for (var i = 0; i < hoursString.length; i++) {
      var lbsPerCup = 0.05;
      var randomCustomers = Math.floor(Math.random() * (maxCustomers - minCustomers) + 1) + minCustomers;
      var tempCups = randomCustomers * cupsPer;
      var tempCupLbs = tempCups * lbsPerCup;
      var tempRawLbs = randomCustomers * poundsPer;
      var tempTotLbs = tempCupLbs + tempRawLbs;
      tempCupLbsTotal = tempCupLbsTotal + tempCupLbs;
      tempRawLbsTotal = tempRawLbsTotal + tempRawLbs;
      tempDayLbsTotal = tempDayLbsTotal + tempTotLbs;
      this.customers[i] = randomCustomers;
      this.cups[i] = tempCups.toFixed(1);
      this.cupLbs[i] = tempCupLbs.toFixed(1);
      this.rawLbs[i] = tempRawLbs.toFixed(1);
      this.totLbs[i] = tempTotLbs.toFixed(1);
    }
    this.cupLbsTotal = tempCupLbsTotal.toFixed(1);
    this.rawLbsTotal = tempRawLbsTotal.toFixed(1);
    this.dayLbsTotal = tempDayLbsTotal.toFixed(1);
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
document.body.appendChild(tableEl);

var theadEl = document.createElement('thead');
tableEl.appendChild(theadEl);

var trTopEl = document.createElement('tr');
theadEl.appendChild(trTopEl);

var td1TopEl = document.createElement('th');
trTopEl.appendChild(td1TopEl);

var emptyEl1 = document.createElement('th');
trTopEl.appendChild(emptyEl1);

var td2TopEl = document.createElement('th');
td2TopEl.textContent = 'Coffee Pounds Required per Location per Hour (lbs)';
td2TopEl.colSpan = 15;
trTopEl.appendChild(td2TopEl);

var trEl = document.createElement('tr');
theadEl.appendChild(trEl);

var th1El = document.createElement('th');
th1El.textContent = 'Location';
trEl.appendChild(th1El);

var emptyEl2 = document.createElement('th');
trEl.appendChild(emptyEl2);

function initTable(hoursString) {
  for (var i = 0; i < hoursString.length; i++) {
    var iEl = document.createElement('th');
    iEl.textContent = hoursString[i];
    trEl.appendChild(iEl);
  }
}
initTable(hoursString);

var totColEl = document.createElement('th');
totColEl.textContent = 'Total (lbs)';
trEl.appendChild(totColEl);

function tablePopulate(location) {
  var rowEl = document.createElement('tr');
  tableEl.appendChild(rowEl);

  var nameEl = document.createElement('th');
  nameEl.textContent = location.location;
  nameEl.rowSpan = 3;
  rowEl.appendChild(nameEl);

  var hourlyTotEl = document.createElement('th');
  hourlyTotEl.textContent = 'Total lbs';
  rowEl.appendChild(hourlyTotEl);

  var cupsRowEl = document.createElement('tr');
  tableEl.appendChild(cupsRowEl);

  var hourlyCupTotEl = document.createElement('th');
  hourlyCupTotEl.textContent = 'Cup lbs';
  cupsRowEl.appendChild(hourlyCupTotEl);

  var rawRowEl = document.createElement('tr');
  tableEl.appendChild(rawRowEl);

  var hourlyRawTotEl = document.createElement('th');
  hourlyRawTotEl.textContent = 'To-Go lbs';
  rawRowEl.appendChild(hourlyRawTotEl);

  for (var i = 0; i < hoursString.length; i++) {

    var tdEl = document.createElement('td');
    tdEl.textContent = location.totLbs[i];
    rowEl.appendChild(tdEl);

    var cupsTdEl = document.createElement('td');
    cupsTdEl.textContent = location.cupLbs[i];
    cupsRowEl.appendChild(cupsTdEl);

    var rawTdEl = document.createElement('td');
    rawTdEl.textContent = location.rawLbs[i];
    rawRowEl.appendChild(rawTdEl);
  }
  var totLbsEl = document.createElement('th');
  totLbsEl.textContent = location.dayLbsTotal;
  rowEl.appendChild(totLbsEl);

  var cupLbsEl = document.createElement('th');
  cupLbsEl.textContent = location.cupLbsTotal;
  cupsRowEl.appendChild(cupLbsEl);

  var rawLbsEl = document.createElement('th');
  rawLbsEl.textContent = location.rawLbsTotal;
  rawRowEl.appendChild(rawLbsEl);

  var rowBreakEl = document.createElement('tr');
  tableEl.appendChild(rowBreakEl);

  var dataBreakEl = document.createElement('td');
  dataBreakEl.colSpan = 17;
  rowBreakEl.appendChild(dataBreakEl);
}

tablePopulate(pikePlaceMarket);
tablePopulate(capitolHill);
tablePopulate(seattlePublicLibrary);
tablePopulate(southLakeUnion);
tablePopulate(seaTacAirport);
tablePopulate(websiteSales);

// FORM SECTION
var newFormEntry = document.getElementById('newFormLoc');

function locData(event) {
  event.preventDefault();
  if (!event.target.locFor.value || !event.target.minFor.value || !event.target.maxFor.value || !event.target.cupsFor.value || !event.target.lbsFor.value) {
    return alert('Fields cannot be empty');
  }

  var newLocData = document.getElementById('formLocation').value;
  var newMinCust = parseInt(document.getElementById('minimumCustomers').value);
  var newMaxCust = parseInt(document.getElementById('maximumCustomers').value);
  var newCupsPer = parseFloat(document.getElementById('cupsPerCustomer').value);
  var newToGoPer = parseFloat(document.getElementById('lbsPerCustomer').value);

  if (newLocData)

  var newLocation = new shopLocData(newLocData,newMinCust,newMaxCust,newCupsPer,newToGoPer);

  tablePopulate(newLocation);
  document.getElementById('newFormLoc').reset();
}

newFormEntry.addEventListener('submit', locData)
