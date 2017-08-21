var palautteet = [];
   
var hukassaPalaute = function(){
    if(T_data_vaarMaara("hukassa") >=1){
        return "Tarkista vastauksesi! Olet valinnut nyt myös verbejä ja verbien infinitiivimuotoja sekä partikkeleja ja konjunktioita. Valitse vain substantiivit. </p><p>";
    }
    return "";
}

var alkuteksti = function (){
    return "Vastaustesi perusteella näyttää siltä, että <ul>";
}
    
var konkrPalaute = function (){
    if(T_data_oikMaara("konkreettinen substantiivi")*1.0 / T_data_kokMaara("konkreettinen substantiivi") >= 0.75){
        return "erotat havaittavissa tai käsiteltävissä oleviin asioihin viittaavat substantiivit tekstistä.";
 
    }
    return "tyhja";
}

palautteet.push(konkrPalaute);

var konkrPalaute2 = function (){
    if(T_data_oikMaara("konkreettinen substantiivi")*1.0 / T_data_kokMaara("konkreettinen substantiivi") <= 0.25){
        return "et erota konkreettisiin asioihin viittaavia substantiiveja tekstistä.";
    }
    return "tyhja";
}

palautteet.push(konkrPalaute2);

var erisnimiPalaute = function(){
    if(T_data_oikMaara("erisnimi")*1.0 / T_data_kokMaara("erisnimi") >= 0.5){
        return "tunnistat erisnimet substantiiveiksi.";
    }
    return "tyhja";
}

palautteet.push(erisnimiPalaute);

var erisnimiPalaute2 = function(){
    if(T_data_oikMaara("erisnimi")*1.0 / T_data_kokMaara("erisnimi") < 0.5){
        return "et tunnista erisnimiä substantiiveiksi. ";
    }
    return "tyhja";
}

palautteet.push(erisnimiPalaute2);

var abstraPalaute = function(){
    if(T_data_oikMaara("abstra")*1.0 / T_data_kokMaara("abstra") >= 0.66 ){
        return "erotat abstraktit substantiivit tekstistä. Niillä tarkoitetaan sellaisia sanoja, joilla viitataan kuviteltavissa tai ajateltavissa oleviin asioihin, joita ei voi aistein havaita."
    }
    return "tyhja";
}

palautteet.push(abstraPalaute);

var abstraPalaute2 = function(){
    if(T_data_oikMaara("abstra")*1.0 / T_data_kokMaara("abstra") <= 0.33 ){
        return "et erota abstrakteja substantiiveja tekstistä. Niillä tarkoitetaan sellaisia sanoja, joilla viitataan kuviteltavissa tai ajateltavissa oleviin asioihin, joita ei voi aistein havaita.";
    }   
    return "tyhja";
}

palautteet.push(abstraPalaute2);

var toimintaPalaute = function(){
    if(T_data_oikMaara("toiminta")*1.0 / T_data_kokMaara("toiminta") >= 0.66){
        return "tunnistat niin sanotut toimintasubstantiivit. Toimintasubstantiiveilla tarkoitetaan substantiiveja, joiden lähtökohtana on usein verbi. Niillä viitataan esimerkiksi tekoihin, tapahtumiin tai liikkeeseen.";
    }
    return "tyhja";
}

palautteet.push(toimintaPalaute);

var toimintaPalaute2 = function(){
    if(T_data_oikMaara("toiminta")*1.0 / T_data_kokMaara("toiminta") <= 0.33){
        return "et tunnista niin sanottuja toimintasubstantiiveja tekstistä. Toimintasubstantiiveilla tarkoitetaan substantiiveja, joilla viitataan esimerkiksi tekoihin, tapahtumiin tai liikkeeseen.";
    }
    return "tyhja";
}

palautteet.push(toimintaPalaute2);

var pronominiPalaute = function(){
    if(T_data_vaarMaara("prono") >=1){
        return "arvelet joidenkin pronominien olevan substantiiveja.";
    }
    return "tyhja";
}

palautteet.push(pronominiPalaute);

var oppimateriaaliPalaute = function(){
    if(
        T_data_vaarMaara("hukassa") >=1 || T_data_oikMaara("konkreettinen substantiivi")*1.0 / T_data_kokMaara("konkreettinen substantiivi") <= 0.25 || T_data_oikMaara("erisnimi")*1.0 / T_data_kokMaara("erisnimi") < 0.5 || T_data_oikMaara("abstra")*1.0 / T_data_kokMaara("abstra") <= 0.33 || T_data_oikMaara("toiminta")*1.0 / T_data_kokMaara("toiminta") <= 0.33 || T_data_vaarMaara("prono") >=1
    ) {
        return "<p>Tutustu sivustomme oppimateriaaleihin ja kertaa niiden avulla, mitä substantiiveilla tarkoitetaan ja miten se eroaa muista sanaluokista.</p>";
    } else {
        return "tyhja";
    }   
}



var kaikkiOikein = function(){
    return T_data_vaarMaara("hukassa") < 1 && T_data_oikMaara("konkreettinen substantiivi")*1.0 / T_data_kokMaara("konkreettinen substantiivi") >= 0.75 && T_data_oikMaara("erisnimi")*1.0 / T_data_kokMaara("erisnimi") >= 0.5 && T_data_oikMaara("abstra")*1.0 / T_data_kokMaara("abstra") >= 0.66 && T_data_oikMaara("toiminta")*1.0 / T_data_kokMaara("toiminta") >= 0.66 && T_data_vaarMaara("prono") <1;
}


luoUlkoPalaute = function(){
    var palauteTeksti = "<p>";
    palauteTeksti += hukassaPalaute();
    palauteTeksti += alkuteksti();
    
    for(var i = 0; i < palautteet.length; i++){
        var lisays = palautteet[i]()
        if(lisays != "tyhja"){
            palauteTeksti += "<li>"
            palauteTeksti += lisays;
            palauteTeksti += "</li>";
        }
    }
    palauteTeksti +="</ul></p>";
    palauteTeksti += oppimateriaaliPalaute();
    if(kaikkiOikein()){
        palauteTeksti = "<p> Vastauksesi perusteella näyttää siltä, että hallitset substantiivien kategorian erittäin hyvin. Erotat konkreettiset ja abstraktit substantiivit sekä toimintasubstantiivit tekstistä ja ymmärrät myös erisinimet substantiiveiksi. Hienoa! </p>";
    }
    document.getElementById("palaute").innerHTML = palauteTeksti;
    
}

