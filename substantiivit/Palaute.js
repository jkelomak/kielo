var palautteet = [];

///////////////////////////
/*
vihreaEhto = function(){
    return T_data_oikMaara("konkreettinen substantiivi")*1.0 / T_data_kokMaara("konkreettinen substantiivi") >= 0.75;
}

vihreaPalaute = function(){
    if(vihreaEhto()){
        return "erotat havaittavissa tai käsiteltävissä oleviin asioihin viittaavat substantiivit tekstistä"; 
    } else {
        return "et erota konkreettisiin asioihin viittaavia substantiiveja tekstistä";
    }
}

palautteet.push(vihreaPalaute);

sininenEhto = function(){
    return T_data_oikMaara("erisnimi")*1.0 / T_data_kokMaara("erisnimi") >= 0.5;
}

sininenPalaute = function(){
    if(sininenEhto){
        return "tunnistat erisnimet substantiiveiksi";
    } else {
        return "et tunnista erisnimiä substantiiveiksi";
    }
}

palautteet.push(sininenPalaute);

violettiEhto = function(){
    return T_data_oikMaara("abstra")*1.0 / T_data_kokMaara("abstra") >= 0.66;
}

violettiEhto2 = funtion(){
    return T_data_oikMaara("abstra")*1.0 / T_data_kokMaara("abstra") <= 0.34;
}

violettiPalaute = function(){
    if(violettiEhto){
        return "erotat abstraktit substantiivit tekstistä. Niillä tarkoitetaan sellaisia sanoja, joilla viitataan kuviteltavissa tai ajateltavissa oleviin asioihin, joita ei voi aistein havaita";
    } else if(violettiEhto2) {
        return "et erota abstrakteja substantiiveja tekstistä. Niillä tarkoitetaan sellaisia sanoja, joilla viitataan kuviteltavissa tai ajateltavissa oleviin asioihin, joita ei voi aistein havaita";
    } else {
        return "";
    }
}

keltainenEhto = function(){
    return T_data_oikMaara("toiminta")*1.0 / T_data_kokMaara("toiminta") >= 0.66;
}

keltainenEhto2 = function(){
    T_data_oikMaara("toiminta")*1.0 / T_data_kokMaara("toiminta") <= 0.34;
}

keltainenPalaute = function(){
    if(keltainenEhto){
        return "tunnistat niin sanotut toimintasubstantiivit. Toimintasubstantiiveilla tarkoitetaan substantiiveja, joiden lähtökohtana on usein verbi. Niillä viitataan esimerkiksi tekoihin, tapahtumiin tai liikkeeseen."
    } else if(keltainenEhto2){
        return "et tunnista niin sanottuja toimintasubstantiiveja tekstistä. Toimintasubstantiiveilla tarkoitetaan substantiiveja, joilla viitataan esimerkiksi tekoihin, tapahtumiin tai liikkeeseen."
    } else {
        return "";
    }
}

ruskeaEhto = function(){
    return T_data_vaarMaara("prono") >=1
}

*/

/////

{
var konkrPalaute = function (){
    if(T_data_oikMaara("konkreettinen substantiivi")*1.0 / T_data_kokMaara("konkreettinen substantiivi") >= 0.75){
        return "Vastaustesi perusteella näyttää siltä, että erotat havaittavissa tai käsiteltävissä oleviin asioihin viittaavat substantiivit tekstistä. Substantiivien tunnistaminen aloitetaan usein alakoulussa näistä. (Jos ¾  tai enemmän valittu.)";
 
    }
    return "tyhja";
}

palautteet.push(konkrPalaute);

var konkrPalaute2 = function (){
    if(T_data_oikMaara("konkreettinen substantiivi")*1.0 / T_data_kokMaara("konkreettinen substantiivi") <= 0.25){
        return "Vastaustesi perusteella näyttää siltä, että et erota havaittavissa tai käsiteltävissä oleviin asioihin viittaavia substantiiveja tekstistä. Substantiivien tunnistaminen aloitetaan usein alakoulussa niistä. Katso substantiiveja koskeva opetusvideo ja kokeile testiä uudelleen!";
    }
    return "tyhja";
}

palautteet.push(konkrPalaute2);

var erisnimiPalaute = function(){
    if(T_data_oikMaara("erisnimi")*1.0 / T_data_kokMaara("erisnimi") >= 0.5){
        return "Vastaustesi perusteella näyttää siltä, että tunnistat erisnimet substantiiveiksi.";
    }
    return "tyhja";
}

palautteet.push(erisnimiPalaute);

var erisnimiPalaute2 = function(){
    if(T_data_oikMaara("erisnimi")*1.0 / T_data_kokMaara("erisnimi") < 0.5){
        return "Vastaustesi perusteella näyttää siltä, että et tunnista erisnimiä substantiiveiksi. Katso substantiiveja koskeva opetusvideo ja kokeile testiä uudelleen! ";
    }
    return "tyhja";
}

palautteet.push(erisnimiPalaute2);

var abstraPalaute = function(){
    if(T_data_oikMaara("abstra")*1.0 / T_data_kokMaara("abstra") >= 0.66 ){
        return "Vastaustesi perusteella näyttää siltä, että erotat abstraktit substantiivit tekstistä. Niillä tarkoitetaan sellaisia sanoja, joilla viitataan kuviteltavissa tai ajateltavissa oleviin asioihin, joita ei voi aistein (ainakaan ilman apuvälineitä) havaita. Abstraktien substantiivien ymmärtäminen substantiiveiksi on usein alakoululaiselle vaikeaa."
    }
    return "tyhja";
}

palautteet.push(abstraPalaute);

var abstraPalaute2 = function(){
    if(T_data_oikMaara("abstra")*1.0 / T_data_kokMaara("abstra") <= 0.33 ){
        return "Vastaustesi perusteella näyttää siltä, että et erota abstrakteja substantiiveja tekstistä. Abstrakteilla substantiiveilla tarkoitetaan sellaisia sanoja, joilla viitataan mielen toiminnan tuotoksiin. Ne ovat kuviteltavissa tai ajateltavissa olevia asioita, joita ei voi aistein havaita. Abstraktien substantiivien ymmärtäminen substantiiveiksi on usein alakoululaisellekin vaikeaa. Katso substantiiveja koskeva opetusvideo ja kokeile testiä uudelleen!";
    }   
    return "tyhja";
}

palautteet.push(abstraPalaute2);

var toimintaPalaute = function(){
    if(T_data_oikMaara("toiminta")*1.0 / T_data_kokMaara("toiminta") >= 0.66){
        return "Vastaustesi perusteella näyttää siltä, että tunnistat niin sanotut toimintasubstantiivit. Toimintasubstantiiveilla tarkoitetaan substantiiveja, joiden lähtökohtana on usein verbi. Niillä viitataan esimerkiksi tekoihin, tapahtumiin tai liikkeeseen. ";
    }
    return "tyhja";
}

palautteet.push(toimintaPalaute);

var toimintaPalaute2 = function(){
    if(T_data_oikMaara("toiminta")*1.0 / T_data_kokMaara("toiminta") <= 0.33){
        return "Vastaustesi perusteella näyttää siltä, että et tunnista niin sanottuja toimintasubstantiiveja tekstistä. Toimintasubstantiiveilla tarkoitetaan substantiiveja, joilla viitataan esimerkiksi tekoihin, tapahtumiin tai liikkeeseen. Ne on usein muodostettu verbistä johtamalla, minkä takia ne muistuttavat hahmoltaan verbejä. Katsele opetusvideo substantiiveista ja verbeistä ja kokeile testiä uudelleen. ";
    }
    return "tyhja";
}

palautteet.push(toimintaPalaute2);

var pronominiPalaute = function(){
    if(T_data_vaarMaara("prono") >=1){
        return "Vastaustesi perusteella näyttää siltä, että arvelet joidenkin pronominien olevan substantiiveja";
    }
    return "tyhja";
}

palautteet.push(pronominiPalaute);

var hukassaPalaute = function(){
    if(T_data_vaarMaara("hukassa") >=1){
        return "Tarkista vastauksesi! Olet valinnut nyt myös verbejä ja verbien infinitiivimuotoja sekä partikkeleja ja konjunktioita. Valitse vain substantiivit.";
    }
    return "tyhja";
}

palautteet.push(hukassaPalaute);
}

luoUlkoPalaute = function(){
    var palauteTeksti = "<p>";
    for(var i = 0; i < palautteet.length; i++){
        var lisays = palautteet[i]()
        if(lisays != "tyhja"){
            palauteTeksti += lisays;
            palauteTeksti += "</p><p>";
        }
    }
    palauteTeksti +="</p>";
    document.getElementById("palaute").innerHTML = palauteTeksti;
}

