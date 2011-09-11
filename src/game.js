fsg.ge.game = function() {
	var game = Object.create(null);
	
	game.init = function(canvas, ctx, timestamp) {
		this.canvas = canvas;
		this.ctx = ctx;
		this.time = timestamp;
		

		this.placeholder = new Image();
		this.placeholder.ready = false;
		this.placeholder.onload = function() {
			this.ready = true;
		};
		this.placeholder.src = "images/placeholder.png";
		
		this.scenes = [];
		
		this.scene = new fsg.ge.scene();
		this.scene.init(this);
		this.actor = new fsg.ge.actor();
		this.actor.init(null,64,64,this.scene);
		this.scene.addActor(this.actor);
		this.scenes.push(this.scene);
		this.currentScene = 0;
	};
	
	game.update = function(timestamp) {
		this.delta = timestamp - this.time;
	};
	
	game.render = function() {
		if(this.placeholder.ready == true) {
			this.ctx.drawImage(this.placeholder,0,0);
		}
		this.ctx.fillStyle = "rgb(250,250,250)";
		this.ctx.font = "bold 20px Courier New";
		this.ctx.textAlign = "center";
		this.ctx.textBaseline = "top";
		this.ctx.fillText("Placeholder", this.canvas.width/2, this.canvas.height/2);
		
		this.scenes[this.currentScene].draw(this.ctx);
		
	};
	
	return game;
};