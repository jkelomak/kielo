//esittelysivu
var aloitaNappula = new Nappula("Aloita", 50, 400);
var harjoitusNappula = new Nappula("testisivu", 600, 400);

var esittelyteksti = "Tervetuloa Kielo-oppimissivustolle. Tällä sivulla harjoitellaan sanaluokkia ja tutkitaan mikä sanaluokka oikein on. Klikkaa hiirellä sanoja luokitellaksesi niitä. Valitse harjoitus alta";

//harjoitussivu
var valittuSl = "sub";

var harjoitusTeksti = function(){
    
    text("Valitse substantiivit allaolevasta tekstistä hiiren painalluksella. Kun olet valmis, saat palautetta valintojesi perusteella. Mieti siis huolellisesti vastauksesi, sillä tällöin palautteesi on sinulle hyödyllisempää.", 760, 60, 400, 600);
}

var lahdeTeksti = function(){
    text("(Katkelma tekstistä Tutkijat selvittivät, kuinka kutitus tarttuu (HS.fi 9.3.2017, Johanna Junttila))", 30, 480, 700, 700);
}

var hKentta = new TekstiKentta(30, 20, 670,500);
hKentta.lisaaKappaleet([5, 12, 20, 40, 51, 63, 88, 96]);


for(var i = 0; i < T_data.sanat.length; i++){
    
    if(i === 5){
        hKentta.otsikkoloppui();
    }
    
    if(i < 5){
        hKentta.lisaaOtsikkoNappi(T_data.sanat[i], i);
    } else {
        hKentta.lisaaslNappi(T_data.sanat[i], i);
    }
}



//var testipalautaNappula = new Nappula("Palautatesti", 550, 600);
//var palautaNappula = new Nappula("Palauta", 30, 600);
//var palautaNappula2 = new Nappula("Palauta kokoruutu", 30, 550);
var palautaNappula3 = new Nappula("Palauta", 30, 600);

//palaute+harjoitus -sivu

var pKentta = new TekstiKentta(700, 100, 400, 700);

//palautekokoruutusivu

var pKentta2 = new TekstiKentta(30, 60, 1000, 700);

//palaute alla -sivu

var sublinkki = new Nappula("substantiivitietoa", 760, 500);
var partisiippilinkki = new Nappula("partisiippitietoa", 760, 550);
var palauteTekstiLyhyt = function(){
    text("Sinulla on vielä tekemistä. Lue palaute harjoituksen alapuolelta. Tämän ruudun alaosasta löydät linkit sinulle hyödylliseen materiaaliin", 760, 60, 400, 600);
}