

$(document).ready(function(){

	initGrid(16); 
	sketch(); 
	$("#reset").click(function(){
	$("#container").empty(); 
	var newSize = prompt("How large do you want the grid?"); 
	
	initGrid(newSize); 
	var dimensions = 640/newSize; 
	$('.grid').css({'height': dimensions + 'px', 'width': dimensions + 'px'});
	sketch(); 
	
	
	
})

}); 




function initGrid(size){
    
    
    for(var i=0; i<size; i++){
	for(var j=0; j<size; j++){

      		$("#container").append("<div class='grid'></div>");
    }; 
  }; 
}; 






function sketch(){

	$(".grid").on("mouseenter", function(){
		$(this).css('background', getColor()); 
});

}; 


function getColor(){
	var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



