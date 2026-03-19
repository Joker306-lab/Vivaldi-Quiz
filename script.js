const questions = [
{
q:"Wann wurde Antonio Vivaldi geboren?",
a:["1678","1685","1700","1650"],
correct:"1678"
},
{
q:"Wo wurde Antonio Vivaldi geboren?",
a:["Venedig","Wien","Rom","Paris"],
correct:"Venedig"
},
{
q:"Wann starb Antonio Vivaldi?",
a:["1741","1800","1678","1900"],
correct:"1741"
},
{
q:"Wo starb Antonio Vivaldi?",
a:["Wien","Venedig","Rom","Paris"],
correct:"Wien"
},
{
q:"Welches Instrument spielte Vivaldi vor allem?",
a:["Geige","Klavier","Flöte","Gitarre"],
correct:"Geige"
},
{
q:"Wie nannte man Antonio Vivaldi?",
a:["Roter Priester","Goldener Geiger","Barockfürst","Junger Meister"],
correct:"Roter Priester"
},
{
q:"Warum wurde er so genannt?",
a:["Wegen seiner roten Haare","Wegen seiner Kleidung","Wegen seiner Geige","Wegen seines Namens"],
correct:"Wegen seiner roten Haare"
},
{
q:"Wie viele Kompositionen schrieb Vivaldi ungefähr?",
a:["Mehr als 700","Etwa 70","150","2000"],
correct:"Mehr als 700"
},
{
q:"Wie heißt sein bekanntestes Werk?",
a:["Die vier Jahreszeiten","Die Zauberflöte","Requiem","Die Schöpfung"],
correct:"Die vier Jahreszeiten"
},
{
q:"Wie lautet der Originaltitel?",
a:["Le quattro stagioni","Le musica","Il tempo","Quattro musica"],
correct:"Le quattro stagioni"
},
{
q:"In welchem Jahr entstanden die vier Jahreszeiten?",
a:["1725","1700","1678","1741"],
correct:"1725"
},
{
q:"Woraus bestehen die vier Jahreszeiten?",
a:["Vier Konzerte","Vier Opern","Vier Lieder","Vier Gedichte"],
correct:"Vier Konzerte"
},
{
q:"Wie lange dauert ein Konzert ungefähr?",
a:["8 bis 12 Minuten","1 Minute","30 Minuten","1 Stunde"],
correct:"8 bis 12 Minuten"
},
{
q:"Wie viele Sätze hat jedes Konzert?",
a:["3","2","4","5"],
correct:"3"
},
{
q:"Wie lautet die typische Reihenfolge?",
a:["schnell langsam schnell","langsam schnell langsam","nur schnell","nur langsam"],
correct:"schnell langsam schnell"
},
{
q:"Für welche Besetzung ist das Werk geschrieben?",
a:["Geige Streicher Cembalo","Klavier Chor","Flöte Trommel","nur Geige"],
correct:"Geige Streicher Cembalo"
},
{
q:"Was stellt die Musik dar?",
a:["Natur Gefühle und Tätigkeiten","nur Wetter","nur Tiere","nur Städte"],
correct:"Natur Gefühle und Tätigkeiten"
},
{
q:"Zu welcher Musikform gehört das Werk?",
a:["Programmmusik","Popmusik","Filmmusik","Tanzmusik"],
correct:"Programmmusik"
},
{
q:"Welche Jahreszeit wird besonders beschrieben?",
a:["Winter","Sommer","Frühling","Herbst"],
correct:"Winter"
},
{
q:"Was passiert im 1 Satz vom Winter?",
a:["Zittern Frieren eisiger Wind","Blumen wachsen","Ernte feiern","Sonne scheint"],
correct:"Zittern Frieren eisiger Wind"
},
{
q:"Was beschreibt der 2 Satz?",
a:["Kaminfeuer Gemütlichkeit Regen draußen","Eislaufen","Gewitter","Jagd"],
correct:"Kaminfeuer Gemütlichkeit Regen draußen"
},
{
q:"Was passiert im 3 Satz?",
a:["Eislaufen Eis bricht Hinfallen","am Kamin sitzen","Blumen pflücken","schlafen"],
correct:"Eislaufen Eis bricht Hinfallen"
},
{
q:"Was fühlt man im Winter laut Musik?",
a:["Kälte und Zittern","Hitze","Freude","Ruhe"],
correct:"Kälte und Zittern"
},
{
q:"Welche Stimmung hat der 2 Satz?",
a:["Gemütlich","Aggressiv","Traurig","Chaotisch"],
correct:"Gemütlich"
},
{
q:"Was kann im 3 Satz passieren?",
a:["Man bricht ins Eis ein","Man schläft","Man tanzt","Man isst"],
correct:"Man bricht ins Eis ein"
}
];

const timerEl = document.getElementById("timer");
const scoreEl = document.getElementById("score");
const highscoreEl = document.getElementById("highscore");
const progressEl = document.getElementById("progress");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const jokerBtn = document.getElementById("joker");
const restartBtn = document.getElementById("restart");

let queue = [];
let currentQuestion = null;
let questionNumber = 0;
let score = 0;
let timer = null;
let timeLeft = 20;
let jokerUsed = false;
let acceptingAnswers = true;

const highscore = Number(localStorage.getItem("vivaldiHighscore") || 0);
highscoreEl.textContent = String(highscore);

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function createQuestionPool() {
  return shuffle(questions).map(q => ({
    ...q,
    a: shuffle(q.a)
  }));
}

function updateScore() {
  scoreEl.textContent = String(score);
}

function updateTimer() {
  timerEl.textContent = String(timeLeft);
}

function startTimer() {
  clearInterval(timer);
  timeLeft = 20;
  updateTimer();

  timer = setInterval(() => {
    timeLeft--;
    updateTimer();

    if (timeLeft <= 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function renderQuestion() {
  if (!queue.length) return;

  currentQuestion = queue.shift();
  questionNumber++;

  progressEl.textContent = "Frage " + questionNumber;
  questionEl.textContent = currentQuestion.q;
  answersEl.innerHTML = "";

  currentQuestion.a.forEach(ans => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = ans;
    btn.onclick = () => checkAnswer(ans, btn);
    answersEl.appendChild(btn);
  });

  startTimer();
}

function checkAnswer(ans, btn) {
  clearInterval(timer);

  const correct = currentQuestion.correct;
  const buttons = document.querySelectorAll(".answer-btn");

  buttons.forEach(b => {
    if (b.textContent === correct) b.classList.add("correct");
  });

  if (ans === correct) {
    btn.classList.add("correct");
    score++;
  } else {
    btn.classList.add("wrong");
    queue.push(currentQuestion);
  }

  updateScore();

  setTimeout(() => {
    renderQuestion();
  }, 1000);
}

function nextQuestion() {
  renderQuestion();
}

function startQuiz() {
  queue = createQuestionPool();
  score = 0;
  questionNumber = 0;
  updateScore();
  renderQuestion();
}

startQuiz();
