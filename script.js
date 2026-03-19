const questions = [
  {
    q: "Wann wurde Antonio Vivaldi geboren?",
    a: ["1678", "1685", "1700", "1650"],
    correct: "1678"
  },
  {
    q: "Wo wurde Antonio Vivaldi geboren?",
    a: ["Venedig", "Wien", "Rom", "Paris"],
    correct: "Venedig"
  },
  {
    q: "Wann starb Antonio Vivaldi?",
    a: ["1741", "1800", "1678", "1900"],
    correct: "1741"
  },
  {
    q: "Wo starb Antonio Vivaldi?",
    a: ["Wien", "Venedig", "Rom", "Paris"],
    correct: "Wien"
  },
  {
    q: "Welches Instrument spielte Vivaldi vor allem?",
    a: ["Geige", "Klavier", "Flöte", "Gitarre"],
    correct: "Geige"
  },
  {
    q: "Was war Vivaldis Vater?",
    a: ["Geiger", "Arzt", "Lehrer", "Priester"],
    correct: "Geiger"
  },
  {
    q: "Wer kümmerte sich früh um Vivaldis musikalische Ausbildung?",
    a: ["Sein Vater", "Ein Arzt", "Ein König", "Ein Nachbar"],
    correct: "Sein Vater"
  },
  {
    q: "Mit wie vielen Jahren wurde Vivaldi zum Priester geweiht?",
    a: ["25", "18", "30", "40"],
    correct: "25"
  },
  {
    q: "Wie nannte man Antonio Vivaldi?",
    a: ["Roter Priester", "Goldener Geiger", "Junger Meister", "Barockfürst"],
    correct: "Roter Priester"
  },
  {
    q: "Warum wurde er so genannt?",
    a: ["Wegen seiner roten Haare", "Wegen seines roten Mantels", "Wegen seiner Geige", "Wegen seines Vaters"],
    correct: "Wegen seiner roten Haare"
  },
  {
    q: "Was gab Vivaldi nach einiger Zeit auf?",
    a: ["Seine Priestertätigkeit", "Das Geigenspiel", "Das Komponieren", "Den Unterricht"],
    correct: "Seine Priestertätigkeit"
  },
  {
    q: "Worauf konzentrierte sich Vivaldi danach ganz?",
    a: ["Musik und Komponieren", "Kirchenbau", "Politik", "Medizin"],
    correct: "Musik und Komponieren"
  },
  {
    q: "Als was arbeitete Vivaldi außerdem?",
    a: ["Geigenlehrer und Orchesterleiter", "Maler und Bildhauer", "Arzt und Forscher", "Händler und Politiker"],
    correct: "Geigenlehrer und Orchesterleiter"
  },
  {
    q: "Wie erfolgreich war Vivaldi in Europa?",
    a: ["Er wurde schnell berühmt", "Er blieb unbekannt", "Er war nur in Wien bekannt", "Er wurde erst nach seinem Tod bekannt"],
    correct: "Er wurde schnell berühmt"
  },
  {
    q: "Wie viele Kompositionen schrieb Vivaldi ungefähr?",
    a: ["Mehr als 700", "Etwa 70", "Knapp 150", "Mehr als 2000"],
    correct: "Mehr als 700"
  },
  {
    q: "Welche Werke schrieb Vivaldi unter anderem?",
    a: ["Instrumentalkonzerte und Opern", "Nur Kirchenlieder", "Nur Klavierstücke", "Nur Gedichte"],
    correct: "Instrumentalkonzerte und Opern"
  },
  {
    q: "Wie heißt Vivaldis bekanntestes Werk?",
    a: ["Die vier Jahreszeiten", "Die Zauberflöte", "Die Schöpfung", "Requiem"],
    correct: "Die vier Jahreszeiten"
  },
  {
    q: "Wie lautet der Originaltitel von Die vier Jahreszeiten?",
    a: ["Le quattro stagioni", "Le quattro musica", "Il tempo nuovo", "Le stagioni di Roma"],
    correct: "Le quattro stagioni"
  },
  {
    q: "In welchem Jahr wurden Die vier Jahreszeiten komponiert?",
    a: ["1725", "1711", "1741", "1678"],
    correct: "1725"
  },
  {
    q: "Woraus besteht das Werk Die vier Jahreszeiten?",
    a: ["Aus vier Konzerten", "Aus vier Opern", "Aus vier Sonaten", "Aus vier Gedichten"],
    correct: "Aus vier Konzerten"
  },
  {
    q: "Wem ist jeweils eines dieser Konzerte gewidmet?",
    a: ["Einer Jahreszeit", "Einem Instrument", "Einem Land", "Einem König"],
    correct: "Einer Jahreszeit"
  },
  {
    q: "Für welche Besetzung ist das Werk geschrieben?",
    a: ["Geige, Streicher und Cembalo", "Klavier und Chor", "Flöte und Harfe", "Nur Streicher"],
    correct: "Geige, Streicher und Cembalo"
  },
  {
    q: "Was wollte Vivaldi in den vier Jahreszeiten musikalisch darstellen?",
    a: ["Naturerscheinungen, Tätigkeiten und Empfindungen", "Nur das Wetter", "Nur Tierstimmen", "Nur Feste in Venedig"],
    correct: "Naturerscheinungen, Tätigkeiten und Empfindungen"
  },
  {
    q: "Zu welcher Musikform zählt man Die vier Jahreszeiten deshalb auch?",
    a: ["Programmmusik", "Popmusik", "Tanzmusik", "Filmmusik"],
    correct: "Programmmusik"
  },
  {
    q: "Wie viele Sätze hat jedes Konzert der vier Jahreszeiten?",
    a: ["Drei", "Zwei", "Vier", "Fünf"],
    correct: "Drei"
  },
  {
    q: "Wie lautet die typische Satzfolge?",
    a: ["Schnell, langsam, schnell", "Langsam, schnell, langsam", "Nur schnell", "Nur langsam"],
    correct: "Schnell, langsam, schnell"
  },
  {
    q: "Wie lange dauern die einzelnen Konzerte ungefähr?",
    a: ["Zwischen 8 und 12 Minuten", "Etwa 30 Minuten", "Etwa 1 Stunde", "Nur 2 Minuten"],
    correct: "Zwischen 8 und 12 Minuten"
  },
  {
    q: "Was stellte Vivaldi jeder Jahreszeit außerdem voran?",
    a: ["Ein Gedicht oder Sonett", "Ein Bild", "Eine Landkarte", "Eine Predigt"],
    correct: "Ein Gedicht oder Sonett"
  },
  {
    q: "Von wem stammen diese Gedichte wahrscheinlich?",
    a: ["Von Vivaldi selbst", "Von seinem Vater", "Von Mozart", "Von einem König"],
    correct: "Von Vivaldi selbst"
  },
  {
    q: "Wohin zog Vivaldi später?",
    a: ["Nach Wien", "Nach Berlin", "Nach Madrid", "Nach London"],
    correct: "Nach Wien"
  },
  {
    q: "Wie erging es Vivaldi in Wien?",
    a: ["Er konnte dort nicht richtig Fuß fassen", "Er wurde dort Kaiser", "Er wurde nur Lehrer", "Er blieb nur wenige Tage"],
    correct: "Er konnte dort nicht richtig Fuß fassen"
  },
  {
    q: "Wie starb Vivaldi laut Text?",
    a: ["Krank und verarmt", "Reich und geehrt", "Bei einem Unfall", "Im Krieg"],
    correct: "Krank und verarmt"
  },
  {
    q: "Zu welcher musikalischen Epoche zählt Vivaldi?",
    a: ["Barock", "Romantik", "Klassik", "Moderne"],
    correct: "Barock"
  },
  {
    q: "Was gilt für Vivaldis Werke bis heute?",
    a: ["Sie sind unvergessen", "Sie sind fast alle verloren", "Sie dürfen kaum aufgeführt werden", "Sie sind nur in Italien bekannt"],
    correct: "Sie sind unvergessen"
  },
  {
    q: "Welche Stadt ist auf dem Arbeitsblatt auf der Karte markiert?",
    a: ["Venedig", "Wien", "Mailand", "Neapel"],
    correct: "Venedig"
  },
  {
    q: "In welchem Land liegt Venedig?",
    a: ["Italien", "Österreich", "Frankreich", "Spanien"],
    correct: "Italien"
  },
  {
    q: "In welchem Land liegt Wien?",
    a: ["Österreich", "Italien", "Deutschland", "Schweiz"],
    correct: "Österreich"
  },
  {
    q: "Was machte Antonio Vivaldi früh besonders?",
    a: ["Er galt als sehr begabt", "Er wollte nie Musik machen", "Er schrieb zuerst Bücher", "Er war nur als Priester bekannt"],
    correct: "Er galt als sehr begabt"
  },
  {
    q: "Was stellen Die vier Jahreszeiten musikalisch dar?",
    a: ["Die vier Jahreszeiten", "Vier Städte", "Vier Könige", "Vier Instrumente"],
    correct: "Die vier Jahreszeiten"
  },
  {
    q: "Woraus bestehen Die vier Jahreszeiten laut Arbeitsblatt?",
    a: ["Aus vier kleinen Konzerten", "Aus vier Opern", "Aus vier Gedichten", "Aus vier Liedern"],
    correct: "Aus vier kleinen Konzerten"
  },
  {
    q: "Was schildert die Musik in den vier Jahreszeiten?",
    a: ["Naturerscheinungen, Tätigkeiten, Empfindungen und Tiere", "Nur Wetter", "Nur Instrumente", "Nur Städte"],
    correct: "Naturerscheinungen, Tätigkeiten, Empfindungen und Tiere"
  },
  {
    q: "Welcher Teil der vier Jahreszeiten ist auf deinem neuen Blatt besonders beschrieben?",
    a: ["Der Winter", "Der Sommer", "Der Frühling", "Der Herbst"],
    correct: "Der Winter"
  },
  {
    q: "Was beschreibt der 1. Satz von Der Winter?",
    a: ["Zähneklappern, Zittern, Frieren und eisigen Wind", "Blumen, Vogelgesang und Sonne", "Ernte und Tanz", "Gewitter und Hitze"],
    correct: "Zähneklappern, Zittern, Frieren und eisigen Wind"
  },
  {
    q: "Was passt zum 2. Satz von Der Winter?",
    a: ["Kaminfeuer, Gemütlichkeit und Regen draußen", "Eislaufen und Hinfallen", "Zähneklappern und Wind", "Jagd und Ernte"],
    correct: "Kaminfeuer, Gemütlichkeit und Regen draußen"
  },
  {
    q: "Was beschreibt der 3. Satz von Der Winter?",
    a: ["Eislaufen, Knacken der Eisschicht, Hinfallen und Einbrechen ins Eis", "Gemütlich am Feuer sitzen", "Vogelgesang im Frühling", "Schlaf im Sommer"],
    correct: "Eislaufen, Knacken der Eisschicht, Hinfallen und Einbrechen ins Eis"
  },
  {
    q: "Was passiert laut Arbeitsblatt im 1. Satz von Der Winter körperlich?",
    a: ["Man friert und zittert", "Man tanzt und lacht", "Man schläft tief", "Man schwimmt im Meer"],
    correct: "Man friert und zittert"
  },
  {
    q: "Welche Stimmung passt zum 2. Satz von Der Winter am besten?",
    a: ["Gemütlichkeit", "Panik", "Wut", "Triumph"],
    correct: "Gemütlichkeit"
  },
  {
    q: "Was ist laut Blatt ein typisches Bild im 3. Satz von Der Winter?",
    a: ["Das Eis knackt", "Die Sonne brennt", "Blätter fallen", "Blumen blühen"],
    correct: "Das Eis knackt"
  },
  {
    q: "Was kann laut Beschreibung im 3. Satz von Der Winter passieren?",
    a: ["Man fällt hin oder bricht ins Eis ein", "Man sitzt am Kamin", "Man pflückt Blumen", "Man schläft im Schatten"],
    correct: "Man fällt hin oder bricht ins Eis ein"
  },
  {
    q: "Was passt insgesamt am besten zu Antonio Vivaldi?",
    a: ["Komponist, Geiger und Priester", "Maler, Arzt und Dichter", "König, Forscher und Lehrer", "Soldat, Architekt und Händler"],
    correct: "Komponist, Geiger und Priester"
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

const savedHighscore = Number(localStorage.getItem("vivaldiHighscore") || 0);
highscoreEl.textContent = String(savedHighscore);

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function createQuestionPool() {
  return shuffle(questions).map((q) => ({
    ...q,
    a: shuffle(q.a)
  }));
}

function updateScore() {
  scoreEl.textContent = String(score);
}

function updateTimer() {
  timerEl.textContent = String(timeLeft);
  timerEl.classList.remove("warning", "danger");

  if (timeLeft <= 5) {
    timerEl.classList.add("danger");
  } else if (timeLeft <= 10) {
    timerEl.classList.add("warning");
  }
}

function playCorrectSound() {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const o1 = audioCtx.createOscillator();
  const o2 = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  o1.type = "sine";
  o2.type = "triangle";

  o1.frequency.setValueAtTime(523.25, audioCtx.currentTime);
  o2.frequency.setValueAtTime(659.25, audioCtx.currentTime);

  gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.18, audioCtx.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.35);

  o1.connect(gain);
  o2.connect(gain);
  gain.connect(audioCtx.destination);

  o1.start();
  o2.start();
  o1.stop(audioCtx.currentTime + 0.35);
  o2.stop(audioCtx.currentTime + 0.35);
}

function playWrongSound() {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const o = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  o.type = "sawtooth";
  o.frequency.setValueAtTime(220, audioCtx.currentTime);
  o.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + 0.3);

  gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.16, audioCtx.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);

  o.connect(gain);
  gain.connect(audioCtx.destination);

  o.start();
  o.stop(audioCtx.currentTime + 0.3);
}

function stopTimer() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}

function startTimer() {
  stopTimer();
  timeLeft = 20;
  updateTimer();

  timer = setInterval(() => {
    timeLeft -= 1;
    updateTimer();

    if (timeLeft <= 0) {
      stopTimer();
      handleTimeout();
    }
  }, 1000);
}

function disableAllAnswers() {
  const buttons = document.querySelectorAll(".answer-btn");
  buttons.forEach((btn) => {
    btn.disabled = true;
  });
}

function markCorrectAnswer() {
  const buttons = document.querySelectorAll(".answer-btn");
  buttons.forEach((btn) => {
    if (btn.dataset.answer === currentQuestion.correct) {
      btn.classList.add("correct");
    } else {
      btn.classList.add("dimmed");
    }
  });
}

function handleTimeout() {
  if (!acceptingAnswers) return;

  acceptingAnswers = false;
  disableAllAnswers();
  markCorrectAnswer();

  feedbackEl.textContent = "Zeit abgelaufen. Die Frage kommt später nochmal.";
  feedbackEl.className = "feedback timeout";

  queue.push({
    ...currentQuestion,
    a: shuffle(currentQuestion.a)
  });

  setTimeout(() => {
    nextQuestion();
  }, 1400);
}

function handleAnswerClick(selectedBtn) {
  if (!acceptingAnswers) return;

  acceptingAnswers = false;
  stopTimer();
  disableAllAnswers();

  const chosen = selectedBtn.dataset.answer;
  const isCorrect = chosen === currentQuestion.correct;

  markCorrectAnswer();

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    feedbackEl.textContent = "Richtig.";
    feedbackEl.className = "feedback correct";
    score += 1;
    updateScore();
    playCorrectSound();
  } else {
    selectedBtn.classList.add("wrong");
    feedbackEl.textContent = "Falsch. Die Frage kommt später nochmal.";
    feedbackEl.className = "feedback wrong";
    queue.push({
      ...currentQuestion,
      a: shuffle(currentQuestion.a)
    });
    playWrongSound();
  }

  setTimeout(() => {
    nextQuestion();
  }, 1200);
}

function renderQuestion() {
  if (!queue.length) {
    finishQuiz();
    return;
  }

  currentQuestion = queue.shift();
  questionNumber += 1;
  jokerUsed = false;
  acceptingAnswers = true;

  progressEl.textContent = `Frage ${questionNumber}`;
  questionEl.textContent = currentQuestion.q;
  feedbackEl.textContent = "";
  feedbackEl.className = "feedback";
  jokerBtn.disabled = false;
  answersEl.innerHTML = "";

  currentQuestion.a.forEach((answer) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "answer-btn";
    btn.dataset.answer = answer;
    btn.textContent = answer;
    btn.addEventListener("click", () => handleAnswerClick(btn));
    answersEl.appendChild(btn);
  });

  startTimer();
}

function nextQuestion() {
  renderQuestion();
}

function finishQuiz() {
  stopTimer();
  questionEl.textContent = `Quiz beendet. Dein Score: ${score} von ${questions.length}`;
  answersEl.innerHTML = "";
  jokerBtn.disabled = true;
  restartBtn.classList.remove("hidden");

  const oldHighscore = Number(localStorage.getItem("vivaldiHighscore") || 0);

  if (score > oldHighscore) {
    localStorage.setItem("vivaldiHighscore", String(score));
    highscoreEl.textContent = String(score);
    feedbackEl.textContent = "Neuer Highscore. Jetzt sieht das endlich nach Leistung aus.";
    feedbackEl.className = "feedback correct";
  } else if (score === questions.length) {
    feedbackEl.textContent = "Perfekt. Alles richtig. So darf ein Quiz enden.";
    feedbackEl.className = "feedback correct";
  } else if (score >= Math.floor(questions.length * 0.75)) {
    feedbackEl.textContent = "Stark. Du hast das Thema ziemlich sauber drauf.";
    feedbackEl.className = "feedback correct";
  } else if (score >= Math.floor(questions.length * 0.5)) {
    feedbackEl.textContent = "Solide. Da geht noch mehr, aber es lebt.";
    feedbackEl.className = "feedback timeout";
  } else {
    feedbackEl.textContent = "Da ist noch Luft nach oben. Immerhin weiß das Quiz jetzt, wo es weh tut.";
    feedbackEl.className = "feedback wrong";
  }
}

jokerBtn.addEventListener("click", () => {
  if (jokerUsed || !acceptingAnswers) return;

  const buttons = [...document.querySelectorAll(".answer-btn")];
  const wrongButtons = buttons.filter(
    (btn) =>
      btn.dataset.answer !== currentQuestion.correct &&
      !btn.classList.contains("hidden-by-joker")
  );

  if (!wrongButtons.length) return;

  const randomIndex = Math.floor(Math.random() * wrongButtons.length);
  wrongButtons[randomIndex].classList.add("hidden-by-joker");

  jokerUsed = true;
  jokerBtn.disabled = true;
});

restartBtn.addEventListener("click", () => {
  startQuiz();
});

function startQuiz() {
  queue = createQuestionPool();
  currentQuestion = null;
  questionNumber = 0;
  score = 0;
  jokerUsed = false;
  acceptingAnswers = true;

  restartBtn.classList.add("hidden");
  updateScore();
  nextQuestion();
}

startQuiz();
