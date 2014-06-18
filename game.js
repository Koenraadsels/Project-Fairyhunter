//Ik kwam even langs om pizzafoto te zeggen - Koen

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
 


canvas.width = 500;
canvas.height =300;
 
var mySprite = {
    x: 200,
    y: 200,
    width: 50,
    height: 50,
    speed: 200,
    color: '#c00'
};
 
var keysDown = {};
window.addEventListener('keydown', function(e) {
    keysDown[e.keyCode] = true;
});
window.addEventListener('keyup', function(e) {
    delete keysDown[e.keyCode];
});
 
function update(mod) {
    if (37 in keysDown) {
        mySprite.x -= mySprite.speed * mod;
    }
    if (38 in keysDown) {
        mySprite.y -= mySprite.speed * mod;
    }
    if (39 in keysDown) {
        mySprite.x += mySprite.speed * mod;
    }
    if (40 in keysDown) {
        mySprite.y += mySprite.speed * mod;
    }
}
 
function render() {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = mySprite.color;
    ctx.fillRect(mySprite.x, mySprite.y, mySprite.width, mySprite.height);
}
 
function run() {
    update((Date.now() - time) / 1000);
    render();
    time = Date.now();
}
 
var time = Date.now();
setInterval(run, 10);