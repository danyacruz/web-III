//general data
var canvas = document.getElementById('canvas'); 
var ctx = canvas.getContext('2d'); 		
var north = "North"; 
var south = "South"; 
var east = "East"; 
var west = "West"; 
var northW = "NW"; 
var southW = "SW"; 
var northE = "NE"; 
var southE = "SE"; 

//appareance
ctx.font = "20px san-serif"; 
ctx.fillStyle = "rgb(255, 198, 27)"; // text color 
ctx.strokeStyle = "rgb(39, 59, 122)"; // line color
ctx.lineWidth = 2 // line width


//circle path
ctx.beginPath(); //beginning of circle the path
ctx.arc(300, 300, 30, 0, Math.PI*2); //circle size
ctx.fill(); //circle full
ctx.closePath(); //end of the circle path

//main path
ctx.beginPath(); //beginning of the main path 
//north
ctx.moveTo(300,50); 
ctx.lineTo(270,270); 
ctx.moveTo(300,50); 
ctx.lineTo(330,270); 
//west
ctx.moveTo(270,270); 
ctx.lineTo(50,300); 
ctx.moveTo(270,330);
ctx.lineTo(50,300);
//south
ctx.moveTo(300,550);
ctx.lineTo(270,330);
ctx.moveTo(300,550);
ctx.lineTo(330,330);
//east
ctx.moveTo(550,300);
ctx.lineTo(330,270); 
ctx.moveTo(550,300);
ctx.lineTo(330,330);

//transversal lines
ctx.moveTo(150,150);
ctx.lineTo(450,450); 
ctx.moveTo(450,150);
ctx.lineTo(150,450);
	
//main title of cardinals points
ctx.fillText(north,275,35);
ctx.fillText(west,5,305);
ctx.fillText(east,555,305);
ctx.fillText(south,275,580);
		
//secundary tittles of cardinals points
ctx.fillText(northW,125,135);
ctx.fillText(northE,450,135);
ctx.fillText(southW,125,475);
ctx.fillText(southE,450,475);

//end of the main path		
ctx.closePath(); 
ctx.stroke();