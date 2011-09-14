fsg.ge.player = function() {
	var player = new fsg.ge.actor();
	
	player.update = function(timestamp) {
		this.sprite.moveDown(timestamp);
	};
	
	return player;
};