const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const save = document.getElementById("jsSave");


canvas.width = "700";
canvas.height = "700";

let drawing = false;
let filling = false;

ctx.lineWidth = 2.5;
ctx.strokeStyle = 'black';
ctx.fillStyle = 'black';

function stopDrawing(){
    drawing = false;
}

function onMouseMove(a){
   //offsetX , offsetY
    const x = a.offsetX;
    const y = a.offsetY;
   // console.log(x, y);
   if(!drawing){
      ctx.beginPath();
      ctx.moveTo(x, y);
   } else {
      ctx.lineTo(x, y);
      ctx.stroke();
   }
}

function onMouseDown(){
    drawing = true;
}

function handleColorClick(a){
     const colorTarget = a.target.style.backgroundColor;
     ctx.strokeStyle = colorTarget;
     ctx.fillStyle = colorTarget;

    }

function handleRange(a){
   //console.log(a);
    //a.target.value;
    const rangeValue =  a.target.value;
    ctx.lineWidth = rangeValue;

}

function handleMode(){
    if(!filling){
        filling = true;
        mode.innerText = "fill"
    }else{
        filling = false;
        mode.innerText = "draw";
    }
}

function clickCanvas(a){
   if(!filling) {
       ctx.fillRect(0, 0, canvas.width, canvas.height);
   }
}

function handleCM(a){
   a.preventDefault();
}

function handleSave(){
    const image = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = image;
    link.download = "download";
    link.click();
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseleave", stopDrawing);
    canvas.addEventListener("click", clickCanvas);
    canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach(function(color){
    color.addEventListener("click", handleColorClick);
});

if(range){
    range.addEventListener("input", handleRange);
}

if(mode){
    mode.addEventListener("click", handleMode);
}

if(save){
    save.addEventListener("click", handleSave);
}

