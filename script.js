let questions = [
  { q: "Wann wurde Antonio Vivaldi geboren?", a: ["1678","1685","1700","1650"], correct: 0 },
  { q: "Wo wurde Vivaldi geboren?", a: ["Venedig","Wien","Rom","Paris"], correct: 0 },
  { q: "Wann starb Vivaldi?", a: ["1741","1800","1678","1900"], correct: 0 },
  { q: "Wo starb er?", a: ["Wien","Venedig","Rom","Paris"], correct: 0 },
  { q: "Welches Instrument spielte er hauptsächlich?", a: ["Geige","Klavier","Flöte","Gitarre"], correct: 0 },
  { q: "Was war sein Vater?", a: ["Geiger","Arzt","Lehrer","Priester"], correct: 0 },
  { q: "Wer brachte ihm Musik bei?", a: ["Sein Vater","Ein König","Ein Lehrer","Niemand"], correct: 0 },
  { q: "Mit wie vielen Jahren wurde er Priester?", a: ["25","18","30","40"], correct: 0 },
  { q: "Wie wurde er genannt?", a: ["Roter Priester","Goldener Musiker","Meister","Dirigent"], correct: 0 },
  { q: "Warum dieser Name?", a: ["Rote Haare","Rotes Haus","Rote Geige","Rotes Buch"], correct: 0 },
  { q: "Welche Tätigkeit gab er auf?", a: ["Priester","Geiger","Lehrer","Komponist"], correct: 0 },
  { q: "Was machte ihn berühmt?", a: ["Seine Musik","Seine Bücher","Seine Reisen","Seine Familie"], correct: 0 },
  { q: "Wie viele Werke schrieb er?", a: ["Über 700","100","50","20"], correct: 0 },
  { q: "Welche Art Werke schrieb er?", a: ["Konzerte","Filme","Romane","Zeitungen"], correct: 0 },
  { q: "Schrieb er auch Opern?", a: ["Ja","Nein","Nur selten","Unbekannt"], correct: 0 },
  { q: "Sein bekanntestes Werk?", a: ["Die vier Jahreszeiten","Zauberflöte","Requiem","Symphonie 5"], correct: 0 },
  { q: "Originaltitel?", a: ["Le quattro stagioni","La musica","Opera quattro","Concerto"], correct: 0 },
  { q: "Wann komponiert?", a: ["1725","1800","1600","1900"], correct: 0 },
  { q: "Wie viele Teile hat das Werk?", a: ["4","2","6","8"], correct: 0 },
  { q: "Was stellt jeder Teil dar?", a: ["Eine Jahreszeit","Ein Tier","Ein Instrument","Ein Ort"], correct: 0 },
  { q: "Wie viele Sätze pro Konzert?", a: ["3","2","1","5"], correct: 0 },
  { q: "Typischer Aufbau?", a: ["Schnell-langsam-schnell","Langsam-schnell-langsam","Nur langsam","Nur schnell"], correct: 0 },
  { q: "Wie lange dauert ein Konzert?", a: ["8-12 Minuten","1 Stunde","30 Minuten","2 Stunden"], correct: 0 },
  { q: "Was beschreibt die Musik?", a: ["Natur","Technik","Krieg","Mathematik"], correct: 0 },
  { q: "Wie nennt man diese Musik?", a: ["Programmmusik","Popmusik","Rockmusik","Jazz"], correct: 0 },
  { q: "Wohin zog er später?", a: ["Wien","Berlin","Paris","Madrid"], correct: 0 },
  { q: "War er erfolgreich zu Lebzeiten?", a: ["Ja","Nein","Nur kurz","Unklar"], correct: 0 },
  { q: "Wie starb er?", a: ["Arm und krank","Reich","Im Krieg","Unfall"], correct: 0 },
  { q: "Zu welcher Epoche gehört er?", a: ["Barock","Romantik","Moderne","Mittelalter"], correct: 0 },
  { q: "Seine Werke heute?", a: ["Berühmt","Vergessen","Verboten","Unbekannt"], correct: 0 }
];

let current = 0;
let timer;
let timeLeft = 20;
let jokerUsed = false;

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

questions = shuffle(questions);

function loadQuestion() {
  if (current >= questions.length) {
    document.getElementById("question").innerText = "Fertig!";
    document.getElementById("answers").innerHTML = "";
    return;
  }

  let q = questions[current];
  document.getElementById("question").innerText = q.q;
  let answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.a.forEach((answer, index) => {
    let btn = document.createElement("button");
    btn.innerText = answer;
    btn.onclick = () => checkAnswer(index);
    answersDiv.appendChild(btn);
  });

  startTimer();
}

function checkAnswer(index) {
  clearInterval(timer);
  let q = questions[current];

  if (index === q.correct) {
    current++;
  } else {
    questions.push(q);
    current++;
  }

  jokerUsed = false;
  loadQuestion();
}

function startTimer() {
  timeLeft = 20;
  document.getElementById("timer").innerText = timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      questions.push(questions[current]);
      current++;
      loadQuestion();
    }
  }, 1000);
}

document.getElementById("joker").onclick = () => {
  if (jokerUsed) return;

  let buttons = document.querySelectorAll("#answers button");
  let q = questions[current];

  let wrong = [];
  buttons.forEach((btn, i) => {
    if (i !== q.correct) wrong.push(btn);
  });

  let remove = wrong[Math.floor(Math.random() * wrong.length)];
  remove.style.display = "none";

  jokerUsed = true;
};

loadQuestion();
