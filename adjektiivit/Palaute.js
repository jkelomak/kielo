var palautteet = [];

var ihanHukassa = function(){
    return T_data_vaarMaara("hukassa") > 5;
}

var alkuTeksti = function(){
    return "Vastaustesi perusteella näyttää siltä, että </p><ul> "
}

var hiemanHukassa = function(){
    if(T_data_vaarMaara("hukassa") > 0 && T_data_vaarMaara("hukassa") <= 5){
        return "sinun kannattaisi kerrata, mitä adjektiivit ovat.";
    } else {
        return "tyhja";
    }
}

palautteet.push(hiemanHukassa);

var kiistaton = function(){
    var valittu = T_data_oikMaara("adjektiivi");
    console.log(T_data_oikMaara("adjektiivi"));
    if(valittu === 8) {
        return "tunnistat tekstistä kiistattomat adjektiivit varmasti.";
    } else if (valittu > 5) {
        return "tunnistat tekstistä kiistattomia adjektiiveja hyvin.";
    } else if (valittu > 3) {
        return "tunnistat joskus adjektiivin. Vaikuttaa siltä, että olet kuitenkin epävarma ja sinun kannattaisi kerrata, mitkä ovat adjektiivin tunnuspiirteet. ";
    } else {
        return "olet epävarma adjektiivien tunnistaja. Teitkö testin tosissasi?";
    }
}

palautteet.push(kiistaton);

var partisiippi = function(){
    if(T_data_vaarMaara("partisiippi") > 2) {
        return "pidät myös verbien partisiippeja adjektiiveina. Partisiipit ovatkin verbimuotoja, joita voi käyttää samaan tapaan kuin adjektiiveja.";
    } else if ( T_data_vaarMaara("partisiippi") > 0) {
        return "käsittelet joskus mutta et aina myös verbien partisiippejä adjektiiveina. Partisiipit ovat verbimuotoja, joita käytetään adjektiivin tapaan.";
    } else {
        return "tyhja";
    }
}

palautteet.push(partisiippi);

var kuvaileva = function(){
    if(T_data_vaarMaara("kuvaileva") > 5){
        return "pidät ominaisuudennimiä ja luonnehtivia substantiiveja adjektiiveina. Adjektiivi merkitsee sinulle jotakin muuta kuin mitä adjektiivi kielitiedon käsitteenä tarkoittaa. Teitkö testin tosissasi?";
    } else if(T_data_vaarMaara("kuvaileva") > 1){
        return "pidät toisinaan ominaisuudennimiä ja luonnehtivia substantiiveja adjektiiveina. Ymmärrät luultavasti jotakin adjektiivien merkityksestä mutta ehkä vähemmän siitä, miten ne esiintyvät lauseissa. Myös alaluokkien oppilaille on tavanomaista tehdä samantapaisia virhearvioita. Kun kertaat adjektiivin tuntomerkkejä, pohdi myös, miten voisit opettajana hyödyntää testin osoittamaa virhepäättelyäsi, kun johdattelet oppilaitasi välttämään adjektiivien tunnistamisen sudenkuopat. ";
    } else {
        return "tyhja";
    }
}

palautteet.push(kuvaileva);

var materiaali = function(){
    if(T_data_vaarMaara("materiaali") > 1){
        return "pidät materiaalin nimiä adjektiiveina, vaikka ne ovat substantiiveja. Sinun on ehkä syytä kerrata, mikä adjektiivi on.";
    } else if (T_data_vaarMaara("materiaali") > 0) {
        return "joskus erehdyt pitämään materiaalin nimeä adjektiivina. Niin tekevät monet oppilaasikin. Sinun kannattaisi merkityksen lisäksi kiinnittää huomiota adjektiivien taivutukseen ja siihen, miten ne toimivat lauseessa.";
    } else {
        return "tyhja";
    }
}

palautteet.push(materiaali);

luoUlkoPalaute = function(){
    var palauteTeksti = "<p>";
    palauteTeksti += alkuTeksti();
    
    for(var i = 0; i < palautteet.length; i++){
        var lisays = palautteet[i]()
        if(lisays != "tyhja"){
            palauteTeksti += "<li>"
            palauteTeksti += lisays;
            palauteTeksti += "</li>";
        }
    }
    palauteTeksti +="</ul></p>";
    if(ihanHukassa()){
        palauteTeksti = "<p>Vastaustesi perusteella näyttää siltä, että sinulla ei ole käsitystä siitä, mitä adjektiivi sanaluokkana tarkoittaa.</p>";
    }
    document.getElementById("palaute").innerHTML = palauteTeksti;
    
}
