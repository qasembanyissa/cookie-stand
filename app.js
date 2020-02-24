'use strict';
var hourForDay = ['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','13 PM','14 PM','15 PM','16 PM','17 PM','18 PM','19 PM','20 PM'];
var containar =document.getElementById('stores');
var seattle = {
    names : "seattle",
    max : 65,
    min : 23,
    avg : 6.3,
    total : 0,
    numOfCx : [],
    numOfCookies : [],
    avOfCx : function(){
        
        
        
        for(var i = 0 ; i< hourForDay.length; i++){
            this.numOfCx=Math.floor(Math.random()*(this.max-this.min));
            this.numOfCx=this.numOfCx+this.min;
            // console.log('hnumber of customer in seattle',this.numOfCx);
            
            var  avaragenum  =this.numOfCx*this.avg;
            //   console.log('hi',avaragenum);
            this.numOfCookies.push(avaragenum)[i];
            //   console.log('number of cookies in seattle',this.numOfCookies);
            
            this.total=this.total+this.numOfCookies[i];
            console.log('total in seattle',this.total);
            
            // console.log(this.numOfCx);
            // console.log(this.numOfCookies);
            
        }
        
        
    }
    // return(this.total);
    // console.table(seattle);
    
}
    //     var render : function(){
    // var articleE1= document.createElement('article');
    // containar.appendChild(articleE1);
    // var article = addElement('article',containar);
    // var tableElem= addElement('table',article);
    // var headerRowElem=addElement('tr',tableElem);
    // addElement('th',headerRowElem, ' ');
    // for(var i=0;i<hourForDay;i++){
    //     addElement('th',headerRowElem,hourForDay[i]);
        
    // }
    // addElement('th',headerRowElem,'daily location total');
    // Store.prototype.avOfCx=function(containar){
    //     var dataRowElem=addElement('tr',tableElem);
    //     addElement('td',dataRowElem,this.names);
    //     addElement('td',dataRowElem,this.total);
    //     var dataRowElem2=addElement('tr',tableElem);
    //     addElement('td',dataRowElem,'total');
    // }
    
    
    // console.table(render);


seattle.avOfCx();

var Tokyo = {
    names : "Tokyo",
    max : 24,
    min : 3,
    avg : 1.2,
    totaltok : 0,
    numOfCxtok : [],
    numOfCookiestok : [],
    avOfCx : function(){
        for(var i = 0 ; i< hourForDay.length; i++){
            this.numOfCxtok=Math.floor(Math.random()*(this.max-this.min));
            this.numOfCxtok=this.numOfCxtok+this.min;
            // console.log('number of customer in tokyo',this.numOfCxtok);
            
            var  avaragenum  =this.numOfCxtok*this.avg;
            //   console.log('hi',avaragenum);
            this.numOfCookiestok.push(avaragenum)[i];
            //   console.log('number of cookies in tokyo',this.numOfCookiestok);
            
            this.totaltok=this.totaltok+this.numOfCookiestok[i];
            console.log('total in tokyo',this.totaltok);
            
            // console.log(this.numOfCx);
            // console.log(this.numOfCookies);
            
        }
        return(this.totaltok);
        
    }
}
Tokyo.avOfCx();

var Dubai = {
    names : "Dubai",
    max : 38,
    min : 11,
    avg : 3.7,
    totalDub : 0,
    numOfCxDub : [],
    numOfCookiesDub : [],
    avOfCx : function(){
        for(var i = 0 ; i< hourForDay.length; i++){
            this.numOfCxDub=Math.floor(Math.random()*(this.max-this.min));
            this.numOfCxDub=this.numOfCxDub+this.min;
            // console.log('number of customer in tokyo',this.numOfCxtok);
            
            var  avaragenum  =this.numOfCxDub*this.avg;
            //   console.log('hi',avaragenum);
            this.numOfCookiesDub.push(avaragenum)[i];
            //   console.log('number of cookies in tokyo',this.numOfCookiestok);
            
            this.totalDub=this.totalDub+this.numOfCookiesDub[i];
            console.log('total in Dubai',this.totalDub);
            
            // console.log(this.numOfCx);
            // console.log(this.numOfCookies);
            
        }
        return(this.totalDub);
        
    }
}
Dubai.avOfCx();

var paris = {
    names : "paris",
    max : 38,
    min : 20,
    avg : 2.3,
    totalpar : 0,
    numOfCxpar : [],
    numOfCookiespar : [],
    avOfCx : function(){
        for(var i = 0 ; i< hourForDay.length; i++){
            this.numOfCxpar=Math.floor(Math.random()*(this.max-this.min));
            this.numOfCxpar=this.numOfCxpar+this.min;
            // console.log('number of customer in tokyo',this.numOfCxtok);
            
            var  avaragenum  =this.numOfCxpar*this.avg;
            //   console.log('hi',avaragenum);
            this.numOfCookiespar.push(avaragenum)[i];
            //   console.log('number of cookies in tokyo',this.numOfCookiestok);
            
            this.totalpar=this.totalpar+this.numOfCookiespar[i];
            console.log('total in paris',this.totalpar);
            
            // console.log(this.numOfCx);
            // console.log(this.numOfCookies);
            
        }
        return(this.totalpar);
        
    }
}
paris.avOfCx();

var lima = {
    names : "lima",
    max : 16,
    min : 2,
    avg : 4.6,
    totallim : 0,
    numOfCxlim : [],
    numOfCookieslim : [],
    avOfCx : function(){
        for(var i = 0 ; i< hourForDay.length; i++){
            this.numOfCxlim=Math.floor(Math.random()*(this.max-this.min));
            this.numOfCxlim=this.numOfCxlim+this.min;
            // console.log('number of customer in tokyo',this.numOfCxtok);
            
            var  avaragenum  =this.numOfCxlim*this.avg;
            //   console.log('hi',avaragenum);
            this.numOfCookieslim.push(avaragenum)[i];
            //   console.log('number of cookies in tokyo',this.numOfCookiestok);
            
            this.totallim=this.totallim+this.numOfCookieslim[i];
            console.log('total in lima',this.totallim);
            
            // console.log(this.numOfCx);
            // console.log(this.numOfCookies);
            
        }
        return(this.totallim);
        
    }
}
lima.avOfCx();

// var article1=document.createElement('article');
// containar.appendChild(article1);
// var articleE1 = addElement('article',this.containar);
// var tableE1 = addElement('table',articleE1);
// var headerRowElem = addElement('tr',this.tableE1);
// addElement('th',headerRowElem, ' ');
// for(var i = 0 ; i<hourForDay;i++){
//     addElement('th',headerRowElem,hourForDay[i]);
// }
// addElement('th',headerRowElem,'daily location Total');

// add body for table
// Store.prototype.render = function(containar){
//     var dataRowElem = addElement('tr',this.tableE1);
//     addElement('td',dataRowElem,this.names);
    
//     // add total colum 
//     addElement('td',dataRowElem,this.total);
    
//     // row
//     var dataRowElem2= addElement('tr',this.tableE1);
//     addElement('td',dataRowElem2,'final-total');

// } 
// console.table(seattle);
// console.log(seattle.avOfCx(23,65,6.3));
// console.table(seattle);