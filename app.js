const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");


const INITIAL_COLOR = "#2c2c2c" // 반복하게 될 때 이런식으로 변수를 설정한다.
const CANVAS_SIZE = 700;


canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;


ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE); // CANVAS의 초기화를 시켜준다.

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;




let painting = false;
let filling = false;


function stopPainting(){
    painting = false;
}

function startPainting(){
   painting = true;
}




function onMouseMove(event){
   const x = event.offsetX;
   const y = event.offsetY;
   if(!painting){
       ctx.beginPath();
       ctx.moveTo(x, y)
   }else{
       ctx.lineTo(x, y);
       ctx.stroke();  
   }

}

function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleRangeChange(event){
    const size = event.target.value;
    ctx.lineWidth = size; 
    
}

function handleCanvasClick(){
   if(filling){
       ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
   }

}


function handleModeClick(event){
   if(filling === false){
       filling = true; 
       mode.innerText = "paint";
       
   }else {
        filling = false; 
       mode.innerText = "fill";
   }
}         

function handleContextMenu(event){
    event.preventDefault();
}

function handleSaveClick(){
    const image = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = image;   //href는 image(url)가 되어야 한다.
    link.download = "PainJs[🎨]"
    link.click();
}


if(canvas){
       canvas.addEventListener("mousemove", onMouseMove);
       canvas.addEventListener("mousedown", startPainting);
       canvas.addEventListener("mouseup", stopPainting);
       canvas.addEventListener("mouseleave", stopPainting);
       canvas.addEventListener("click", handleCanvasClick);   
       canvas.addEventListener("contextmenu", handleContextMenu);     
}

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick))

if(range){
    range.addEventListener("input", handleRangeChange)
}

if(mode){
    mode.addEventListener("click", handleModeClick)
}

if(saveBtn){
    saveBtn.addEventListener("click", handleSaveClick);
}