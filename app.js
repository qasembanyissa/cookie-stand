<<<<<<< HEAD
var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
var shops = [];
var tbl;

function CookieShop(name, minCustomer, maxCustomer, avgCustomer) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCustomer = avgCustomer;
  this.id = name.replace(' ', '').toLowerCase();
  this.hourlyCookies = [];
  this.dailyCookies = 0;
  shops.push(this);
=======
'use strict';
var hourForDay = ['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','13 PM','14 PM','15 PM','16 PM','17 PM','18 PM','19 PM','20 PM'];
function Restaurants (name,max,min,avg){
    this.name=name;
    this.max=max;
    this.min=min;
    this.avg=avg;
    this.total=[];
    this.numOfCx=[];
    this.numOfCookies=[];
}

Restaurants.prototype.cxCookie =function (){
    for(var i=0 ; i < hourForDay.length ; i++){

        this.numOfCookies[i]=Math.floor(Math.random()*(this.max-this.min)+this.min*this.avg);
        // var randcx = Math.floor(Math.random() * (this.max -this.min) + this.min);
        // console.log(randcx)
        // numOfCx.push(randcx)
        // numOfCookies[i] = Math.floor(numOfCx[i]*this.avg);
        // total=total+numOfCookies[i]; 
    }
    // console.log(numOfCookies);
    
}
// Restaurants.prototype.render = function(){
//     var elE1=document.getElementById('bodyId');
//     var art1=document.createElement('article');
//     elE1.appendChild(art1);
//     var par1= document.createElement('p');
//     art1.appendChild(par1);
//     par1.textContent= this.name;
//     var ulE1=document.createElement('ul');
//     par1.appendChild(ulE1);
//     for(var i=0; i<hourForDay.length;i++){
//         var liE1=document.createElement('li');
//         ulE1.appendChild(liE1);
//         liE1.textContent=`${hourForDay[i]} : number of cookie : ${this.numOfCookies[i]}  `;
        
//     }
//     liE1.textContent=`Total is : ${this.total}`;
    
// }
// var seattle = new Restaurants('seattle','65','23','6.3');
// seattle.cxCookie();
// seattle.render();
// total=0;
// var Tokyo = new Restaurants('Tokyo','24','3','1.3');
// Tokyo.cxCookie();
// Tokyo.render();
// total=0;
// var Dubai = new Restaurants('Dubai','38','11','3.7');
// Dubai.cxCookie();
// Dubai.render();
// total=0;
// var Paris = new Restaurants('Paris','38','20','2.3');
// Paris.cxCookie();
// Paris.render();
// total=0;
// var Lima = new Restaurants('Lima','16','2','4.6');
// Lima.cxCookie();
// Lima.render();
>>>>>>> 7e039f0166942d6f130475da629d832a7b08d886

  this.generateHourly();
  renderStore(tbl, this) ;
}

CookieShop.prototype.generateRandom = function(min, max) {
  return Math.random() * (max - min) + min;
};

<<<<<<< HEAD
CookieShop.prototype.generateHourly = function() {
  for (var i = 0; i < hours.length; i++) {
    var cookie = Math.floor(this.avgCustomer * this.generateRandom(this.minCustomer, this.maxCustomer));
    this.hourlyCookies.push(cookie);
    this.dailyCookies += cookie;
  }
};

(function renderTable() {
  tbl = document.createElement('table');
  tbl.id = 'table';
  var trEl_one = document.createElement('tr');
  var thEl_one = document.createElement('th');
  thEl_one.textContent = '';
  trEl_one.appendChild(thEl_one);

  for (var i = 0; i < hours.length; i++) {
    var thEl_two = document.createElement('th');
    thEl_two.textContent = hours[i];
    trEl_one.appendChild(thEl_two);
  }

  var thEl_three = document.createElement('th');
  thEl_three.textContent = 'Totals';
  trEl_one.appendChild(thEl_three);

  tbl.appendChild(trEl_one);

  document.getElementById('store_data').appendChild(tbl);
})();

function renderStore(tbl, store) {
  var trEl_two = document.createElement('tr');
  var thEl_four = document.createElement('th');
  thEl_four.textContent = store.name;
  trEl_two.id = store.id;
  trEl_two.appendChild(thEl_four);

  for (var j = 0; j < hours.length; j++) {
    var tdEl_one = document.createElement('td');
    tdEl_one.textContent = store.hourlyCookies[j];
    trEl_two.appendChild(tdEl_one);
  }

  var tdEl_two = document.createElement('td');
  tdEl_two.textContent = store.dailyCookies;
  trEl_two.appendChild(tdEl_two);

  tbl.appendChild(trEl_two);
}

function renderNew(name, minimum, maximum, average) {
  tbl = document.getElementById('table');
  var shop = new CookieShop(name, minimum, maximum, average);
}

function renderUpdate(shop, min, max, avg) {
  var trEl = document.getElementById(shop.name.replace(' ', '').toLowerCase());

  shop.minCustomer = min;
  shop.maxCustomer = max;
  shop.avgCustomer = avg;
  shop.hourlyCookies = [];
  shop.dailyCookies = 0;
  shop.generateHourly();

  for (var i = 0; i < shop.hourlyCookies.length; i++) {
    trEl.childNodes[i + 1].textContent = shop.hourlyCookies[i];
  }
  trEl.childNodes[trEl.childNodes.length-1].textContent = shop.dailyCookies;
}

var pikePlace = new CookieShop('Pike Place', 17, 88, 5.2, 'pike');
var seaTac = new CookieShop('SeaTac Airport', 6, 44, 1.2, 'seatac');
var southCenter = new CookieShop('Southcenter Mall', 11, 38, 1.9, 'south');
var bellevue = new CookieShop('Bellevue Square', 20, 48, 3.3, 'bellevue');
var alki = new CookieShop('Alki', 3, 24, 2.6, 'alki');
=======
var containar = document.getElementById('tablecontainar');
var tabelForAll = document.createElement('tabel');
containar.appendChild(tabelForAll);
// // var headForE1=document.createElement('thead');
// tabelForAll.appendChild(headForE1);
// // var bodyForE1=document.createElement('tbody');
// tabelForAll.appendChild(bodyForE1);
// var footerForE1=document.createElement('tfoot');
// tabelForAll.appendChild(footerForE1);

function TForHead (){
    var trE1=document.createElement('tr');
    tabelForAll.appendChild(trE1);
    trE1.textContent = 'num of houre';
    for (let i = 0; i < hourForDay.length; i++) {
        var thE1=document.createElement('th');
        trE1.appendChild(thE1);
        thE1.textContent = hourForDay[i];
        
    }
    var TotalForTh = document.createElement('th');
    trE1.appendChild(TotalForTh);
    TotalForTh.textContent = "total";
}
Restaurants.prototype.TForMain = function (){
    var trE2 = document.createElement('tr');
    tabelForAll.appendChild(trE2);
    trE2.textContent = this.name;
    for (let j = 0; j < hourForDay.length; j++) {
        var tdE1=document.createElement('td');
        // console.log('heelo',this.numOfCookies);   
        trE2.appendChild(tdE1);
        tdE1.textContent = this.numOfCookies[j];   
    }
    for (var q = 0 , sum=0; q < this.numOfCookies.length;sum += this.numOfCookies[q++] ) 
    
    var toltalOfTd =  document.createElement('td');
    trE2.appendChild(toltalOfTd);
    toltalOfTd.textContent = sum;
    this.total=sum;
}
function TForFoot (){
    var trE3=document.createElement('tr');
    tabelForAll.appendChild(trE3);
    trE3.textContent = 'Total';
    for (let w = 0; w < hourForDay.length; w++) {
        var tdE3=document.createElement('td');
        trE3.appendChild(tdE3);
        tdE3.textContent += seattle.numOfCookies[w] + Tokyo.numOfCookies[w] + Dubai.numOfCookies[w]+ Paris.numOfCookies[w] + Lima.numOfCookies[w];
    }
    var tdE4 =document.createElement('td');
    trE3.appendChild(tdE4);
    tdE4.textContent += seattle.total + Tokyo.total + Dubai.total + Paris.total + Lima.total;
    
} 
TForHead();
var seattle = new Restaurants('seattle','65','23','6.3');
seattle.cxCookie();
seattle.TForMain();
    var Tokyo = new Restaurants('Tokyo','24','3','1.3');
    Tokyo.cxCookie();
    Tokyo.TForMain();
    var Dubai = new Restaurants('Dubai','38','11','3.7');
    Dubai.cxCookie();
    Dubai.TForMain();
    var Paris = new Restaurants('Paris','38','20','2.3');
    Paris.cxCookie();
    Paris.TForMain();
    var Lima = new Restaurants('Lima','16','2','4.6');
    Lima.cxCookie();
    Lima.TForMain();
    
    
    // TForMain();
    TForFoot();
    
>>>>>>> 7e039f0166942d6f130475da629d832a7b08d886
