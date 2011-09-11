fsg.ge.actor = function() {
	var actor = new fsg.ge.entity();
	
	actor.init = function(image,x,y,scene) {
		this.scene = scene;
		
		var actor = this;
		
		this.image = new Image();
		this.image.onload = function() {
			this.ready = true;
			actor.width = this.width;
			actor.height = this.height;
		};
		if(image) this.image.src = image;
		else this.image.src = 'images/crabe.png';
		
		if(x) actor.setX(x);
		else actor.setX(0);
		
		if(y) actor.setY(y);
		else actor.setY(0);
	};
	
	actor.setX = function(x) {
		this.x = x;
	};
	
	actor.setY = function(y) {
		this.y = y;
	};
	
	actor.draw = function(ctx) {
		if(this.image.ready) ctx.drawImage(this.image,this.x,this.y);
	};
	
	return actor;
};