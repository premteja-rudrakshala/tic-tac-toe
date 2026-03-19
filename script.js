
let turn="X";
let play=true;
let a=7;
let b=7;
let c=7;
let d=7;
let e=7;
let f=7;
let g=7;
let h=7;
let i=7;
let dis1=true;
let dis2=true;
let dis3=true;
let dis4=true;
let dis5=true;
let dis6=true;
let dis7=true;
let dis8=true;
let dis9=true;
let b1= document.querySelector("#b1");
b1.onclick=()=>{

    if(turn==="X"&&play==true&&dis1==true){
       
        b1.innerText="X";
        play=false;
        a=1;
       dis1=false;
    }else if(turn==="O"&&play==true&&dis1==true) {
        
        b1.innerText="O";
        play=false;
        dis1=false;
        a=0;
    }

}
let b2= document.querySelector("#b2");
b2.onclick=()=>{

    if(turn==="X"&&play==true&&dis2==true){
        
        b2.innerText="X";
        play=false;
        b=1;
        dis2=false;
    }else if(turn==="O"&&play==true&&dis2==true){
        
        b2.innerText="O";
        play=false;
        b=0;
        dis2=false;

    }

}
let b3= document.querySelector("#b3");
b3.onclick=()=>{

    if(turn==="X"&&play==true&&dis3==true){
        
        b3.innerText="X";
        play=false;
        c=1;
        dis3=false;

       
    }else if(turn==="O"&&play==true&&dis3==true){
        
        b3.innerText="O";
        play=false;
        c=0;
        dis3=false;

    }

}
let b4= document.querySelector("#b4");
b4.onclick=()=>{

    if(turn==="X"&&play==true&&dis4==true){
        
        b4.innerText="X";
        play=false;
        d=1;
        dis4=false;

       
    }else if(turn==="O"&&play==true&&dis4==true){
        
        b4.innerText="O";
        play=false;
        d=0;
        dis4=false;

    }

}
let b5= document.querySelector("#b5");
b5.onclick=()=>{

    if(turn==="X"&&play==true&&dis5==true){
       
        b5.innerText="X";
        play=false;
        e=1;
        dis5=false;

       
    }else if(turn==="O"&&play==true&&dis5==true){
        
        b5.innerText="O";
        play=false;
        e=0;
        dis5=false;

    }

}
let b6= document.querySelector("#b6");
b6.onclick=()=>{

    if(turn==="X"&&play==true&&dis6==true){
        
        b6.innerText="X";
        play=false;
        f=1;
        dis6=false;

       
    }else if(turn==="O"&&play==true&&dis6==true){
        
        b6.innerText="O";
        play=false;
        f=0;
        dis6=false;
        
        
    }

}
let b7= document.querySelector("#b7");
b7.onclick=()=>{

    if(turn==="X"&&play==true&&dis7==true){
       
        b7.innerText="X";
        play=false;
        g=1;
        dis7=false;

       
    }else if(turn==="O"&&play==true&&dis7==true){
        
        b7.innerText="O";
        play=false;
        g=0;
        dis7=false;
    }

}
let b8= document.querySelector("#b8");
b8.onclick=()=>{

    if(turn==="X"&&play==true&&dis8==true){
       
        b8.innerText="X";
        play=false;
        h=1;
        dis8=false;
       
    }else if(turn==="O"&&play==true&&dis8==true){
        
        b8.innerText="O";
        play=false;
        h=0;
        dis8=false;
    }

}
let b9= document.querySelector("#b9");
b9.onclick=()=>{

    if(turn==="X"&&play==true&&dis9==true){
        
        b9.innerText="X";
        play=false;
        i=1;
        dis9=false;
    }else if(turn==="O"&&play==true&&dis9==true){
        
        b9.innerText="O";
        play=false;
        i=0;
        dis9=false;
        
    }

}



let nxt=document.querySelector(".outer");
let btn = document.querySelector("#confirm");
let player=document.querySelector("h2");
nxt.onclick=()=>{ 

    if(turn==="X"){
        turn="O";
        player.innerText="O's Turn";
    }else if(turn==="O"){
        turn="X";
        player.innerText="X's Turn";
    }
    play=true;

    winner();
}

// winner
const winner=()=>{
let hori1="";//abc
let hori2="";//def
let hori3="";//ghi
let veri1="";//adg
let veri2="";//beh
let veri3="";//cfi
let dego1="";//aei
let dego2="";//ceg

if(a==1&&b==1&&c==1){
    hori1="X";
}else if (a==0&&b==0&&c==0){
    hori1="O";
}
if(d==1&&e==1&&f==1){
    hori2="X";
}else if (d==0&&e==0&&f==0){
    hori2="O";
}
if(g==1&&h==1&&i==1){
    hori3="X";
}else if (g==0&&h==0&&i==0){
    hori3="O";
}
if(a==1&&d==1&&g==1){
    veri1="X";
}else if (a==0&&d==0&&g==0){
    veri1="O";
}
if(e==1&&b==1&&h==1){
    veri2="X";
}else if (e==0&&b==0&&h==0){
    veri2="O";
}
if(c==1&&f==1&&i==1){
    veri3="X";
}else if (f==0&&i==0&&c==0){
    veri3="O";
}
if(a==1&&e==1&&i==1){
    dego1="X";
}else if (a==0&&e==0&&i==0){
    dego1="O";
}
if(g==1&&e==1&&c==1){
    dego2="X";
}else if (g==0&&e==0&&c==0){
    dego2="O";
}


if(hori1==="X"||hori2==="X"||hori3==="X"||veri1==="X"||veri2==="X"||veri3==="X"||dego1==="X"||dego2==="X"){
    console.log("X won");
    nxt.style.display="none";
    player.innerText="X won";
}else if (hori1==="O"||hori2==="O"||hori3==="O"||veri1==="O"||veri2==="O"||veri3==="O"||dego1==="O"||dego2==="O"){
    console.log("O won");
    nxt.style.display="none";
    player.innerText="O won";
}else if(dis1==false&&dis2==false&&dis3==false&&dis4==false&&dis5==false&&dis6==false&&dis7==false&&dis8==false&&dis9==false){
    player.innerText="It's A Draw";
}
}
