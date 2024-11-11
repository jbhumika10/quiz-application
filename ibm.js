const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Rome", "Berlin"],
      correct: "Paris"
    },
    {
      question: "Who is the President of the US in 2024?",
      options: ["Joe Biden", "Donald Trump", "Barack Obama", "George Bush"],
      correct: "Joe Biden"
    },
    {
      question: "What is the largest planet in the Solar System?",
      options: ["Earth", "Jupiter", "Mars", "Venus"],
      correct: "Jupiter"
    }
  ];
  
  let currentQuiz = 0;
  let score = 0;
  let selectedAnswer = null; // Variable to store the selected option
  
  const questionElement = document.getElementById("question");
  const optionButtons = Array.from(document.getElementsByClassName("option-btn"));
  const submitButton = document.getElementById("submit");
  const resultElement = document.getElementById("result");
  
  loadQuiz();
  
  function loadQuiz() {
    resetState();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    optionButtons.forEach((button, index) => {
      button.innerText = currentQuizData.options[index];
      button.addEventListener('click', () => selectAnswer(button));
    });
  }
  
  function resetState() {
    optionButtons.forEach(button => {
      button.classList.remove('selected'); // Remove highlight from all options
    });
    resultElement.innerHTML = '';
    selectedAnswer = null; // Reset selectedAnswer
  }
  
  function selectAnswer(selectedButton) {
    optionButtons.forEach(button => {
      button.classList.remove('selected'); // Remove highlight from other options
    });
    selectedButton.classList.add('selected'); // Highlight the selected option
    selectedAnswer = selectedButton.innerText; // Store the selected option
  }
  
  submitButton.addEventListener("click", () => {
    if (selectedAnswer) {
      if (selectedAnswer === quizData[currentQuiz].correct) {
        score++;
      }
      currentQuiz++;
      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        showResult();
      }
    } else {
      resultElement.innerText = "Please select an option!";
    }
  });
  
  function showResult() {
    quiz.innerHTML = `
      <h2>You scored ${score} out of ${quizData.length}.</h2>
      <button onclick="location.reload()">Reload</button>
    `;
  }