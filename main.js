var mouseevent = 'empty';
var last_postion_x, last_postion_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');

colour = 'black';
width_line = 1;

canvas.addEventListener('mousedown', my_mouse_down);
function my_mouse_down(e) {
mouseevent = 'mouseDown';
colour = document.getElementById('colour').value;
width_line = document.getElementById('width').value
}

canvas.addEventListener('mousemove', my_mouse_move);
function my_mouse_move (e) {
current_postion_x = e.clientX - canvas.offsetLeft;
current_postion_y = e.clientY - canvas.offsetTop;

if(mouseevent == 'mouseDown')
{
ctx.beginPath();
ctx.strokeStyle = colour;
ctx.lineWidth = width_line;
console.log(last_postion_x, last_postion_y);
ctx.moveTo(last_postion_x, last_postion_y);
ctx.lineTo(current_postion_x, current_postion_y);
ctx.stroke();
}
last_postion_x = current_postion_x;
last_postion_y= current_postion_y;
}

canvas.addEventListener('mouseup', my_mouse_up);
function my_mouse_up(e) {
mouseevent = 'mouseUp';
}

canvas.addEventListener('mouseleave', my_mouse_leave);
function my_mouse_leave(e) {
mouseevent = 'mouseLeave';
}

function clear() {
ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
}