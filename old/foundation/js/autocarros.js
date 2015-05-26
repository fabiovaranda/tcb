function autocarros(){
    $('#carreiras').transition({ opacity: 0,duration:0 });
    autocarro = [1,2,3,4,6,7,8,14,15,16,18,20,21,37,71,72,149,150];
    var codigo = "";
        for(var j = 0; j < autocarro.length; j++){
            for(var i = 0; i < autocarro[autocarro.length-1]; i++){
                    var nmr = i +1;
                    if(nmr == autocarro[j]){
                    codigo +='<div class="large-4 columns"><button class="button radius" style="width:90%;height:7%;margin-left:5px;" onclick="mostrarCarreira('+ nmr +')">Carreira ' + nmr + '</button></div>';
                    }
            }
        }
    $('#carreiras').transition({ opacity: 1,duration:300 });
    document.getElementById("carreiras").innerHTML = codigo;
}
function mostrarCarreira(nmr){
                $('#carreiras').transition({ opacity: 0,duration:0 });
    
    if(nmr == 3){
                document.getElementById("carreiras").innerHTML = "<h1>Carreira "+ nmr +"</h1><div class='large-12 columns'><img src='img/3c.png'/><img src='img/3t.png'/></div><div class='large-12 columns' style='margin-top:15px;'><button onclick='autocarros();' class='button radius'>Voltar</button></div>";
    }else{
            if(nmr == 4){
                document.getElementById("carreiras").innerHTML = "<h1>Carreira "+ nmr +"</h1><div class='large-12 columns'><img src='img/4c.png'/><img src='img/4t.png'/></div><div class='large-12 columns' style='margin-top:15px;'><button onclick='autocarros();' class='button radius'>Voltar</button></div>";    }else{            
        if(nmr == 6){
                document.getElementById("carreiras").innerHTML = "<h1>Carreira "+ nmr +"</h1><div class='large-12 columns'><img src='img/6c.png'/><img src='img/6l.png'/></div><div class='large-12 columns' style='margin-top:15px;'><button onclick='autocarros();' class='button radius'>Voltar</button></div>";
    }else{
        if(nmr == 7){
                document.getElementById("carreiras").innerHTML = "<h1>Carreira "+ nmr +"</h1><div class='large-12 columns'><img src='img/7b.png'/><img src='img/7t.png'/></div><div class='large-12 columns' style='margin-top:15px;'><button onclick='autocarros();' class='button radius'>Voltar</button></div>";
    }else{
        if(nmr == 8){
                document.getElementById("carreiras").innerHTML = "<h1>Carreira "+ nmr +"</h1><div class='large-12 columns'><img src='img/8t.png'/><img src='img/8v.png'/></div><div class='large-12 columns' style='margin-top:15px;'><button onclick='autocarros();' class='button radius'>Voltar</button></div>";
    }else{
                if(nmr == 16){
                document.getElementById("carreiras").innerHTML = "<h1>Carreira "+ nmr +"</h1><div class='large-12 columns'><img src='img/16a.png'/><img src='img/16c.png'/></div><div class='large-12 columns' style='margin-top:15px;'><button onclick='autocarros();' class='button radius'>Voltar</button></div>";
    }else{
                if(nmr == 18){
                document.getElementById("carreiras").innerHTML = "<h1>Carreira "+ nmr +"</h1><div class='large-12 columns'><img src='img/18c.png'/><img src='img/18eas.png'/></div><div class='large-12 columns' style='margin-top:15px;'><button onclick='autocarros();' class='button radius'>Voltar</button></div>";
    }else{
                    document.getElementById("carreiras").innerHTML = "<h1>Carreira "+ nmr +"</h1><div class='large-12 columns'><img src='img/"+nmr+".png'/></div><div class='large-12 columns' style='margin-top:15px;'><button onclick='autocarros();' class='button radius'>Voltar</button></div>";
    }
    }
                }
        }
            }
        }
    }
    $('#carreiras').transition({ opacity: 1,duration:600 });
}