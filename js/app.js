// Script for Campfire Coffee business analytics

function shopLocData(location,minCustomers,maxCustomers,cupsPer,poundsPer) {
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.cupsPer = cupsPer;
  this.poundsPer = poundsPer;
}

var pikePlaceMarket = new shopLocData('Pike Place Market',14,55,1.2,3.7);
var capitolHill = new shopLocData('Capitol Hill',32,48,3.2,0.4);
var seattlePublicLibrary = new shopLocData('Seattle Public Library',49,75,2.6,0.2);
var southLakeUnion = new shopLocData('South Lake Union',35,88,1.3,3.7);
var seaTacAirport = new shopLocData('SeaTac Airport',68,124,1.1,2.7);
var websiteSales = new shopLocData('Website Sales',3,6,0,6.7);

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
