const canvas = document.getElementById("jsCanvas");

let painting = false;

function stopPainting(){
    painting = false;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY
    console.log(x, y);

}

function onMouseDown(event){
    painting = true; /* 마우스를 클릭했을 때 painting은 true가 될 것이다  
       그리고 마우스를 떼면 painting은 다시 false로 설정돼야 한다.*/
}

function onMouseUp(event){
    stopPainting();  /*mouseleave와 같이 처리하지 않은 건 
     나중에 이곳엔 line을 그리는 기능이 필요하기 때문이다.*/
}



if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseenter", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", stopPainting);
    
}