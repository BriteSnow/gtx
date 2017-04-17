var Gtx = window.Gtx;

document.addEventListener("DOMContentLoaded", function(event) {

	var canvas1El = document.getElementById("canvas-1");

	var g1 = Gtx(canvas1El);

	var w = 600, h = 400;
	g1.canvas().width = w;
	g1.canvas().height = h;


	g1.setFillStyle("#FF0000").fillRect(0, 0, w, h);

	g1.moveTo(0, 0).lineTo(w, h).stroke();


	drawCanvas2();


	window.addEventListener("resize", function(){
		console.log("resizing");	
		drawCanvas2();
	});
});


function drawCanvas2(){
	var g2 = Gtx(document.getElementById("canvas-2"));

	g2.fitParent();
	var w2 = g2.canvas().width;
	var h2 = g2.canvas().height;

	g2.setFillStyle("#0000FF").fillRect(0, 0, w2, h2);

	g2.moveTo(0, 0).lineTo(w2, h2).stroke();
}	