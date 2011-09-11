fsg.ge.main = function() {
	
	var canvas = document.createElement('canvas');
	var ctx = canvas.getContext('2d');
	canvas.width = 640;
	canvas.height = 480;
	document.getElementById('game').appendChild(canvas);
	
	var game = new fsg.ge.game();
	
	var now = Date.now();
	
	game.init(canvas, ctx, now);
	
	setInterval(function() {
		var time = Date.now();
		game.update(time);
		game.render();
	},1);
};