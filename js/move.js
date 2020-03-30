var b_up = true;
var b_left = true;
var b_right = true;
var b_down = false;

var now = 0; // 0 center 1 up 2 left 3 right
var up = document.getElementById("up");
var left = document.getElementById("left");
var right = document.getElementById("right");
var down = document.getElementById("down");

var center = document.getElementById("profile");
var north = document.getElementById("north");
var east = document.getElementById("east");
var west = document.getElementById("west");

var c_left = 50;
var c_top = 50;
up.onclick = function(){
    if(!b_up) return;
    b_up=b_left=b_right=false;
    b_down=true;
    now=1;
    move = setInterval(function(){
        c_top+=1;
        Fmove()
        if(c_top==150){
            center.style.visibility="hidden";
            clearInterval(move);
        }
    },1);
    visiable();
}

down.onclick = function(){
    if(!b_down) return;
    b_up=b_left=b_right=true;
    b_down=false;
    now=0;
    move = setInterval(function(){
        c_top-=1;
        Fmove()
        if(c_top==50){
            north.style.visibility="hidden";
            clearInterval(move);
        }
    },1);
    visiable();
}

left.onclick = function(){
    if(now==0){
        b_up=b_left=b_down=false;
        b_right=true;
        now=2;
        move = setInterval(function(){
            c_left+=1;
            Fmove()
            if(c_left==150){
                center.style.visibility="hidden";
                clearInterval(move);
            }
        },1);
        visiable();
    }
    else if(now==3){
        b_up=b_left=b_right=true;
        b_down=false;
        now=0;
        move = setInterval(function(){
            c_left+=1;
            Fmove()
            if(c_left==50){
                east.style.visibility="hidden";
                clearInterval(move);
            }
        },1);
        visiable();
    }
}

right.onclick = function(){
    if(now==0){
        b_up=b_right=b_down=false;
        b_left=true;
        now=3;
        move = setInterval(function(){
            c_left-=1;
            Fmove()
            if(c_left==-50){
                center.style.visibility="hidden";
                clearInterval(move);
            }
        },1);
        visiable();
    }
    else if(now==2){
        b_up=b_left=b_right=true;
        b_down=false;
        now=0;
        move = setInterval(function(){
            c_left-=1;
            Fmove()
            if(c_left==50){
                west.style.visibility="hidden";
                clearInterval(move);
            }
        },1);
        visiable();
    }
}

function Fmove(){
    center.style.left = c_left+'%';
    center.style.top = c_top+'%';
    west.style.left = -100+c_left+'%';
    west.style.top = c_top+'%';
    east.style.left = 100+c_left+'%';
    east.style.top = c_top+'%';
    north.style.left = c_left+'%';
    north.style.top = -100+c_top+'%';
}

function visiable(){
    if(b_up) up.style.visibility = "visible";
    else up.style.visibility = "hidden";
    if(b_down) down.style.visibility = "visible";
    else down.style.visibility = "hidden";
    if(b_left) left.style.visibility = "visible";
    else left.style.visibility = "hidden";
    if(b_right) right.style.visibility = "visible";
    else right.style.visibility = "hidden";

    
    center.style.visibility = "visible";
    if(now==1){
        north.style.visibility = "visible";
        west.style.visibility = "hidden";
        east.style.visibility = "hidden";
    }
    if(now==2){
        north.style.visibility = "hidden";
        west.style.visibility = "visible";
        east.style.visibility = "hidden";
    }
    if(now==3){
        north.style.visibility = "hidden";
        west.style.visibility = "hidden";
        east.style.visibility = "visible";
    }
}