/*
 * Image is the spritesheet to be used
 * Cyclerate is number of frames per second on avg you want to display
 * FrameCount is the number of frames per full animation
 * DirectionCount is the number of direcitons the actor can move:
 * 		moveUp
 * 		moveDown
 * 		moveLeft
 * 		moveRight - 4
 * 		moveUpLeft
 * 		moveUpRight
 * 		moveDownLeft
 * 		moveDownRight - 8
 */

fsg.sprite = function(actor,image,cyclerate,frameCount,directionCount) {
	var sprite = Object.create(null);
	
	sprite.actor = actor;
	
	sprite.image = new Image();
	sprite.image.ready = false;
	sprite.image.onload = function() {
		this.ready = true;
	};
	sprite.image.src = image;
	
	sprite.lastframe = Date.now();
	
	sprite.frame = {};
	
	/*
	 * Cycle is how many seconds between frames is wanted
	 */
	sprite.cycle = 1000/cyclerate;
	
	sprite.frameCount = frameCount;
	
	sprite.directionCount = directionCount;
	
	/*
	 * Takes the timestamp and sees if a new frame should be used
	 */
	
	sprite.moveUp = function(timestamp) {
		var delta = timestamp - this.lastframe;
		if(delta > this.cycle) {
			if(this.frame.y == 0) {
				this.frame.x = (this.frame.x+1)%this.frameCount;
			} else {
				this.frame = {x:0,y:0};
			}
			this.lastframe = timestamp;
		}
		this.getLocation();
	};
	
	sprite.moveDown = function(timestamp) {
		var delta = timestamp - this.lastframe;
		if(delta > this.cycle) {
			if(this.frame.y == 1) {
				this.frame.x = (this.frame.x+1)%this.frameCount;
			} else {
				this.frame = {x:0,y:1};
			}
			this.lastframe = timestamp;
		}
		this.getLocation();
	};
	
	sprite.moveLeft = function(timestamp) {
		var delta = timestamp - this.lastframe;
		if(delta > this.cycle) {
			if(this.frame.y == 2) {
				this.frame.x = (this.frame.x+1)%this.frameCount;
			} else {
				this.frame = {x:0,y:2};
			}
			this.lastframe = timestamp;
		}
		this.getLocation();
	};
	
	sprite.moveRight = function(timestamp) {
		var delta = timestamp - this.lastframe;
		if(delta > this.cycle) {
			if(this.frame.y == 3) {
				this.frame.x = (this.frame.x+1)%this.frameCount;
			} else {
				this.frame = {x:0,y:3};
			}
			this.lastframe = timestamp;
		}
		this.getLocation();
	};
	
	sprite.moveStop = function(timestamp) {
		this.frame.x = 0;
		this.lastframe = timestamp;
	};
	
	sprite.getLocation = function() {
		if(this.frame) {
			this.dx = this.frame.x*this.image.width/this.frameCount;
			this.dy = this.frame.y*this.image.height/this.directionCount;
		}
	};
	
	sprite.draw = function(ctx) {
		if(this.image.ready && this.dx != null && this.dy != null) {
			ctx.drawImage(this.image,
				this.dx, this.dy,
				this.actor.width, this.actor.height,
				this.actor.x, this.actor.y,
				this.actor.width, this.actor.height);
		}
	};
	
	return sprite;
};