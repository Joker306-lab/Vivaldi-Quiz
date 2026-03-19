let questions = [
{ q:"Wann wurde Vivaldi geboren?", a:['1678', '1685', '1700', '1650'], correct:0 },
{ q:"Wo wurde er geboren?", a:['Venedig', 'Wien', 'Rom', 'Paris'], correct:0 },
{ q:"Wann starb er?", a:['1741', '1800', '1678', '1900'], correct:0 },
{ q:"Wo starb er?", a:['Wien', 'Venedig', 'Rom', 'Paris'], correct:0 },
{ q:"Welches Instrument spielte er?", a:['Geige', 'Klavier', 'Flöte', 'Gitarre'], correct:0 },
{ q:"Was war sein Vater?", a:['Geiger', 'Arzt', 'Lehrer', 'Priester'], correct:0 },
{ q:"Wer brachte ihm Musik bei?", a:['Sein Vater', 'Ein König', 'Ein Lehrer', 'Niemand'], correct:0 },
{ q:"Wie wurde er genannt?", a:['Roter Priester', 'Meister', 'Komponist', 'Dirigent'], correct:0 },
{ q:"Warum dieser Name?", a:['Rote Haare', 'Rotes Haus', 'Rote Geige', 'Rotes Buch'], correct:0 },
{ q:"Welche Epoche?", a:['Barock', 'Romantik', 'Moderne', 'Mittelalter'], correct:0 },
{ q:"Bekanntestes Werk?", a:['Vier Jahreszeiten', 'Zauberflöte', 'Requiem', 'Symphonie'], correct:0 },
{ q:"Originaltitel?", a:['Le quattro stagioni', 'Opera', 'Concerto', 'La musica'], correct:0 },
{ q:"Wann komponiert?", a:['1725', '1800', '1600', '1900'], correct:0 },
{ q:"Wie viele Teile?", a:['4', '2', '6', '8'], correct:0 },
{ q:"Was beschreibt die Musik?", a:['Natur', 'Krieg', 'Technik', 'Mathe'], correct:0 },
{ q:"Wie viele Sätze?", a:['3', '2', '5', '1'], correct:0 },
{ q:"Typischer Aufbau?", a:['Schnell-langsam-schnell', 'Langsam-schnell', 'Nur schnell', 'Nur langsam'], correct:0 },
{ q:"Wie viele Werke?", a:['Über 700', '100', '50', '10'], correct:0 },
{ q:"Schrieb er Opern?", a:['Ja', 'Nein', 'Selten', 'Unklar'], correct:0 },
{ q:"War er Priester?", a:['Ja', 'Nein', 'Kurz', 'Nie'], correct:0 },
{ q:"Gab er den Priesterberuf auf?", a:['Ja', 'Nein', 'Teilweise', 'Unklar'], correct:0 },
{ q:"Wohin zog er später?", a:['Wien', 'Paris', 'Berlin', 'Madrid'], correct:0 },
{ q:"War er zu Lebzeiten erfolgreich?", a:['Ja', 'Nein', 'Kurz', 'Unklar'], correct:0 },
{ q:"Wie starb er?", a:['Arm', 'Reich', 'Im Krieg', 'Unfall'], correct:0 },
{ q:"Was ist Programmmusik?", a:['Musik mit Inhalt', 'Zufällige Musik', 'Moderne Musik', 'Pop'], correct:0 },
{ q:"Welches Instrument dominiert?", a:['Geige', 'Klavier', 'Gitarre', 'Flöte'], correct:0 },
{ q:"Wie lange dauert ein Konzert?", a:['10 Minuten', '1 Stunde', '30 Minuten', '2 Stunden'], correct:0 },
{ q:"Was hat jede Jahreszeit?", a:['Gedicht', 'Film', 'Tanz', 'Bild'], correct:0 },
{ q:"Wo wurde er berühmt?", a:['Europaweit', 'Nur Italien', 'Nur Wien', 'Frankreich'], correct:0 },
{ q:"Welche Stadt prägte ihn?", a:['Venedig', 'Rom', 'Paris', 'Berlin'], correct:0 },
{ q:"Wie war sein Haar?", a:['Rot', 'Schwarz', 'Blond', 'Grau'], correct:0 },
{ q:"Sein Stil?", a:['Virtuos', 'Langsam', 'Einfach', 'Chaotisch'], correct:0 },
{ q:"Was ist ein Konzert?", a:['Werk für Solist+Orchester', 'Nur Chor', 'Nur Klavier', 'Film'], correct:0 },
{ q:"Welche Stimmung oft?", a:['Lebendig', 'Traurig', 'Langweilig', 'Still'], correct:0 },
{ q:"Wer spielte oft Solovioline?", a:['Vivaldi', 'Mozart', 'Bach', 'Beethoven'], correct:0 },
{ q:"Sein Einfluss?", a:['Groß', 'Klein', 'Unbekannt', 'Keiner'], correct:0 },
{ q:"Seine Musik heute?", a:['Sehr bekannt', 'Vergessen', 'Selten', 'Verboten'], correct:0 },
{ q:"Welche Rolle hatte er?", a:['Komponist', 'Koch', 'Soldat', 'Arzt'], correct:0 },
{ q:"Wo wirkte er?", a:['Italien', 'Spanien', 'Deutschland', 'England'], correct:0 },
{ q:"Seine Musik beschreibt?", a:['Jahreszeiten', 'Autos', 'Städte', 'Krieg'], correct:0 },
];

let current=0,timer,time=20,joker=false,score=0;
let highscore = localStorage.getItem("highscore") || 0;
document.getElementById("highscore").innerText=highscore;

function shuffleAnswers(q){
 let arr=q.a.map((x,i)=>({text:x,correct:i===q.correct}));
 return arr.sort(()=>Math.random()-0.5);
}

function load(){
 if(current>=questions.length){
  if(score>highscore) localStorage.setItem("highscore",score);
  document.getElementById("question").innerText="Fertig "+score;
  return;
 }
 let q=questions[current];
 document.getElementById("question").innerText=q.q;
 let box=document.getElementById("answers");
 box.innerHTML="";
 let shuffled=shuffleAnswers(q);
 shuffled.forEach(item=>{
  let b=document.createElement("button");
  b.innerText=item.text;
  b.onclick=()=>check(item.correct,b);
  box.appendChild(b);
 });
 start();
}

function check(correct,btn){
 clearInterval(timer);
 let buttons=document.querySelectorAll("#answers button");
 buttons.forEach(b=>{
  if(b.innerText===questions[current].a[questions[current].correct]){
    b.classList.add("correct");
  }
 });
 if(correct){
  btn.classList.add("correct");
  document.getElementById("correctSound").play();
  score++;
 } else {
  btn.classList.add("wrong");
  document.getElementById("wrongSound").play();
  questions.push(questions[current]);
 }
 document.getElementById("score").innerText=score;
 setTimeout(()=>{current++;joker=false;load();},1000);
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
    current++;load();
  }
 },1000);
}

document.getElementById("joker").onclick=()=>{
 if(joker) return;
 let btns=document.querySelectorAll("#answers button");
 let correct=questions[current].a[questions[current].correct];
 let wrong=[...btns].filter(b=>b.innerText!==correct);
 wrong[Math.floor(Math.random()*wrong.length)].style.display="none";
 joker=true;
};

load();
