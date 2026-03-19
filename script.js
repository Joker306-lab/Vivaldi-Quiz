let questions = [
{ q:"Wann wurde Vivaldi geboren?", a:["1678","1685","1700","1650"], correct:0 },
{ q:"Wo wurde er geboren?", a:["Venedig","Wien","Rom","Paris"], correct:0 },
{ q:"Wann starb er?", a:["1741","1800","1678","1900"], correct:0 },
{ q:"Welches Instrument spielte er?", a:["Geige","Klavier","Flöte","Gitarre"], correct:0 },
{ q:"Wie wurde er genannt?", a:["Roter Priester","Meister","Komponist","Dirigent"], correct:0 },
{ q:"Bekanntestes Werk?", a:["Vier Jahreszeiten","Zauberflöte","Requiem","Symphonie"], correct:0 }
];

let current=0,timer,time=20,joker=false,score=0;
let highscore = localStorage.getItem("highscore") || 0;

document.getElementById("highscore").innerText=highscore;

function load(){
 if(current>=questions.length){
  if(score>highscore){
    localStorage.setItem("highscore", score);
  }
  document.getElementById("question").innerText="Fertig! "+score;
  return;
 }
 let q=questions[current];
 document.getElementById("question").innerText=q.q;
 let box=document.getElementById("answers");
 box.innerHTML="";
 q.a.forEach((a,i)=>{
  let b=document.createElement("button");
  b.innerText=a;
  b.onclick=()=>check(i,b);
  box.appendChild(b);
 });
 start();
}

function check(i,btn){
 clearInterval(timer);
 let correct = questions[current].correct;
 let buttons=document.querySelectorAll("#answers button");

 buttons.forEach((b,idx)=>{
  if(idx===correct) b.classList.add("correct");
 });

 if(i===correct){
  btn.classList.add("correct");
  document.getElementById("correctSound").play();
  score++;
 } else {
  btn.classList.add("wrong");
  document.getElementById("wrongSound").play();
  questions.push(questions[current]);
 }

 document.getElementById("score").innerText=score;

 setTimeout(()=>{
  current++; joker=false; load();
 },1000);
}

function start(){
 time=20;
 document.getElementById("timer").innerText=time;
 timer=setInterval(()=>{
  time--;
  document.getElementById("timer").innerText=time;
  if(time<=0){
    clearInterval(timer);
    questions.push(questions[current]);
    current++; load();
  }
 },1000);
}

document.getElementById("joker").onclick=()=>{
 if(joker) return;
 let btns=document.querySelectorAll("#answers button");
 let q=questions[current];
 let wrong=[];
 btns.forEach((b,i)=>{if(i!==q.correct) wrong.push(b);});
 wrong[Math.floor(Math.random()*wrong.length)].style.display="none";
 joker=true;
};

load();
