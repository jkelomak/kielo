var palautteet = [];

var alkuTeksti = function(){
    return "Vastaustesi perusteella näyttää siltä, että </p><ul> ";
}

var Isarake = function(){
    var a = T_data_vaarMaara("hukassa");
    if(a > 10){
        return "et erota verbejä muista sanoista. Teitkö tehtävän ajatuksen kanssa vai koettelitko vain onneasi? Tutustu opiskelumateriaalin verbi-osioon";
    } else if( a>5){
        return "saatat toisinaan erehtyä luulemaan eri sanaluokkien sanoja verbeiksi";
    } else if (a>1) {
        return "et kovin usein erehdy luulemaan muiden sanaluokkien sanoja verbeiksi tunnistamisessa";
    } else {
        return "olet ehkä napsutellut sanoja sattumanvaraisesti";
    }
}

palautteet.push(Isarake);

var Bsarake = function(){
    var a = T_data_vaarMaara("prs-taiv-muoto")
    if(a < 7){
        return "tunnistat verbin persoonamuodot varmasti";
    } else if(a < 11){
        return "tunnistat osan verbin persoonamuodoista."
    } else if(a < 17){
        return "tunnistat joskus verbin persoonamuodon";
    } else{
        return "sinulla on vaikeuksia tunnistaa verbin persoonamuotoa.";
    }
}

palautteet.push(Bsarake);

var Csarake = function(){
    var a = T_data_vaarMaara("partisiippi liittomuodossa")
    if(a < 4){
        return "tiedät, että verbeillä on myös liittomuotoja, joissa verbin taivutusmuoto rakentuu kahdesta tai useammasta sanasta. Tätä tietoa voit soveltaa opetuksessasi neljänneltä luokalta ylöspäin.";
    } else if(a < 7){
        return "tunnistat toisinaan myös liittomuotoja, joissa verbin taivutusmuoto rakentuu kahdesta tai useammasta sanasta. Hanki tähän asiaan lisää varmuutta, jotta pystyt toteuttamaan kielitiedon opetusta neljänneltä luokalta ylöspäin.";
    } else if(a < 10){
        return "sinulla on ehkä jonkinlainen käsitys siitä, että verbeillä on erilaisia muotoja. Tarvitset erityisesti verbin aika- ja liittomuotojen kertausta. Niitä aletaan harjoitella jo 4. luokalla";
    } else{
        return "verbikäsityksesi on rajoittunut, sillä et taida tunnistaa verbin liittomuotoja. Tarvitset lisäosaamista verbeistä voidaksesi opettaa alaluokilla äidinkieltä ja kirjallisuutta.";
    }
}

palautteet.push(Csarake);

var Dsarake = function(){
    var a = T_data_vaarMaara("kieltoverbi")
    if(a < 2){
        return "osaat liittää myös kieltoverbin osaksi verbejä";
    } else if(a < 3){
        return "pohdit ehkä, liittyikö kielto jollakin tavalla verbeihin";
    } else{
        return "et tiedä, mitkä kielteiset ilmaukset kuuluvat verbiin";
    }
}


palautteet.push(Dsarake);
var Esarake = function(){
    var a = T_data_vaarMaara("infinitiivi");
    if(a < 2){
        return "tunnistat infinitiivit verbeiksi";
    } else if(a < 4){
        return "sinulla on käsitys, että on olemassa myös muita kuin persoonamuotoisia verbejä";
    } else if(a < 6){
        return "ettet poimi johdonmukaisesti verbin infinitiivimuotoja tekstistä";
    } else {
        return "verbikäsitykseesi ei kuulu ainakaan johdonmukaista käsitystä infinitiiveistä. Tästä voi muodostua ongelma opetukselle.";
    }
}
palautteet.push(Esarake);


var Fsarake = function(){
    var a = T_data_vaarMaara("partisiippi ei liittom.");
    if(a < 2){
        return "liität myös adjektiivisesti käytetyt partisiipit verbeihin";
    } else if(a < 3) {
        return "sinulle on tunne, että partisiipeilla saattaa olla jokin yhteys verbeihin";
    } else {
        return "ohitat verbien partisiipit";
    }
}
palautteet.push(Fsarake);

var Gsarake = function(){
    var a = T_data_vaarMaara("minen");
    if(a < 2){
        return "pidät myös tekemistä nimeäviä substantiiveja verbeinä.";
    } else if(a < 4){
        return "hapuilet tekemistä kuvaavien substantiivien kohdalla";
    } else {
        return "et sekoita verbejä ja toimimista nimeäviä substantiiveja toisiinsa";
    }
}
palautteet.push(Gsarake);

var Hsarake = function(){
    var a = T_data_vaarMaara("muu teonnimi");
    if(a < 2){
        return "et erota johtamisen ja taivuttamisen rajaa vaan pidät verbistä johdettuja teonnimiä verbeinä";
    } else if(a < 5){
        return "olet epävarma verbistä johdettujen teonnimien kohdalla. Ovatko ne verbejä vai substantiiveja?";
    } else {
        return "et sekoita verbejä ja toimimista nimeäviä substantiiveja toisiinsa";
    }
}
palautteet.push(Hsarake);



luoUlkoPalaute = function(){
    var palauteTeksti = "<p>";
    palauteTeksti += alkuTeksti();

    for(var i = 0; i < palautteet.length; i++){
        var lisays = palautteet[i]();
        if(lisays != "tyhja"){
            palauteTeksti += "<li>";
            palauteTeksti += lisays;
            palauteTeksti += "</li>";
        }
    }
    palauteTeksti +="</ul></p>";

    if(T_data_vaarMaara("hukassa") > 10){
        palauteTeksti = "Vastaustesi perusteella näyttää siltä, että " + Isarake();
    }


    document.getElementById("palaute").innerHTML = palauteTeksti;
}
