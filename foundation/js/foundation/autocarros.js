function autocarros(){
    $('#carreiras').transition({ opacity: 0,duration:0 });
    autocarro = [1,2,3,4,6,7,8,14,15,16,18,20,21,37,71,72,149,150];
    var codigo = "";
        for(var j = 0; j < autocarro.length; j++){
            for(var i = 0; i < autocarro[autocarro.length-1]; i++){
                    var nmr = i +1;
                    if(nmr == autocarro[j]){
                    codigo +='<div class="large-4 medium-6 small-10 columns"><button class="button radius" style="font-size:0.9em;width:90%;margin-left:5px;" onclick="mostrarCarreira('+ nmr +')">Carreira ' + nmr + '</button></div>';
                    }
            }
        }
    $('#carreiras').transition({ opacity: 1,duration:300 });
    document.getElementById("carreiras").innerHTML = codigo;
}
function mostrarCarreira(nmr){
    $('#carreiras').transition({ opacity: 0,duration:0 });
    
    if(nmr == 3){
        document.getElementById("carreiras").innerHTML = "<h1>Carreira "+ nmr +"</h1><div class='large-12 medium-12 small-12 columns'><img src='foundation/img/3c.PNG'/><img src='foundation/img/3t.PNG'/></div><div class='large-12 columns' style='margin-top:15px;'><button onclick='autocarros();' class='button radius'>Voltar</button></div>";
    }else{
        if(nmr == 4){
            document.getElementById("carreiras").innerHTML = "<h1>Carreira "+ nmr +"</h1><div class='large-12 medium-12 small-12 columns'><img src='foundation/img/4c.PNG'/><img src='foundation/img/4t.PNG'/></div><div class='large-12 columns' style='margin-top:15px;'><button onclick='autocarros();' class='button radius'>Voltar</button></div>";    
		}else{            
			if(nmr == 6){
                document.getElementById("carreiras").innerHTML = "<h1>Carreira "+ nmr +"</h1><div class='large-12 medium-12 small-12 columns'><img src='foundation/img/6c.PNG'/><img src='foundation/img/6l.PNG'/></div><div class='large-12 columns' style='margin-top:15px;'><button onclick='autocarros();' class='button radius'>Voltar</button></div>";
			}else{
				if(nmr == 7){
					document.getElementById("carreiras").innerHTML = "<h1>Carreira "+ nmr +"</h1><div class='large-12 medium-12 small-12 columns'><img src='foundation/img/7b.PNG'/><img src='foundation/img/7t.PNG'/></div><div class='large-12 columns' style='margin-top:15px;'><button onclick='autocarros();' class='button radius'>Voltar</button></div>";
				}else{
					if(nmr == 8){
						document.getElementById("carreiras").innerHTML = "<h1>Carreira "+ nmr +"</h1><div class='large-12 medium-12 small-12 columns'><img src='foundation/img/8t.PNG'/><img src='foundation/img/8v.PNG'/></div><div class='large-12 columns' style='margin-top:15px;'><button onclick='autocarros();' class='button radius'>Voltar</button></div>";
					}else{
						if(nmr == 16){
							document.getElementById("carreiras").innerHTML = "<h1>Carreira "+ nmr +"</h1><div class='large-12 columns'><img src='foundation/img/16a.PNG'/><img src='foundation/img/16c.PNG'/></div><div class='large-12 columns' style='margin-top:15px;'><button onclick='autocarros();' class='button radius'>Voltar</button></div>";
						}else{
							if(nmr == 18){
								document.getElementById("carreiras").innerHTML = "<h1>Carreira "+ nmr +"</h1><div class='large-12 columns'><img src='foundation/img/18c.PNG'/><img src='foundation/img/18eas.PNG'/></div><div class='large-12 columns' style='margin-top:15px;'><button onclick='autocarros();' class='button radius'>Voltar</button></div>";
							}else{
									document.getElementById("carreiras").innerHTML = "<h1>Carreira "+ nmr +
									"</h1><div class='large-12 columns'>"
												+"<img src='foundation/img/"+nmr+".PNG'/>"+
										  "</div><div class='large-12 columns' style='margin-top:15px;'>"+
										  "<button onclick='autocarros();' class='button radius show-for-medium-up'>Voltar</button>"+
										  "<button onclick='autocarros();' class='tiny button radius show-for-small-only'>Voltar</button>"+
										  "</div>";
							}
						}
					}
				}
            }
        }
    }
    $('#carreiras').transition({ opacity: 1,duration:600 });
}