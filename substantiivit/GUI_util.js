
//fonttitiedot: koko 20, merkkiH = 14
var merkkiH = 14 + 4;
var merkkiW = 10;





//Nappula
var Nappula = function(teksti, x, y){
    this.teksti=teksti;
    this.x = x;
    this.y = y;
    this.vari = [250, 191, 65];
    this.leveys = teksti.length * merkkiW;
    this.korkeus = merkkiH;
    //this.vari = color(230, 230, 130);
};

Nappula.prototype.draw = function(){
    fill(this.vari[0], this.vari[1], this.vari[2]);
    noStroke();
    rect(this.x, this.y, this.teksti.length*merkkiW, merkkiH);
    fill(0);
    text(this.teksti, this.x, this.y+ merkkiH - 4);
};

//rumaa, korjaa
Nappula.prototype.isInside = function(XofMouse, YofMouse){
    return XofMouse >= this.x && YofMouse >= this.y && XofMouse <= this.x + this.leveys && YofMouse <= this.y + this.korkeus;
}



//slNappula
var slNappula = function(teksti, x, y){
    Nappula.call(this, teksti, x, y);
    this.sl = "tyhja";
};

slNappula.prototype = Object.create(Nappula.prototype);

slNappula.prototype.drawsl = function(){
    var nappulanVari = [255,255,255];
    if(this.sl === "sub"){
        nappulanVari = [180, 130, 100];
    }
    //tähän muut vaihtoehdot
    this.vari = nappulanVari;
    this.draw();
};

slNappula.prototype.pressed = function(){
    if(this.sl === valittuSl){
        this.sl = "tyhja";
    } else {
        this.sl = valittuSl;
    }
}

//kenttä
var TekstiKentta = function(alkuX, alkuY, leveysX, korkeusY){
    this.pohjaVari = [0,0,0,0];
    this.raamit = [alkuX, alkuY, leveysX, korkeusY];
    this.napit = [];
    this.seuraavaNappi = [alkuX, alkuY + merkkiH];
    console.log(this.seuraavaNappi[0] + this.seuraavaNappi[1]);
}

TekstiKentta.prototype.lisaaKappaleet = function(kappalejaot){
    this.kappalejaot = kappalejaot;
}


TekstiKentta.prototype.lisaaOtsikkoNappi = function(teksti, sanannumero){
    //textSize(30);
    merkkiH = 21+4;
    merkkiW = 15;
    this.lisaaslNappi(teksti, sanannumero);
    //textSize(20);
    merkkiH = 14 + 4;
    merkkiW = 10;
}

TekstiKentta.prototype.otsikkoloppui = function(){
    this.seuraavaNappi[1] += 20;
}


TekstiKentta.prototype.lisaaslNappi = function(teksti, sanannumero){
    
    if(this.kappalejaot.includes(sanannumero)){
        this.seuraavaNappi[0] = this.raamit[0] + 3 * merkkiW;
        this.seuraavaNappi[1] += merkkiH + 4;
    }
    
    if(this.seuraavaNappi[0] + teksti.length*merkkiW > this.raamit[0] + this.raamit[2]){
        this.seuraavaNappi[0] = this.raamit[0];
        this.seuraavaNappi[1] += merkkiH;
    }
    
    lisattavanX = this.seuraavaNappi[0];
    lisattavanY = this.seuraavaNappi[1];
    lisattavaNappi = new slNappula(teksti, lisattavanX , lisattavanY );
    this.seuraavaNappi[0] += lisattavaNappi.leveys;
    this.napit.push(lisattavaNappi);
    console.log(this.seuraavaNappi[0] + this.seuraavaNappi[1]);
}

TekstiKentta.prototype.luoPalaute = function(){
    var palauteTeksti = "";
    for(var i = 0; i < palautteet.length; i++){
        var lisays = palautteet[i]()
        if(lisays != "tyhja"){
            palauteTeksti += lisays;
            palauteTeksti += "\n\n";
        }
    }
    this.palaute = palauteTeksti;
}

TekstiKentta.prototype.kirjoitaPalaute = function(){
    text(this.palaute, this.raamit[0],this.raamit[1],this.raamit[2],this.raamit[3]);
}

var luoK_data = function(){
    for(var i = 0; i < T_data.sanat.length; i++){
        k_data.push(hKentta.napit[i].sl == "sub");
    }
    luoOikVektori();
}