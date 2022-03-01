/*  ======================
DOM Elements needed
====================== */

const faq_icon = document.getElementById('faq-icon');
const payments_icon = document.getElementById('payments-icon');
const deliveries_icon = document.getElementById('deliveries-icon');
const return_icon = document.getElementById('return-icon');
const complaint_icon = document.getElementById('complaint-icon');
// Onload page faq_icon's background is changed. So, we assign it to previously clicked icon.
let clicked_icon = faq_icon;
let prev_questions = document.getElementsByClassName('question-div'); /* we'll remmove it before adding new question divs. */
// open close functionality of icon


/*  ================
      ICONS for later injecting them into html
    ================ */

const chevron_up_className = 'fa-solid fa-chevron-up';
const chevron_down_className = 'fa-solid fa-chevron-down';


const backgroud_color_after = '#FEFFFE';
const backgroud_color_before = '#EAECFC';
const border_radius = '.35em';

/*  ======================
Question arrays.
====================== */
const faq_questions = [
  {
    ques : 'What is the name of the Company?',
    answ : 'Name of my company is the Zhisk International.',
    id : 'a'
  },
  {
    ques : 'When the company was established?',
    answ : 'Zhisk International was established in 1990',
    id : 'b'
  }
];
const payments_questions = [
  {
    ques : 'What technology is used for payment?',
    answ : 'We use mastercard, 1Link, and visa card for secure payments.',
    id : 'a'
  },
  {
    ques : 'What are the specifications included in the invoice?',
    answ : 'Invoice includes price, number of items, order no and other important specifications.',
    id : 'b'
  }
];
const deliveries_questions = [
  {
    ques : 'Which company do you use for delivery?',
    answ : 'We work with FedEx, UPS, USPS, and DHL.',
    id : 'a'
  },
  {
    ques : 'How are delivery charges calculated?',
    answ : 'Delivery Charges are calculated based on the formula of 10c/mile in the country wide shipping.',
    id : 'b'
  },
  {
    ques : 'How much time does delivery takes?',
    answ : 'Delivery can take 1 - 3 days.',
    id : 'c'
  }
];
const return_questions = [
  {
    ques : 'What is the return policy of the items?',
    answ : 'We have 15 day return policy with no questions asked.',
    id : 'a'
  },
  {
    ques : 'What is the credit policy?',
    answ : 'Credit will be cleared in the case of credit card payment.',
    id : 'b'
  },
];
const complaint_questions = [
  {
    ques : 'Where we can email suggestions?',
    answ : 'You can email your suggestions or any query on this@zhisk.com',
    id : 'a'
  },
  {
    ques : 'How long does it take to resolve a compalint?',
    answ : 'Any complaint related to product can be resolved usually on the same day.',
    id : 'b'
  },
];

// dddddddddddddddddddddddd

console.log(prev_questions);
const ques_div = document.querySelector('.question-div');
const new_question = create_question_div(faq_questions[0].ques,faq_questions[0].answ,0);
const faq_section = document.querySelector('.faq-section');
faq_section.appendChild(new_question);
const open_close_icon = document.getElementsByClassName('icon');
// dddddddddddddddddddddddd







/*  ======================
Event Listeners
====================== */

 



faq_icon.addEventListener('click', () => {
  changeBackground(faq_icon);
  removePreviousQuestions(prev_questions);
  faq_questions.forEach((faq_question, index) => {
    console.log(index);
    const new_question = create_question_div(faq_question.ques,faq_question.answ,index);
    faq_section.appendChild(new_question);
  });
  console.log(open_close_icon);
});

payments_icon.addEventListener('click', () => {
  changeBackground(payments_icon);
  removePreviousQuestions(prev_questions);
  payments_questions.forEach((payments_question, index) => {
    console.log(index);
    const new_question = create_question_div(payments_question.ques,payments_question.answ,index);
    faq_section.appendChild(new_question);
  });
});

deliveries_icon.addEventListener('click', () => {
  changeBackground(deliveries_icon);
  removePreviousQuestions(prev_questions);
  deliveries_questions.forEach((deliveries_question, index) => {
    console.log(index);
    const new_question = create_question_div(deliveries_question.ques,deliveries_question.answ,index);
    faq_section.appendChild(new_question);
  });
});

return_icon.addEventListener('click', () => {
  changeBackground(return_icon);
  removePreviousQuestions(prev_questions);
  return_questions.forEach((return_questions, index) => {
    console.log(index);
    const new_question = create_question_div(return_questions.ques,return_questions.answ,index);
    faq_section.appendChild(new_question);
  });  
});

complaint_icon.addEventListener('click', () => {
  changeBackground(complaint_icon);
  removePreviousQuestions(prev_questions);
  complaint_questions.forEach((complaint_question, index) => {
    console.log(index);
    const new_question = create_question_div(complaint_question.ques,complaint_question.answ,index);
    faq_section.appendChild(new_question);
  });
});


/*  ======================
Functions
====================== */


/*TODO: call a function which creates question_div for all the questions in the question array.*/
function createQuestionElements(question_array){
  // We'll remove any question-div that is present before
  const ques_div = document.querySelector('.question-div');
  
  
  if(ques_div != null) ques_div.remove();
  const question_div = `
  <div class="question-div">
  <div class="question">
  <span class="question-text">Question</span>
  <i class="fa-solid fa-chevron-up icon"></i>
  </div>
  <p class="answer">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus quibusdam voluptas maiores reiciendis culpa dolore rem consectetur non commodi ullam, officia mollitia tempora adipisci</p>
  </div>
  `;  
}

function create_question_div(question, answer, index){
  // outer div
  const question_div = document.createElement('div');
  question_div.classList.add('question-div');
  
  // flex-container for question
  const question_flex = document.createElement('div');
  question_flex.classList.add('question');
  
  // question span
  const question_text_node = document.createTextNode(question);
  const question_span = document.createElement('span');
  question_span.classList.add('question-text');
  question_span.appendChild(question_text_node);
  
  // answer
  const answer_text_node = document.createTextNode(answer);
  const answer_para = document.createElement('p');
  answer_para.classList.add('answer');
  answer_para.appendChild(answer_text_node);
  
  // icon
  const icon = document.createElement('i');
  if(index === 0) {
    icon.classList.add('fa-solid','fa-chevron-up', 'icon');
    // setting display of answer
    answer_para.style.display = 'block';
  }
  else {
    icon.classList.add('fa-solid', 'fa-chevron-down', 'icon');
    answer_para.style.display = 'none';
  }
  
  question_flex.appendChild(question_span);
  question_flex.appendChild(icon);
  
  
  question_div.appendChild(question_flex);
  question_div.appendChild(answer_para);
  return question_div;
}


function changeBackground(current_icon){
  // changing previous clicked icon's style to normal.
  clicked_icon.style.background = backgroud_color_before;
 
  // changing the clicked icon to the current icon.
  clicked_icon = current_icon;
  
  clicked_icon.style.background = backgroud_color_after;
  clicked_icon.style.borderRadius = border_radius;
}

function removePreviousQuestions(questions){
  Array.from(questions).forEach((question) => {
    question.remove();
  })
}

// if (open_close_icon != null){
  const icons = Array.from(open_close_icon);
  
  icons.forEach((icon) => {
    icon.addEventListener('click', () => { 
      const classes = Array.from(icon.classList); /* dom token list converted to array. */
      console.log('icon is clicked');
      
      classes.forEach((className) => {
        if(className === 'fa-chevron-up'){
          console.log('icon is up');
          
          // answer element is get and hidden
          // console.log(icon.parentElement.nextElementSibling);
          icon.parentElement.nextElementSibling.style.display = 'none';
          
          // icons is changed from what it was before.
          icon.classList.remove('fa-chevron-up');
          icon.classList.add('fa-chevron-down');
        }
        else if(className === 'fa-chevron-down'){
          console.log('icon is down');
          
          // answer element is get and displayed.
          icon.parentElement.nextElementSibling.style.display = 'block';
          
          icon.classList.remove('fa-chevron-down');
          icon.classList.add('fa-chevron-up');
        }
      });
      console.log(icons);
    });
  }); 
// }  



