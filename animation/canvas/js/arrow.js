function Arrow(){
	this.x = 0;
	this.y = 0;
	this.rotation = 0;
	this.color = '#fff';
};

Arrow.prototype.draw = function(context){
	context.save();
	context.translate(this.x,this.y);
	context.rotate(this.rotation);
	context.fillStyle = this.color;
	context.lineWidth = 5;
	context.beginPath();
	context.moveTo(-50,-25);
	context.lineTo(0,-25);
	context.lineTo(0,-50);
	context.lineTo(50,0);
	context.lineTo(0,50);
	context.lineTo(0,25);
	context.lineTo(-50,25);
	context.closePath();
	context.stroke();
	context.fill();
	context.restore();
};

