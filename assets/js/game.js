var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
 
canvas.width = 600;
canvas.height = 400;
 
var player = {
    x: 200,
    y: 200,
    width: 30,
    height: 30,
    speed: 200,
    color: '#c00'
};

// Create the background images
var image = new Image();
image.src = 'assets/images/grasstile.png';
var image2 = new Image();
image2.src = 'assets/images/walltile.jpg';

// Set the map and tile size
var tileSize = 32;
var x = 20;
var y = 15;

var randomImage = function(){
    var randomImg = Math.floor(Math.random() * 2) * 1;
    if(randomImg == 0){
        return image;   
    } else {
        return image2;   
    }
}

var map = [];

function randomImageArray(){
    
    var mapArray = [];
    var length = x * y;
    var arrayLength = 0;
    while(arrayLength < length){
        var randomImg = Math.floor(Math.random() * 2) * 1;
        if(randomImg == 0){
            //mapArray.push('0');
            map.push(0);
            arrayLength += 1; 
        } else {
           // mapArray.push('1');
            map.push(1);
            arrayLength += 1;   
        }
    }
   // return mapArray;
  //  map = mapArray;
} 


var keysDown = {};
window.addEventListener('keydown', function(e) {
    keysDown[e.keyCode] = true;
});
window.addEventListener('keyup', function(e) {
    delete keysDown[e.keyCode];
});

function update(mod) {
    if (37 in keysDown || 65 in keysDown) {
        if(player.x < 0){
            
        } else {
            player.x -= player.speed * mod;
            ctx.clearRect(player.x, player.y, player.width, player.height);
            drawBackground();
        }
    } 
    if (38 in keysDown || 87 in keysDown) {
        if(player.y < 0){
            
        } else {
            player.y -= player.speed * mod;
            ctx.clearRect(player.x, player.y, player.width, player.height);
            drawBackground();
        }
    }
    if (39 in keysDown || 68 in keysDown) {
        if(player.x > canvas.width - player.width){   
            
        } else {
            player.x += player.speed * mod;
            ctx.clearRect(player.x, player.y, player.width, player.height);
            drawBackground();
        }
    }
    if (40 in keysDown || 83 in keysDown) {
        if(player.y > canvas.height - player.height){
            
        } else {
            ctx.clearRect(player.x, player.y, player.width, player.height);
            drawBackground();
            player.y += player.speed * mod;
            
        }
    }
}

// Draw the background
function drawBackground() {
    var tileX,
        tileY,
        imageIdx;

    for (tileX = 0; tileX < x; tileX ++) {
        for (tileY = 0; tileY < y; tileY++) {
            imageIdx = map[tileX * tileY];
            if (imageIdx === 0) {
                ctx.drawImage(image, tileX * tileSize,tileY * tileSize , tileSize, tileSize);
            } else if (imageIdx === 1) { 
                ctx.drawImage(image2, tileX * tileSize,tileY * tileSize , tileSize, tileSize);   
            }
        }
    }
}

// Render the player
function render() {    
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

// Run loop
function run() {
    update((Date.now() - time) / 1000);
    render();
    time = Date.now();
}

function initialize(){
    randomImageArray();
    drawBackground();
}
 
var time = Date.now();
setInterval(run, 10);