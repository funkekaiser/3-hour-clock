function setup() {
  createCanvas(windowWidth, windowWidth/2);
  angleMode(DEGREES);
  textAlign(CENTER);
  textFont('Times New Roman');
  
  //smooth seconds
  //let s = second();
  //while (s === second()) {
    // do nothing until the second changes
  //}
  // Once the second increments, store the current millis
  //millisoff = millis();
  
}

const names = [];

//latin
names.push("a⅛", "p⅛", "a⅜", "p⅜", "a⅝", "p⅝", "a⅞", "p⅞")

//greek
//names.push("p⅛", "m⅛", "p⅜", "m⅜", "p⅝", "m⅝", "p⅞", "m⅞")

let sectionStyle = true;

function draw() {
  background("black");
  
  //Header
  push()
  translate(width/2, height*0.1)
  textSize(width/20);
  fill('white');
  text("3h Clock", 0, 0)
  pop()
  
  //clocks
  sectionClock(width/4*3, height/2);
  clock(width/4, height/2);
  digitalClock();
}

function mouseClicked() {
  if (mouseX > width/2) {
    sectionStyle = !sectionStyle;
    //print(sectionStyle);
  }
}

function button(x, y){
  push();
  translate(x, y);
  fill("black");
  circle(0, 0, width/100);
  pop();
}

function digitalClock() {
  push()
  section = Math.floor(hour()/3)
  
  translate(width/2, height*0.975)
  
  
  if (second() < 10) {
    s = "0" + second()
  } else {
    s = second()
  }
  
  if (minute() < 10) {
    m = "0" + minute()
  } else {
    m = minute()
  }
  
  
  let h = hour()%3;
  stroke(0)
  strokeWeight(0.2);
  fill('white');
  textSize(width/20);
  text(h + ":" + m + ":" + s + " " + names[section] , 0, 0)
  
  
  
  pop()
}

function getFloatHour() {
    let h1 = hour();         // Current hour (0-23)
    let m1 = minute();       // Current minute (0-59)
    let s1 = second();       // Current second (0-59)

    // Convert minutes and seconds into a fraction of an hour
    let floatHour = h1 + (m1 / 60) + (s1 / 3600);
    return floatHour;
}

function clock(x, y){
  push();
  let ms = millis()%1000;
  let secondAngle = map(second(), 0, 60, 0, 360);
  let minuteAngle = map(minute() + second()/60, 0, 60, 0, 360);
  let eightHourAngle = map(getFloatHour(), 0, 3, 0, 360);
  
  //smooth seconds
  // fractionOfSecond goes from 0.0 up to (just before) 1.0
  //let fractionOfSecond = ((millis() - millisoff) % 1000) / 1000; 

  // totalSeconds is the integer second + the fraction
  //let totalSeconds = second() + fractionOfSecond; // e.g. 12.45, 12.78, etc.

  // Then convert 0..60 range into 0..360 degrees
  //let secondAngle = map(totalSeconds, 0, 60, 0, 360);
  
  //setup
  translate(x, y);
  push()
  strokeWeight(0.5);
  circle(0, 0, y*2*0.9);
  pop()
  
  
  
  //text setup
  textSize(width/20);
  const textSpace = -y*0.6;
  const secondRadius = -y*0.8;
  const minuteRadius = -y/4*3*0.75;
  const hourRadius = -y*0.4;
  
  push()
  text("III", 0, textSpace)
  pop()
  
  push()
  rotate(120)
  text("I", 0, textSpace)
  pop()
  
  push()
  rotate(240)
  text("II", 0, textSpace)
  pop()
  
  //minutes
  push();
  strokeWeight(width/300);
  rotate(minuteAngle);
  line(0, 0, 0, minuteRadius);
  pop();
  
  //hour
  push();
  strokeWeight(width/200);
  rotate(eightHourAngle);
  line(0, 0, 0, hourRadius);
  pop();
  
  //seconds
  push();
  strokeWeight(width/600);
  stroke('red');
  //color(red);
  rotate(secondAngle);
  line(0, 0, 0, secondRadius*0.97);
  pop();
  
  // Tick markers around perimeter of clock
  push();
  strokeWeight(width/200);
  for (let ticks = 0; ticks < 60; ticks += 1) {
    point(0, -secondRadius);
    rotate(6);
  }
  pop();
  
  pop();
  
  button(width/4, height/2);
}

function sectionClock(x, y){
  push()
  let eightHourAngle = map(Math.floor(hour()/3), 0, 8, 0, 360);
  //setup
  translate(x, y);
  strokeWeight(0.5);
  circle(0, 0, y*2*0.9);
  
  //text
  textSize(width/20);
  const textSpace = -y*0.6;
  const secondRadius = -y*0.8;
  const minuteRadius = -y/4*3*0.9;
  const hourRadius = -y/2;
  
  push()
  rotate(45/2)
  push()
  text(names[0], 0, textSpace)
  rotate(45)
  text(names[1], 0, textSpace)
  rotate(45)
  text(names[2], 0, textSpace)
  rotate(45)
  text(names[3], 0, textSpace)
  rotate(45)
  text(names[4], 0, textSpace)
  rotate(45)
  text(names[5], 0, textSpace)
  rotate(45)
  text(names[6], 0, textSpace)
  rotate(45)
  text(names[7], 0, textSpace)
  rotate(45)
  pop()
  pop()
  
  if (!sectionStyle){
    push();
    strokeWeight(width/300);
    rotate(eightHourAngle + 45/2);
    line(0, 0, 0, hourRadius);
    button(0, 0);
    pop();
  } else {
    push();
    stroke("black");
    strokeWeight(2);
    noFill();
    rotate(eightHourAngle + 45/2);
    ellipseMode(CENTER);
    circle(0, -height*1/3.05, width/10)
    pop();
  }
  
  pop()
}