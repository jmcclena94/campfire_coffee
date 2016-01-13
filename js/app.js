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
  this.calculator = function () {
    for (var i = 0; i < hoursString.length; i++) {
      var lbsPerCup = 0.05;
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
document.body.appendChild(tableEl);

var theadEl = document.createElement('thead');
tableEl.appendChild(theadEl);

var trTopEl = document.createElement('tr');
theadEl.appendChild(trTopEl);

var td1TopEl = document.createElement('td');
trTopEl.appendChild(td1TopEl);

var td2TopEl = document.createElement('td');
td2TopEl.textContent = 'Coffee Pounds Required per Location per Hour (lbs)';
td2TopEl.colSpan = 15;
trTopEl.appendChild(td2TopEl);

var trEl = document.createElement('tr');
theadEl.appendChild(trEl);

var th1El = document.createElement('th');
th1El.textContent = 'Location';
trEl.appendChild(th1El);

function initTable(hoursString) {
  for (var i = 0; i < hoursString.length; i++) {
    var iEl = document.createElement('th');
    iEl.textContent = hoursString[i];
    trEl.appendChild(iEl);
  }
}
initTable(hoursString);

function tablePopulate(location) {
  var rowEl = document.createElement('tr');
  tableEl.appendChild(rowEl);

  var nameEl = document.createElement('td');
  nameEl.textContent = location.location;
  rowEl.appendChild(nameEl);

  for (var i = 0; i < hoursString.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = location.totLbs[i];
    rowEl.appendChild(tdEl);
  }
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

var formParagraph1El = document.createElement('label');
formParagraph1El.textContent = 'Location';
formEl.appendChild(formParagraph1El);

var formInput1El = document.createElement('input');
formInput1El.type = 'text';
formInput1El.name = 'newInputLocation';
formInput1El.size = 15;
formInput1El.maxLength = 30;
formInput1El.id = 'formLocation';
formParagraph1El.appendChild(formInput1El);

var dummyParagraphEl = document.createElement('p');
dummyParagraphEl.id = 'result';
formEl.appendChild(dummyParagraphEl);

var formParagraph2El = document.createElement('label');
formParagraph2El.textContent = 'Minimum customers';
formEl.appendChild(formParagraph2El);

var formInput2El = document.createElement('input');
formInput2El.type = 'text';
formInput2El.name = 'minimum customers';
formInput2El.size = 15;
formInput2El.maxLength = 30;
formInput2El.id = 'minimumCustomers';
formParagraph2El.appendChild(formInput2El);

var formParagraph3El = document.createElement('label');
formParagraph3El.textContent = 'Maximum customers';
formEl.appendChild(formParagraph3El);

var formInput3El = document.createElement('input');
formInput3El.type = 'text';
formInput3El.name = 'maximum customers';
formInput3El.size = 15;
formInput3El.maxLength = 30;
formInput3El.id = 'maximumCustomers';
formParagraph3El.appendChild(formInput3El);

var formParagraph4El = document.createElement('label');
formParagraph4El.textContent = 'Cups per customer';
formEl.appendChild(formParagraph4El);

var formInput4El = document.createElement('input');
formInput4El.type = 'text';
formInput4El.name = 'cups per customer';
formInput4El.size = 15;
formInput4El.maxLength = 30;
formInput4El.id = 'cupsPerCustomer';
formParagraph4El.appendChild(formInput4El);

var formParagraph5El = document.createElement('label');
formParagraph5El.textContent = 'Pounds per customer';
formEl.appendChild(formParagraph5El);

var formInput5El = document.createElement('input');
formInput5El.type = 'text';
formInput5El.name = 'pounds per customer';
formInput5El.size = 15;
formInput5El.maxLength = 30;
formInput5El.id = 'lbsPerCustomer';
formParagraph5El.appendChild(formInput5El);

var formSubmitEl = document.createElement('button');
formSubmitEl.textContent = 'Submit';
formSubmitEl.id = 'button';
formSubmitEl.type = 'button';
formEl.appendChild(formSubmitEl);

// function getLoc() {
//   var locField = document.formParagraph1El.value;
//   var result = document.dummyParagraphEl;
// }

// var subButton = document.formSubmitEl;
// formSubmitEl.addEventListener('onClick', getLoc(), false);
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
