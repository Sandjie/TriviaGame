var panel = $("#quiz-area");
// Question set
var questions = [{
  question: "What is the most populated country in the world?",
  answers: ["India","China", "USA", "Pakistan"],
  correctAnswer: "China"
}, {
  question: "What is the least populated country in the world?",
  answers: ["Tuvalu", "Vatican City", "Greenland", "Monaco"],
  correctAnswer: "Vatican City"
}, {
  question: "Which country has the lowest birth rates in the world?",
  answers: ["Andorra", "South Korea", "Monaco", "Japan"],
  correctAnswer: "Monaco"
}, {
  question: "Which country's population has grown the most since last year?",
  answers: ["Lebanon", "Zimbabwe", "Jordan", "Qatar"],
  correctAnswer: "Lebanon"
}, {
  question: "Which country in the world is most ethically diverse by population?",
  answers: ["United States", "Peru", "England", "Denmark"],
  correctAnswer: "United States"
}, {
  question: "Which is the second country in the world that is most ethically diverse by population?",
  answers: ["United States", "Peru", "England", "Denmark"],
  correctAnswer: "Peru"
}, {
  question: "Which island is the most diverse?",
  answers: ["Dominican Republic", "Bahamans", "Curaco", "Haiti"],
  correctAnswer: "Curaco"
}, {
  question: "Which country is the most linguistically diverse?",
  answers: ["Papuea New Guinea", "Vanatu", "Solomon Islands", "Tanzania"],
  correctAnswer: "The BoogeyMan"
}];
// Variable that will hold the setInterval
var timer;

var game = {
  correct: 0,
  incorrect: 0,
  counter: 160,
  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);
    $("#sub-container").prepend("<h2>Time Ends in.. : <span id='counter-number'>120</span> Seconds</h2>");
    $("#start").remove();
    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }
    panel.append("<button id='done'>Done</button>");
  },
  done: function() {
    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    this.result();
  },
  result: function() {
    clearInterval(timer);
    $("#sub-container h2").remove();
    panel.html("<h2>Your Results.</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};
// CLICK EVENTS
$(document).on("click", "#start", function() {
  game.start();
 
  
});
$(document).on("click", "#done", function() {
  game.done();
  
});