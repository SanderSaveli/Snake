export default function SetFieldSize(width, height){
    let canvas = document.getElementById("mainCanvas");
    canvas.setAttribute("width", width * 16);
    canvas.setAttribute("height", height * 16);
    canvas.style.backgroundSize= (320/width)+"px "+(320/height)+"px";
}