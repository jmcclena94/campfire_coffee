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

var formEl = document.createElement('form');
document.body.appendChild(formEl);

var fieldsetEl = document.createElement('fieldset');
formEl.appendChild(fieldsetEl);

var legendEl = document.createElement('legend');
legendEl.textContent = 'Add a new location';
fieldsetEl.appendChild(legendEl);

var formParagraph1El = document.createElement('label');
formParagraph1El.textContent = 'Location';
fieldsetEl.appendChild(formParagraph1El);

var formInput1El = document.createElement('input');
formInput1El.type = 'text';
formInput1El.name = 'newInputLocation';
formInput1El.size = 15;
formInput1El.maxLength = 30;
formInput1El.id = 'formLocation';
formParagraph1El.appendChild(formInput1El);

var dummyParagraph1El = document.createElement('p');
dummyParagraph1El.id = 'result1';
fieldsetEl.appendChild(dummyParagraph1El);

var formParagraph2El = document.createElement('label');
formParagraph2El.textContent = 'Minimum customers';
fieldsetEl.appendChild(formParagraph2El);

var formInput2El = document.createElement('input');
formInput2El.type = 'text';
formInput2El.name = 'minimum customers';
formInput2El.size = 15;
formInput2El.maxLength = 30;
formInput2El.id = 'minimumCustomers';
formParagraph2El.appendChild(formInput2El);

var dummyParagraph2El = document.createElement('p');
dummyParagraph2El.id = 'result2';
fieldsetEl.appendChild(dummyParagraph2El);

var formParagraph3El = document.createElement('label');
formParagraph3El.textContent = 'Maximum customers';
fieldsetEl.appendChild(formParagraph3El);

var formInput3El = document.createElement('input');
formInput3El.type = 'text';
formInput3El.name = 'maximum customers';
formInput3El.size = 15;
formInput3El.maxLength = 30;
formInput3El.id = 'maximumCustomers';
formParagraph3El.appendChild(formInput3El);

var dummyParagraph3El = document.createElement('p');
dummyParagraph3El.id = 'result3';
fieldsetEl.appendChild(dummyParagraph3El);

var formParagraph4El = document.createElement('label');
formParagraph4El.textContent = 'Cups per customer';
fieldsetEl.appendChild(formParagraph4El);

var formInput4El = document.createElement('input');
formInput4El.type = 'text';
formInput4El.name = 'cups per customer';
formInput4El.size = 15;
formInput4El.maxLength = 30;
formInput4El.id = 'cupsPerCustomer';
formParagraph4El.appendChild(formInput4El);

var dummyParagraph4El = document.createElement('p');
dummyParagraph4El.id = 'result4';
fieldsetEl.appendChild(dummyParagraph4El);

var formParagraph5El = document.createElement('label');
formParagraph5El.textContent = 'Pounds per customer';
fieldsetEl.appendChild(formParagraph5El);

var formInput5El = document.createElement('input');
formInput5El.type = 'text';
formInput5El.name = 'pounds per customer';
formInput5El.size = 15;
formInput5El.maxLength = 30;
formInput5El.id = 'lbsPerCustomer';
formParagraph5El.appendChild(formInput5El);

var dummyParagraph5El = document.createElement('p');
dummyParagraph5El.id = 'result5';
fieldsetEl.appendChild(dummyParagraph5El);

var formSubmitEl = document.createElement('button');
formSubmitEl.textContent = 'Submit';
formSubmitEl.id = 'button';
formSubmitEl.type = 'button';
fieldsetEl.appendChild(formSubmitEl);

function getLoc() {
  var locField = formParagraph1El.value;
  // var result = document.dummyParagraphEl;
}

// var subButton = document.formSubmitEl;
formSubmitEl.addEventListener('click', getLoc(), false);
// var formSubmitEl = document.createElement('input');
// formSubmitEl.type = 'button';
// formSubmitEl.name = 'location data';
// formSubmitEl.value = 'click';
// formEl.appendChild(formSubmitEl);

// function inputLoc() {
//   var inputLocation = formInput1El.value;
//   alert ('You typed: ' + inputLocation);
// }
//
// formInput1El.addEventListener('onClick',inputLoc,true);
