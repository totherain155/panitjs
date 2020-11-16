const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName("jsColor");


canvas.width = "700";
canvas.height = "700";
//google canvas context mdn
ctx.lineWidth = 2.5;
ctx.strokeStyle = 'black';

let drawing = false;

function stopPainting(){
    drawing = false;
}

function onMouseMove(event){
   //offsetX  offsetY
   const x = event.offsetX;
   const y = event.offsetY;
  if(!drawing){
    //console.log("make your path", x, y);
    ctx.beginPath();
    ctx.moveTo(x, y);

   }else{
     ctx.lineTo(x, y);
     ctx.stroke();
   }
}

function onMouseDown(){
    drawing = true;
}

function clickHandleColors(event){
   //console.log(event.target.style.backgroundColor);
    const divColor = event.target.style.backgroundColor;
     ctx.strokeStyle = divColor;
}



if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach(function(color){
    color.addEventListener("click", clickHandleColors);
})