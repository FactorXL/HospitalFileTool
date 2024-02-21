"use strict";

function showCard(qq){
	
	//alert(qq.id);
	if($("#"+qq.id).is(':checked')==true){
		$("#"+qq.id+"Card").show();
	}else{
		$("#"+qq.id+"Card").hide();
	
	};

}


