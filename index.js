const coor=[];
const r=[];
const heading= document.getElementById("heading")
document.addEventListener("click",(event)=>{

    const totalCircle=document.querySelectorAll(".circle")
    if(totalCircle.length===2){

    totalCircle.forEach(circ=>{
        document.body.removeChild(circ);
    })
    coor.length = 0;  // Clear coordinates array
    r.length = 0;  

}
    let  x= event.clientX;
    let y= event.clientY;
    coor.push({x,y});

    console.log("x znd y coorr" ,x,y);
    let radius= Math.floor(Math.random()*100+50);

    console.log("radius",radius);

    r.push(radius)
    const circle= document.createElement("div");
    circle.classList.add("circle");
    circle.style.position="absolute";
    circle.style.left=(x-radius/2)+'px'
    circle.style.top=(y-radius/2)+'px'
    circle.style.width=radius+'px'
    circle.style.height=radius+'px'
    
    document.body.appendChild(circle);

if (coor.length === 2) {
    const x1 = coor[0].x;
    const y1 = coor[0].y;
    const x2 = coor[1].x;
    const y2 = coor[1].y;
    const d = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    const sumr = r[0] + r[1];


    if (sumr > d) {
        console.log("intersecting");
        heading.innerHTML="intersecting"
    }
    else{
        console.log(" NOt intersecting"); 
        heading.innerHTML=" not  intersecting"

    }
}
})