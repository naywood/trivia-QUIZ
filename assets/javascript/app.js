var questions = [{
    question: "Where did Daenerys Targaryen eventually hatch her dragon eggs?",
    choices: ["In a lightening storm", "In a fireplace", "In a funeral pyre", "In a cave"],
    answer: "In a funeral pyre",
    //name so that each question's set of answers will have a differently named radio button to enable only one option choice per question
    name: "question1"
  },

  {
    question: "The phrase 'Valar Morghulis' or 'all men must die' is usually responded with:",
    choices: ["Valar Rohnas","Valar Dohaeris", "Valar Dothraki"],
    answer: "Valar Dohaeris",
    name: "question2"
  },

  {
    question: "What material(s) are capable of killing White Walkers?",
    choices: ["Wildfire", "Weirwood and Dragonglass", "Valyrian Steel and Dragonglass","Valyrian Steel"],
    answer: "Valyrian Steel and Dragonglass",
    name: "question3"
  },

  {
    question: "How many times has the God of Light brought Beric Dondarrion back to life?",
    choices: ["three times","four times","five times","six times","he died"],
    answer: "six times",
    name: "question4"
  },

  {
    question: "What is the name of King Tommen's cat?",
    choices: ["Ser Pounce","Boots", "Ser Tomcat", "Lady Whiskers"],
    answer: "Ser Pounce",
    name: "question5"
  },

  {
    question: "Who created the secret tunnel in the sewers under Casterly Rock?",
    choices: ["Lord Baelish","Tyrion Lannister", "Lancel Lannister", "Cersei Lannister"],
    answer: "Tyrion Lannister",
    name: "question6"
  },

  {
    question: "At the end of his training, what must an Unsullied do to prove he has no mercy or weakness?",
    choices: ["Castrate himself", "Castrate another Unsullied","Kill a newborn slave child","kill a master" ],
    answer: "Kill a newborn slave child",
    name: "question7"
  },
  {
    question: "What is the name of Rob Stark's wife?",
    choices: ["Walda","Talisa","Shirei","Tifini"],
    answer: "Talisa",
    name: "question8"
  },
  {
    question: "What direwolf dies first?",
    choices: ["Nymeria","Summer","Ghost", "Lady"],
    answer: "Lady",
    name: "question9"
  },
  {
    question: " 'You killed her children. Say her name!' Prince Oberyn Martell is shouting at the Mountain to say what name?",
    choices: ["Meria Martell", "Myriah Martell","Doran Martel", "Elia Martell"],
    answer: "Elia Martell",
    name: "question10"
  },
  {
    question: "Who is the Queen of Thorns?",
    choices: ["Cersei Lannister","Margaery Tyrell","Olenna Tyrell","Lynna Mormont"],
    answer: "Olenna Tyrell",
    name: "question11"
  },
  {
    question: "Who brings Ned Stark water while in his Black Cell?",
    choices: ["Petyr Baelish", "Robert Baratheon",  "Maester Pycelle", "Lord Varys"],
    answer: "Lord Varys",
    name: "question12"
  },
  {
    question: "What is Little Finger's sigil?",
    choices: ["Blackfish", "Mockingbird", "Raven", "Otter"],
    answer: "Mockingbird",
    name: "question13"
  },
  {
    question: "Who helped Sansa escape King's Landing following Joffrey's death?",
    choices: ["Dontos Hollard", "Petyr Baelish","Lord Varys", "Shae"],
    answer: "Dontos Hollard",
    name: "question14"
  },
  {
    question: "Who was the last known Targaryen in Westeros?",
    choices: ["Rheagar Targaryen","Aegon Targaryen","Aemon Targaryen","Viserys Targaryen"],
    answer: "Aemon Targaryen",
    name: "question15"
  },
  {
    question: "What are the 3 cities that make up Slaver's Bay?",
    choices: ["Qarth, Tarth, Casterly Rock", "Astapoll, Volantis, Qarth", "Astapor, Yunkai, Meereen","Red Waste, Valyia, Vaes"],
    answer: "Astapor, Yunkai, Meereen",
    name: "question16"
  },
  {
    question: "What are the names of Daenery's dragons?",
    choices: ["Dragon, Rheagal, Viserys", "Drogon, Eagon, Viserion","Drogon, Rhaegal, Viserion", "Smaug, Saphira, Dragon"],
    answer: "Drogon, Rhaegal, Viserion",
    name: "question17"
  },
  {
    question: "What is the Widow's Wail",
    choices: ["The song played at the Red Wedding", "The name of a Greyjoy Ship","Joffrey's Valyrian steel sword", "Poison used to kill Lady Olenna"],
    answer: "Joffrey's Valyrian steel sword",
    name: "question18"
  },
  {
    question: "Who is the Onion Knight?",
    choices: ["Davos Seaworth", "Bron","Ilyn Payne", "Podrick Payne"],
    answer: "Davos Seaworth",
    name: "question19"
  },
  {
    question: "How did Davos find out about Princess Shireen's death?",
    choices: ["The Red Woman told him", "He watched as she burned at the stake","He found the wooden stag, charred", "The Lord of Light showed him"],
    answer: "He found the wooden stag, charred",
    name: "question20"
  },
]

//counter that will change on stats page
var correctCount = 0;
var incorrectCount = 0;
var unansweredCount = questions.length;

//timer set to two minutes
var number = 240;
var intervalId;

//function to run the timer
function run() {
  intervalId = setInterval(decrement, 1000);
}

//function to decrement timer used in run function, show the timer in the html, and change to the stats page when timer hits 0
function decrement() {
  number--;
  $("#timer").html(number);
  if (number === 0) {
  	//see functions at the end
    checkAnswers();
    renderStats();
  }
}

//hides submit button when page loads
$("#submit-button").hide();


//when start button is clicked
$("#start-button").click(function() {
  $("#start-button").hide();
  $("#submit-button").show();
  $("#timer").text(number);
  run();

  //loops through object and creates questions
  for (var i = 0; i < questions.length; i++) {

    $("#content").append("<br>" + questions[i].question + "<br>");

    //loops through object and creates answers with radio buttons for each question
    for (var a = 0; a < questions[i].choices.length; a++) {
      $("#content").append("<input type='radio' name= '" + questions[i].name + "' value='" + questions[i].choices[a] + "'>" + "&nbsp;" + questions[i].choices[a] + "<br>");
    }
  }

});

//function to change to stats page on click of submit button
$("#submit-button").click(function() {
  checkAnswers();
  renderStats();
})

//function to check answers
function checkAnswers() {
	//variable to select all the radios
  var radios = $("input[type='radio']");
  //filters all the radios for ones that are check and maps them onto new function
  var answersSelected = radios.filter(":checked").map(function() {
  	//empty object to hold name, question, and index for user input
    var answerObject = {}
    //saves name (question1 etc) as answeredQuestion
    var answeredQuestion = $(this).attr("name");
    //saves value (answer) as answerValue
    var answerValue = $(this).val();
    //since answeredQuestion is somethign like question1, this slices off the 1, subtracts 1 from that number, and sets is as questionIndex; this makes the index of the question the user answered findable for later comparison
    var questionIndex = answeredQuestion.slice(-1) - 1;

    //saves the question answered, user answer (value), and index as key value pairs in answerObject
    answerObject.answeredQuestion = answeredQuestion;
    answerObject.answerValue = answerValue;
    answerObject.questionIndex = questionIndex;

    //returns object array, since map needs sometshing to return
    return answerObject;
  });

  //loops through answers that have been selected to make comparison
  for (var i = 0; i < answersSelected.length; i++) {
  	//saves the guess the user made (value)
    var userGuess = answersSelected[i].answerValue;
    //saves the index of the user's guess as masterIndex
    var masterIndex = answersSelected[i].questionIndex;
    //saves the correct answer as the answer that exists within the original questions object at the index the user guessed
    var correctAnswer = questions[masterIndex].answers;
    if (userGuess === correctAnswer) {
      correctCount++;
    } else {
      incorrectCount++;
    }
    //compute unanswered count 
    unansweredCount = questions.length - answersSelected.length;
  }
}

//function to render the stats page, hide and clear time, and hide submit button
function renderStats() {
  $("#content").html("<h2>" + "Finished!" + "</h2>" + "<h3>" + "Correct Answers: " + correctCount + "</h3>" + "<h3>" + "Incorrect Answers: " + incorrectCount + "</h3>" + "<h3>" + "Unanswered: " + unansweredCount + "</h3>");
  $("#timer").hide();
  $("#submit-button").hide();
  clearInterval(intervalId);
}
