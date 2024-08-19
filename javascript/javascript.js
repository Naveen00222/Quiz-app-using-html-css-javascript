let questions = [
    {
      question: "What is the capital of France?",
      answers: ["Paris", "Berlin", "London", "Rome"],
      correct: 0
    },
    {
      question: "Which of the following planets is known as the Red Planet?",
      answers: ["Earth", "Mars", "Jupiter", "Saturn"],
      correct: 1
    },
    {
      question: "Which of the following programming languages is used for web development?",
      answers: ["Java", "Python", "JavaScript", "C++"],
      correct: 2
    },
    {
      question: "Which of the following is a popular social media platform?",
      answers: ["Facebook", "Twitter", "Instagram", "LinkedIn"],
      correct: 0
    },
    {
      question: "Which of the following is a popular music streaming service?",
      answers: ["Spotify", "Apple Music", "Tidal", "SoundCloud"],
      correct: 0
    }
  ];
  
  let score = 0;
  
  document.querySelectorAll('input[type="radio"]').forEach((radio) => {
    radio.addEventListener("change", (e) => {
      let questionIndex = parseInt(e.target.name.replace("q", "")) - 1;
      let answerIndex = parseInt(e.target.value);
      if (answerIndex === questions[questionIndex].correct) {
        score++;
        e.target.parentNode.classList.add("correct");
      } else {
        e.target.parentNode.classList.add("incorrect");
      }
    });
  });
  
  document.getElementById("submit").addEventListener("click", () => {
    let correctAnswers = "";
    questions.forEach((question, index) => {
      correctAnswers += `Question ${index + 1}: ${question.answers[question.correct]}\n`;
    });
    alert(`You scored ${score} out of ${questions.length}!\nCorrect answers:\n${correctAnswers}`);
  });