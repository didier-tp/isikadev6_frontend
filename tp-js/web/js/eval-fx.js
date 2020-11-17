function evaluerFx(){
	var x =  Number( document.getElementById("x").value );
	var fx =  document.getElementById("fx").value;
	res = eval(fx);
	document.getElementById("spanResY").innerHTML = res;
	}
		
