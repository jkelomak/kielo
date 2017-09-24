    //Testidata

    var t_sanat = ["sanat", "Minä", "olen", "viisas", "ja", "sonni."];
    var t_sub = ["oikein", "true", "false", "false", "false", "true"];
    var t_virhe = ["virhe1", "1", "0", "0", "1.5", "1.7"];



    //Objektin määrittely

    //var t_taulukko = [t_sanat, t_sub, t_virhe];
    var T_data = {};
    var k_data = [];

    T_data.sanat = [];
    for(var i = 1; i < t_taulukko[0].length; i++){
        T_data.sanat.push(t_taulukko[0][i]);
    }

    T_data.oikVast = [];
    for(var i = 1; i < t_taulukko[1].length; i++){
        T_data.oikVast.push(t_taulukko[1][i] == "1");
    }

    T_data.virheNimet = [];
    for(var i = 2; i < t_taulukko.length; i++){
        T_data.virheNimet.push(t_taulukko[i][0]);
    }

    T_data.virheet = [];
    for(var i = 2; i < t_taulukko.length; i++){
        T_data.virheet.push([]);
        for(var j = 1; j < t_taulukko[i].length; j++){
            T_data.virheet[i - 2].push(parseFloat(t_taulukko[i][j]));
        }
    }


    T_data.oikVektori = [];

    var luoOikVektori = function(){
        for(var i = 0; i < T_data.oikVast.length; i++){
            var totta = (T_data.oikVast[i] && k_data[i]);
            var totta2 = (!T_data.oikVast[i] && !k_data[i]);
            var totta3 = totta || totta2;
            T_data.oikVektori.push(totta3);
        }
    }

    T_data.vaarVektori = [];
    for(var i = 0; i < T_data.oikVast.length; i++){
        T_data.vaarVektori.push(!T_data.oikVektori[i]);
    }


    //apumetodit

    T_data_virheNumero = function(virhe){
        var virheNumero = -1;
        for(var i = 0; i < T_data.virheNimet.length; i++){
            if(T_data.virheNimet[i].includes(virhe)){
                virheNumero = i;
            }
        }
        return virheNumero;
    };


    //datametodit

    T_data_oikeinMaara = function() {
        var oikein = 0;
        for(var i = 0; i < T_data.oikVektori.length; i++){
            if(T_data.oikVektori[i]){
                oikein++;
            }
        }
    }

    T_data_vaarMaara = function(){
        return T_data.vaarVektori.length - T_data_oikMaara();
    };

    T_data_oikMaara = function(virhe){
        if(arguments.length == 0){
            var maara = 0;
            for(var i = 0; i < T_data.oikVektori.length; i++){
                if(T_data.oikVektori[i]){
                    maara++;
                }
            return maara;
            }
        }

        var maara = 0;
        for(var i = 0; i < T_data.virheet[T_data_virheNumero(virhe)].length; i++){
            if(T_data.oikVektori[i] && !(T_data.virheet[T_data_virheNumero(virhe)][i] == "0")){
                maara++;
            }
        }
        return maara;
    };

    T_data_vaarMaara = function(virhe){
        var maara = 0;
        for(var i = 0; i < T_data.virheet[T_data_virheNumero(virhe)].length; i++){
            if(!T_data.oikVektori[i] && !(T_data.virheet[T_data_virheNumero(virhe)][i] == "0"))
                maara++;
        }
        return maara;
    };

    T_data_kokMaara = function(virhe){
        var maara = 0;
        for(var i = 0; i < T_data.virheet[T_data_virheNumero(virhe)].length; i++){
            if(!(T_data.virheet[T_data_virheNumero(virhe)][i] == "0"))
                maara++;
        }
        return maara;
    };

    T_data_oikSumma = function(virhe){
        var maara = 0;
        for(var i = 0; i < T_data.virheet[T_data_virheNumero(virhe)].length; i++){
            if(T_data.oikVektori[i] && !(T_data.virheet[T_data_virheNumero(virhe)][i] == "0"))
                maara+= T_data.virheet[T_data_virheNumero(virhe)][i];
        }
        return maara;
    };

    T_data_vaarSumma = function(virhe){
        var maara = 0;
        for(var i = 0; i < T_data.virheet[T_data_virheNumero(virhe)].length; i++){
            if(!T_data.oikVektori[i] && !(T_data.virheet[T_data_virheNumero(virhe)][i] == "0"))
                maara+= T_data.virheet[T_data_virheNumero(virhe)][i];
        }
        return maara;
    };

    T_data_kokSumma = function(virhe){
        var maara = 0;
        for(var i = 0; i < T_data.virheet[T_data_virheNumero(virhe)].length; i++){
            if((T_data.virheet[T_data_virheNumero(virhe)][i] == "0"))
                maara+= T_data.virheet[T_data_virheNumero(virhe)][i];
        }
        return maara;
    };
