var lines = [];
var lines2 = [];//stores second hexagram
var count = 1;
var player;
var ypos = 130;//height position of the hexagrams
var hexNameYpos = 180;


function setup() {
  createCanvas(800, 300);
  
  player = select("#yt_video");
  player.position(0,0); 
  
  var button = createButton('Toss coins');
  button.position(370,400);
  button.mousePressed(tossCoins);
  console.log("coins tossed");
}

function draw() { 
  //background(220);
}

function tossCoins() {

  var coin1 = int(random(0,2));
  var coin2 = int(random(0,2));
  var coin3 = int(random(0,2));
  
  //0 is tails, 1 is heads
  console.log(coin1 + " " + coin2 + " " + coin3);
  
  if (coin1==1&&coin2==1&&coin3==1) {
    lines[count] = {x:"ub", y:"c"};
    console.log("unbroken changing");
    console.log(lines[count].x + " " + lines[count].y);
  }
  
  else if (coin1==1&&coin2==1&&coin3==0||
           coin1==1&&coin2==0&&coin3==1||
           coin1==0&&coin2==1&&coin3==1) {
    lines[count] = {x:"b", y:"uc"};
    console.log("broken unchanging");
    console.log(lines[count].x + " " + lines[count].y);
  }
  
  else if (coin1==0&&coin2==1&&coin3==0||
             coin1==1&&coin2==0&&coin3==0||
             coin1==0&&coin2==0&&coin3==1) {
    lines[count] = {x:'ub', y:'uc'};
    console.log("unbroken unchanging");
    console.log(lines[count].x + " " + lines[count].y);
  }
  
  else if (coin1==0&&coin2==0&&coin3==0) {
    lines[count] = {x:'b', y:'c'};
    console.log("broken changing");
    console.log(lines[count].x + " " + lines[count].y);
  } 
  
	drawHexagram();
  count++;
}

function drawHexagram() {
  
  if (count==1) {
    
    if (lines[count].x=='ub'&&lines[count].y=='c') {
    fill(0);
  	rect(150, ypos, 150, 5);
      ellipse(135, ypos+3, 5, 5);
    }
    if (lines[count].x=='b'&&lines[count].y=='uc') {
    fill(0);
  	rect(150, ypos, 70, 5);
  	rect(230, ypos, 70, 5);
    }
    if (lines[count].x=='ub'&&lines[count].y=='uc') {
    fill(0);
  	rect(150, ypos, 150, 5);
      
    }
    if (lines[count].x=='b'&&lines[count].y=='c') {
    fill(0);
  	rect(150, ypos, 70, 5);
  	rect(230, ypos, 70, 5);
      ellipse(135, ypos+3, 5, 5);
    } 
  }
  
  else if (count==2) {
    if (lines[count].x=='ub'&&lines[count].y=='c') {
    fill(0);
  	rect(150, ypos-20, 150, 5);
      ellipse(135, ypos-20+3, 5, 5);
    }
    if (lines[count].x=='b'&&lines[count].y=='uc') {
    fill(0);
  	rect(150, ypos-20, 70, 5);
  	rect(230, ypos-20, 70, 5);
    }
    if (lines[count].x=='ub'&&lines[count].y=='uc') {
    fill(0);
  	rect(150, ypos-20, 150, 5);
    }
    if (lines[count].x=='b'&&lines[count].y=='c') {
    fill(0);
  	rect(150, ypos-20, 70, 5);
  	rect(230, ypos-20, 70, 5);
      ellipse(135, ypos-20+3, 5, 5);
    } 
  }
  
  else if (count==3) {
    if (lines[count].x=='ub'&&lines[count].y=='c') {
    fill(0);
  	rect(150, ypos-40, 150, 5);
      ellipse(135, ypos-40+3, 5, 5);
    }
    if (lines[count].x=='b'&&lines[count].y=='uc') {
    fill(0);
  	rect(150, ypos-40, 70, 5);
  	rect(230, ypos-40, 70, 5);
    }
    if (lines[count].x=='ub'&&lines[count].y=='uc') {
    fill(0);
  	rect(150, ypos-40, 150, 5);
    }
    if (lines[count].x=='b'&&lines[count].y=='c') {
    fill(0);
  	rect(150, ypos-40, 70, 5);
  	rect(230, ypos-40, 70, 5);
      ellipse(135, ypos-40+3, 5, 5);
    } 
  }
  
  else if (count==4) {
    if (lines[count].x=='ub'&&lines[count].y=='c') {
    fill(0);
  	rect(150, ypos-60, 150, 5);
      ellipse(135, ypos-60+3, 5, 5);
    }
    if (lines[count].x=='b'&&lines[count].y=='uc') {
    fill(0);
  	rect(150, ypos-60, 70, 5);
  	rect(230, ypos-60, 70, 5);
    }
    if (lines[count].x=='ub'&&lines[count].y=='uc') {
    fill(0);
  	rect(150, ypos-60, 150, 5);
    }
    if (lines[count].x=='b'&&lines[count].y=='c') {
    fill(0);
  	rect(150, ypos-60, 70, 5);
  	rect(230, ypos-60, 70, 5);
      ellipse(135, ypos-60+3, 5, 5);
    } 
  }

  else if (count==5) {
    if (lines[count].x=='ub'&&lines[count].y=='c') {
    fill(0);
  	rect(150, ypos-80, 150, 5);
      ellipse(135, ypos-80+3, 5, 5);
    }
    if (lines[count].x=='b'&&lines[count].y=='uc') {
    fill(0);
  	rect(150, ypos-80, 70, 5);
  	rect(230, ypos-80, 70, 5);
    }
    if (lines[count].x=='ub'&&lines[count].y=='uc') {
    fill(0);
  	rect(150, ypos-80, 150, 5);
    }
    if (lines[count].x=='b'&&lines[count].y=='c') {
    fill(0);
  	rect(150, ypos-80, 70, 5);
  	rect(230, ypos-80, 70, 5);
      ellipse(135, ypos-80+3, 5, 5)
    } 
  }
  
  else if (count==6) {
    if (lines[count].x=='ub'&&lines[count].y=='c') {
    fill(0);
  	rect(150, ypos-100, 150, 5);
    	ellipse(135, ypos-100+3, 5, 5);//visually marks the changing lien
    }
    if (lines[count].x=='b'&&lines[count].y=='uc') {
    fill(0);
  	rect(150, ypos-100, 70, 5);
  	rect(230, ypos-100, 70, 5);
    }
    if (lines[count].x=='ub'&&lines[count].y=='uc') {
    fill(0);
  	rect(150, ypos-100, 150, 5);
    }
    if (lines[count].x=='b'&&lines[count].y=='c') {
    fill(0);
  	rect(150, ypos-100, 70, 5);
  	rect(230, ypos-100, 70, 5);
    	ellipse(135, ypos-100+3, 5, 5); //visually marks the changing lien
    } 
 
    firstHexagramName();
    secondHexagram();
    
    var button2 = createButton('2nd Hexagram');
  	button2.position(360,380);
  	button2.mousePressed(secondHexName);
  	
    
  }
  
  else if (count==7) {//resets program
    reset();
  }
}

function secondHexagram() {
  
  lines2 = lines;
  
  for (var i=1; i<7; i++) {
    if (lines[i].x=='b'&&lines[i].y=='c') {
      rect(500, ypos+20-i*20, 150, 5);
      lines2[i].x='ub';
    } 
    else if (lines[i].x=='ub'&&lines[i].y=='c') {
      rect(580, ypos+20-i*20, 70, 5);
      rect(500, ypos+20-i*20, 70, 5);
      lines2[i].x='b';
    } 
    else if (lines[i].x=='b'&&lines[i].y=='uc') {
      rect(580, ypos+20-i*20, 70, 5);
      rect(500, ypos+20-i*20, 70, 5);
    } 
    else if (lines[i].x=='ub'&&lines[i].y=='uc') {
      rect(500, ypos+20-i*20, 150, 5);
    }
  }
  
}

function reset() {
  
	count=0;
	fill(250);
	noStroke();
  	
	for (var i=0; i<=6; i++) {
	  rect(130, ypos-i*20, 171, 6);
  }//erases first hexagrams
  for (var i=0; i<=6; i++) {
    rect(500, ypos-i*20, 171, 6);
  }//erases second hexagrams  
	rect(0,ypos+25,400,75);//erases name box
}

