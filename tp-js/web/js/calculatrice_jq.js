function calculer(operation){
	var valA = Number($('#inputA').val());
	var valB = Number($('#inputB').val());
	var res=0;
	switch(operation){
		case '+': res=valA + valB; break;
		case '*': res=valA * valB; break;
		case '-': res=valA - valB; break;
		case '/': res=valA / valB; break;
	  }
	  $('#spanRes').html(res);
	  ajouterDansHistorique(valA,valB,operation,res)
}

function ajouterDansHistorique(a,b,op,res){
	var calcul=""+a+" "+op+" "+b+" = "+res;
	$('#ulHistorique').append("<li>"+calcul+"</li>");
}

$(function() {
   //code déclenché dès le chargemennt de la page html:
   //$("#spanRes").html("0+0=0");
   
   $('#btnAdd').on("click",function(){ calculer('+');  });
   $('#btnMoins').on("click",function(){ calculer('-');  });
   $('#btnMult').on("click",function(){ calculer('*');  });
   $('#btnDiv').on("click",function(){ calculer('/');  });
 
   $('#cbHisto').on("change",function(evt){ 
       var coche = evt.target.checked;
      $('#ulHistorique').css("display",coche?"block":"none");
   });
});