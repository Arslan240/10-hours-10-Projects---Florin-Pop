// we can use array of question objects which contains question, options and correct answer.

const quizData = [
  {
    question: 'How old is Arslan?',
    a: '10',
    b: '20',
    c: '21',
    d: '35',
    correct: 'c'
  },
  {
    question: 'What is the most used programming language?',
    a: 'Javascript',
    b: 'C',
    c: 'C#',
    d: 'Python',
    correct: 'a'
  },
  {
    question: 'Who is the Prime Minister of Pakistan?',
    a: 'Nawaz Sharif',
    b: 'Jahangeer Tareen',
    c: 'Imran Khan',
    d: 'Yousaf Raza Gillani',
    correct: 'c'
  },
  {
    question: 'What does HTML stands for?',
    a: 'Cascading style sheets',
    b: 'JSON object notation',
    c: 'Hypertext Markup Language',
    d: 'Helikopters Terminals Motorboats Lamborginis',
    correct: 'c'
  },
  {
    question: 'What year was Javascript launched?',
    a: '1995',
    b: '2020',
    c: '2021',
    d: '1935',
    correct: 'a'
  },
];

// quiz card element
const quiz_card = document.querySelector('.quiz-container');

// question element
const questionEl = document.getElementById('question');

// mcq answer options labels
const a_text = document.getElementById('a_text'); 
const b_text = document.getElementById('b_text'); 
const c_text = document.getElementById('c_text'); 
const d_text = document.getElementById('d_text'); 
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
loadQuiz();

/* Event Listeners */
submit.addEventListener("click", () => {
  const answer = getSelected();
  
  if(answer === quizData[currentQuiz].correct){
    score++;
  }

  if(RadioStatus() != null){
    currentQuiz++;
    if(currentQuiz < quizData.length){
      loadQuiz();
    }
    else {
      //TODO: 
      showScore();
    }
  }else {
    alert('please select an option');
  }
});

/* Functions */

// this will be called every time we submit and it is called when the page loads for first time.
function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];
  
  // we set the question# index in the question array for setting question.
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  uncheckRadio();
}

// to uncheck the radio buttons when moving to next question.
function uncheckRadio(){
  var radio = document.querySelector('input[type=radio]:checked');
  if(radio != null){
    radio.checked = false;
  }
}

function RadioStatus() {
  
  radio = document.querySelector('input[type=radio]:checked');
  return radio;
}

function getSelected(){
  const answerEls = document.querySelectorAll('.answer');
  let id = undefined;

  // return does not work in the foreach loop. IDK why it doesn't work.
  answerEls.forEach(answerEl => {
    if(answerEl.checked) {
      id = answerEl.id;
    }
  });

  return id;

}

function showScore(){
  quiz_card.innerHTML = `
        <h2 class="score-heading">Your score is ${score}/${quizData.length}</h2>
        <button onClick="location.reload()">Reload</button>
      `;
  const score_heading = document.querySelector('.score-heading');
  score_heading.style.padding = '1em';
  score_heading.style.textAlign = 'center';
}

