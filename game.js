let gameSeq = [];
let userSeq = [];
let btns = ["r","b","o","g"];

let start = false;
 let level = 0;
let highScore = 0;
let h3 =document.createElement("h3");

let h2 = document.querySelector("h2");
h2.insertAdjacentElement("afterend",h3);
h3.innerText=(`high score=${highScore}`)

document.addEventListener("keypress",()=>{
    if(start == false){
        console.log("game start")
        start = true;
        levelUp();
    }

});


function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}

function levelUp(){
    userSeq=[];
    level ++;
    h2.innerText = `level = ${level}`;
    h3.innerText=(`High Score = ${highScore+1 }`);

if(level>highScore){
    highScore=level;
}else{
   highScore= highScore;
}

let indx = Math.floor(Math.random()*4);
let randCol = btns[indx];
let randBtn = document.querySelector(`.${randCol}`);
gameSeq.push(randCol);
console.log(gameSeq);
gameflash(randBtn);


};

function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            // console.log("same");
            setTimeout(levelUp,1000);
        }
        
    }else{
    h2.innerText=( `game over & your score is =${level}`);
    document.querySelector("body").style.backgroundColor=("red");
    setTimeout(()=>{
        document.querySelector("body").style.backgroundColor=("white");
    },200);
     reset();

    }
    
}


function btnPress(){ 
    let btn = this;
    gameflash(btn)

    userCol = btn.getAttribute("id");
    userSeq.push(userCol);
    console.log(userSeq)
    // checkAns(userSeq.length-1);
    checkAns(userSeq.length-1);     



} 

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
btn.addEventListener("click",btnPress);
};  


function reset(){
    start = false;
    level=0;
    userSeq=[];
    gameSeq=[];
}