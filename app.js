'use strict';
var hourForDay = ['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','13 PM','14 PM','15 PM','16 PM','17 PM','18 PM','19 PM','20 PM'];
// Seattle City
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
            var numberofcx=Math.floor(Math.random() * (this.max-this.min) + this.min);
            this.numOfCx.push(numberofcx);
            this.numOfCookies[i]=Math.floor(this.numOfCx[i] * this.avg);
            this.total=this.total+this.numOfCookies[i];
        }
        console.log(this.numOfCx);
        console.log(this.numOfCookies);
        return this.total,this.numOfCookies;
         
         
            
        }
        
        
    }
    seattle.avOfCx()
// Tokyo City
    var Tokyo = {
        names : "Tokyo",
        max : 24,
        min : 3,
        avg : 1.2,
        total : 0,
        numOfCxTok : [],
        numOfCookiesTok : [],
        avOfCx : function(){
            
            
            for(var i = 0 ; i< hourForDay.length; i++){
                var numberofcxTok=Math.floor(Math.random() * (this.max-this.min) + this.min);
                this.numOfCxTok.push(numberofcxTok);
                this.numOfCookiesTok[i]=Math.floor(this.numOfCxTok[i] * this.avg);
                this.total=this.total+this.numOfCookiesTok[i];
            }
            console.log(this.numOfCxTok);
            console.log(this.numOfCookiesTok);
            return this.total,this.numOfCookiesTok;
             
             
                
            }
            
            
        }
        Tokyo.avOfCx()

        // Dubai City

        var Dubai = {
            names : "Dubai",
            max : 38,
            min : 11,
            avg : 3.7,
            total : 0,
            numOfCxDub : [],
            numOfCookiesDub : [],
            avOfCx : function(){
                
                
                for(var i = 0 ; i< hourForDay.length; i++){
                    var numberofcxDub=Math.floor(Math.random() * (this.max-this.min) + this.min);
                    this.numOfCxDub.push(numberofcxDub);
                    this.numOfCookiesDub[i]=Math.floor(this.numOfCxDub[i] * this.avg);
                    this.total=this.total+this.numOfCookiesDub[i];
                }
                console.log(this.numOfCxDub);
                console.log(this.numOfCookiesDub);
                return this.total,this.numOfCookiesDub;
                 
                 
                    
                }
                
                
            }
            Dubai.avOfCx()
// Pari City
            var Paris = {
                names : "Paris",
                max : 38,
                min : 20,
                avg : 2.3,
                total : 0,
                numOfCxPar : [],
                numOfCookiesPar : [],
                avOfCx : function(){
                    
                    
                    for(var i = 0 ; i< hourForDay.length; i++){
                        var numberofcxPar=Math.floor(Math.random() * (this.max-this.min) + this.min);
                        this.numOfCxPar.push(numberofcxPar);
                        this.numOfCookiesPar[i]=Math.floor(this.numOfCxPar[i] * this.avg);
                        this.total=this.total+this.numOfCookiesPar[i];
                    }
                    console.log(this.numOfCxPar);
                    console.log(this.numOfCookiesPar);
                    return this.total,this.numOfCookiesPar;
                     
                     
                        
                    }
                    
                    
                }
                seattle.avOfCx()
// Lima City
                var Lima = {
                    names : "Lima",
                    max : 65,
                    min : 23,
                    avg : 6.3,
                    total : 0,
                    numOfCxLim : [],
                    numOfCookiesLim : [],
                    avOfCx : function(){
                        
                        
                        for(var i = 0 ; i< hourForDay.length; i++){
                            var numberofcxLim=Math.floor(Math.random() * (this.max-this.min) + this.min);
                            this.numOfCxLim.push(numberofcxLim);
                            this.numOfCookiesLim[i]=Math.floor(this.numOfCxLim[i] * this.avg);
                            this.total=this.total+this.numOfCookiesLim[i];
                        }
                        console.log(this.numOfCxLim);
                        console.log(this.numOfCookiesLim);
                        return this.total,this.numOfCookiesLim;
                         
                         
                            
                        }
                        
                        
                    }
                    Lima.avOfCx()
                    var elE1=document.getElementById('bodyId');
                    var art1=document.createElement('article');
                    elE1.appendChild(art1);
                    var par1= document.createElement('p');
                    art1.appendChild(par1);
                    par1.textContent='Seattle';
                    var ulE1=document.createElement('ul');
                    par1.appendChild(ulE1);
                    for(var i=0; i<hourForDay.length;i++){
                        var liE1=document.createElement('li');
                        ulE1.appendChild(liE1);
                        liE1.textContent=`${hourForDay} : number of cookie in seattle ${seattle.numOfCookies}  `;

                    }
                    liE1.textContent=`Total is : ${seattle.total}`;
                    // now for Tokyo

                    var ParE1 = document.createElement('p');
                    art1.appendChild(ParE1);
                    ParE1.textContent=' Tokyo ';
                    var ulE2= document.createElement('ul');
                    ParE1.appendChild(ulE2);
                    for(var i=0 ; i< hourForDay.length;i++){
                        var liE2 =document.createElement('li');
                        ulE2.appendChild(liE2);
                        liE2.textContent=`${hourForDay} : number of cookie in Tokyo ${Tokyo.numOfCookiesTok}  `;
                    }
                    liE2.textContent=`Total is : ${Tokyo.total}`;

                    // now for Dubai

                    var ParE2 = document.createElement('p');
                    art1.appendChild(ParE2);
                    ParE2.textContent=' Dubai ';
                    var ulE3= document.createElement('ul');
                    ParE2.appendChild(ulE3);
                    for(var i=0 ; i< hourForDay.length;i++){
                        var liE3 =document.createElement('li');
                        ulE3.appendChild(liE3);
                        liE3.textContent=`${hourForDay} : number of cookie in Tokyo ${Tokyo.numOfCookiesTok}  `;
                    }
                    liE3.textContent=`Total is : ${Dubai.total}`;

                    // now for Paris
                    var ParE3 = document.createElement('p');
                    art1.appendChild(ParE3);
                    ParE3.textContent=' Paris ';
                    var ulE4= document.createElement('ul');
                    ParE3.appendChild(ulE4);
                    for(var i=0 ; i< hourForDay.length;i++){
                        var liE4 =document.createElement('li');
                        ulE4.appendChild(liE4);
                        liE4.textContent=`${hourForDay} : number of cookie in Tokyo ${Tokyo.numOfCookiesTok}  `;
                    }
                    liE4.textContent=`Total is : ${Paris.total}`;

                    // for Lima

                    var ParE4 = document.createElement('p');
                    art1.appendChild(ParE4);
                    ParE4.textContent=' Lima ';
                    var ulE5= document.createElement('ul');
                    ParE2.appendChild(ulE5);
                    for(var i=0 ; i< hourForDay.length;i++){
                        var liE5 =document.createElement('li');
                        ulE5.appendChild(liE5);
                        liE5.textContent=`${hourForDay} : number of cookie in Tokyo ${Tokyo.numOfCookiesTok}  `;
                    }
                    liE5.textContent=`Total is : ${Lima.total}`;





