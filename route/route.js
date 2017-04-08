
$(function(){
	getData();
	loadImg();
})
//Global id
const id = sessionStorage.getItem("currentRoute");

function getData(){
	
	$.ajax({url: "http://northack.crystalalarm.se/api/?lati=62.417949189425&longi=17.327530914444&id="+id,
		success: function(result){
			console.log(result);

			fixIcons(result);
			loadDesc(result);
		}
	});
}

function loadImg(){
	document.getElementById("cardImg").setAttribute("src", "img/"+id+".png");
}

function loadDesc(result){
	document.getElementById("spons").innerHTML += result[id].name;
	document.getElementById("dist").innerHTML = "<h5>"+result[id].km+" Meters</h5>";
	
}

function fixIcons(result){
	
	if(result[id].dricka){
		document.getElementById("drinkIcon").style.fill = "#ff55be";
	}else{
		document.getElementById("drinkIcon").style.fill = "#bebebe";
	}
	
	
	if(result[id].kaffe){
		document.getElementById("coffeeIcon").style.fill = "#ff55be";
	}else{
		document.getElementById("coffeeIcon").style.fill = "#bebebe";
	}
	
	
	if(result[id].vatten){
		document.getElementById("waterIcon").style.fill = "#ff55be";
	}else{
		document.getElementById("waterIcon").style.fill = "#bebebe";
	}
}