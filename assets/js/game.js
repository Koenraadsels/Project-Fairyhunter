var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
 
canvas.width = 600;
canvas.height = 400;
 
var player = {
    x: 200,
    y: 200,
    width: 50,
    height: 50,
    speed: 200,
    color: '#c00'
};

// Create the background images
var image = new Image();
image.src = 'assets/images/grasstile.png';
var image2 = new Image();
image2.src = 'assets/images/walltile.jpg';

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

function randomImageArray(){
    
    var mapArray = [];
    var length = x * y;
    var arrayLength = 0;
    while(arrayLength < length){
        var randomImg = Math.floor(Math.random() * 2) * 1;
        if(randomImg == 0){
            mapArray.push('0');
            arrayLength += 1; 
        } else {
            mapArray.push('1');
            arrayLength += 1;   
        }
    }
    return mapArray;
}  

function theArray(){
    var array = randomImageArray();
    return array;
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
        }
    } 
    if (38 in keysDown || 87 in keysDown) {
        if(player.y < 0){
            
        } else {
            player.y -= player.speed * mod;
        }
    }
    if (39 in keysDown || 68 in keysDown) {
        if(player.x > canvas.width - player.width){   
            
        } else {
            player.x += player.speed * mod;
        }
    }
    if (40 in keysDown || 83 in keysDown) {
        if(player.y > canvas.height - player.height){
            
        } else {
            player.y += player.speed * mod;
            
        }
    }
}

// Draw the background
function drawBackground(){
    for(var tileX = 0; tileX < x; tileX ++) {
        for(var tileY = 0; tileY < y; tileY++) {
            var mapArray = randomImageArray();
            for(var i = 0; i < mapArray.length; i++){
                if(mapArray[i] == 0){
                    ctx.drawImage(image, tileX * tileSize,tileY * tileSize , tileSize, tileSize);
                } else {
                    ctx.drawImage(image2, tileX * tileSize,tileY * tileSize , tileSize, tileSize);   
                }
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
 
var time = Date.now();
drawBackground();
setInterval(run, 10);