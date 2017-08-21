function preload() {
   fontRegular = loadFont("UbuntuMono-Regular.ttf");
}

function setup() {
    var cnv = createCanvas(1200, 650);
    background(206, 188,209, 255);
    cnv.position((windowWidth - width) / 2, 0);
    cnv.parent("app");
    textSize(20);
    textFont(fontRegular);
    frameRate(15);
}

var currScreen = 1;


function draw() {
    
    //setup for draw function
    fill(216, 200,219);
    rect(0,0, 1200, 800);
    fill( 0);
    
    fill(240, 220, 180);
    rect(740,20,430,610);
    fill(0)
    
    
    //erinäkymien vaihtuminen
    
    //aloitussivu
    if(currScreen === 0){
        text(esittelyteksti, 50, 50, 700, 700);
        aloitaNappula.draw();
        harjoitusNappula.draw();
    }
    
    //harjoitussivu
    if(currScreen === 1){
        for(var i=0; i < hKentta.napit.length; i++){
            if(i < 0){
                textSize(30);
                merkkiH = 21+4;
                merkkiW = 15;
    
            }
            if(i === 0){
                textSize(20);
                merkkiH = 14 + 4;
                merkkiW = 10;
            }
            hKentta.napit[i].drawsl();
        }
        
        lahdeTeksti();
        //testipalautaNappula.draw();
        //palautaNappula.draw();
        //palautaNappula2.draw();
        palautaNappula3.draw();
        harjoitusTeksti();
    }
    
    //toinen testisivu
    if(currScreen === -2){
        for(var i=0; i < hKentta.napit.length; i++){
            if(i < 5){
                textSize(30);
                merkkiH = 21+4;
                merkkiW = 15;
    
            }
            if(i === 5){
                textSize(20);
                merkkiH = 14 + 4;
                merkkiW = 10;
            }
            hKentta.napit[i].drawsl();
        }
        
        for(var i = 0; i < T_data.oikVast.length; i++){
            text(T_data.oikVast[i], 790, 40 +20*i);
            text(k_data[i], 740, 40 + 20*i);
            text(T_data.oikVektori[i], 690, 40 + 20*i);
        }
        
        
        
        text(konkrEhto(), 880, 50, 700, 700);
        
        text(T_data_kokMaara("konkr") + " kokmaara", 880, 100, 700,700);
        
        text(T_data_virheNumero("konkr"), 880, 200, 700, 700);
        
        text(T_data.virheet[0][0], 880, 250, 700, 700);
        text(T_data_oikMaara("konkr") + " oikmaara", 880, 300);
        text(T_data_vaarMaara("konkr") + " vaarmaara", 880, 350);
        text(T_data_oikSumma("konkr") + " oiksumma", 880, 400);
        
    }
    
    //palaute+harjoitussivu
    if(currScreen === 2){
        for(var i=0; i < hKentta.napit.length; i++){
            if(i < 5){
                textSize(30);
                merkkiH = 21+4;
                merkkiW = 15;
    
            }
            if(i === 5){
                textSize(20);
                merkkiH = 14 + 4;
                merkkiW = 10;
            }
            hKentta.napit[i].drawsl();
        }
        
        pKentta.kirjoitaPalaute();
    }
    
    //palautekokoruutu
    if(currScreen === 3){
        fill(216, 200,219);
        rect(0,0, 1200, 800);
        fill( 0);
        pKentta2.kirjoitaPalaute();
    }
    
    //palautealla
    if(currScreen === 4){
        for(var i=0; i < hKentta.napit.length; i++){
            if(i < 0){
                textSize(30);
                merkkiH = 21+4;
                merkkiW = 15;
    
            }
            if(i === 0){
                textSize(20);
                merkkiH = 14 + 4;
                merkkiW = 10;
            }
            hKentta.napit[i].drawsl();
        }
        sublinkki.draw();
        partisiippilinkki.draw();
        lahdeTeksti();
        
        palauteTekstiLyhyt();
    }
    
}

function mouseClicked() {
    //console.log("painuu");
    if(currScreen === 0){
        if(aloitaNappula.isInside(mouseX, mouseY)){
            console.log("jsesejje");
            currScreen = 1;
        }
        
        if(harjoitusNappula.isInside(mouseX, mouseY)){
            currScreen = -1;
        }
    }
    
    if(currScreen === 1){
        for(var i=0; i < hKentta.napit.length; i++){
            if(hKentta.napit[i].isInside(mouseX, mouseY)){
                hKentta.napit[i].pressed();
            }
        }
        /*
        if(testipalautaNappula.isInside(mouseX, mouseY)){
            luoK_data();
            currScreen = -2;
            
        }
        if(palautaNappula.isInside(mouseX, mouseY)){
            luoK_data();
            pKentta.luoPalaute();
            currScreen = 2;
        }
        if(palautaNappula2.isInside(mouseX, mouseY)){
            luoK_data();
            pKentta2.luoPalaute();
            currScreen = 3;
        }
        */
        if(palautaNappula3.isInside(mouseX, mouseY)){
            luoK_data();
            currScreen = 4;
            luoUlkoPalaute();
            T_data_logadjektiivi();
        }
    }
    
    if(currScreen === 4){
        if(sublinkki.isInside(mouseX, mouseY)){
            window.open("https://fi.wikipedia.org/wiki/Substantiivi");
        }
        if(partisiippilinkki.isInside(mouseX, mouseY)){
            window.open("https://fi.wikipedia.org/wiki/Partisiippi");
        }
    }
    

    return false;
}
