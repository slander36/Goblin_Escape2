fsg.ge.scene = function() {
	var scene = Object.create(null);
	
	scene.init = function(game) {
		this.game = game;
		
		//this.subscribers = [];
		//this.subscribers.push(game);
		
		this.actors = [];
		
		this.map = [];
		
		this.collision = [];
	};
	
	scene.addActor = function(actor) {
		// add a check to make sure that actor doesn't currently
		// exist in the scene first
		this.actors.push(actor);
	};
	
	scene.draw = function(ctx) {
		for(i in this.actors) {
			this.actors[i].draw(ctx);
		}
	};
	
	return scene;
};