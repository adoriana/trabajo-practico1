//Inspirado en los trabajos de Vera Molnár.
function setup() {
    createCanvas(512, 512);
  }
  
  function draw() {
    console.log("x:" + mouseX + "y:" + mouseY);
     background(0);
    //background(204, 204, 179); gris clarito alternativo
    //cajas
    strokeWeight(1);
    stroke(0);
  
    rect(57, 120, 169, 130);
    fill(191);
    rect(280, 120, 169, 130);
    fill(217);
    rect(57, 291, 169, 130);
    fill(140);
    rect(280, 291, 169, 130);
    fill(64);
    //líneas
    line(140, 192, 370, 192);
    line(140, 192, 263, 286);
    line(263, 286, 307, 220);
    line(307, 220, 140, 360);
    line(140, 360, 370, 360);
    //lineas centrales
    stroke(244);
    line(230, 50, 12, 262);
    line(12, 262, 253, 462);
    line(253, 462, 484, 262);
  
    line(484, 262, 230, 50);
    //izq
    line(12, 262, 184, 48);
    line(12, 262, 134, 37);
    line(12, 262, 84, 31);
    //der
    line(253, 462, 404, 272);
    line(253, 462, 366, 262);
    line(253, 462, 321, 260);
  }
  