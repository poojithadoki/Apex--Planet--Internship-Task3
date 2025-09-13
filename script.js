 const questions = [
      { question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language","High Tech Machine Language","Home Tool Markup Language","Hyperlinks and Text Markup Language"],
        answer: "Hyper Text Markup Language" },
      { question: "Which HTML tag is used to create a hyperlink?",
        options: ["<a>", "<link>", "<href>", "<hyperlink>"],
        answer: "<a>" },
      { question: "Which attribute is used to display an image in HTML?",
        options: ["src", "href", "alt", "img"],
        answer: "src" },
      { question: "Which CSS property is used to change the text color?",
        options: ["font-color","text-color","color","text-style"],
        answer: "color" },
      { question: "What does CSS stand for?",
        options: ["Cascading Style Sheets","Creative Style System","Computer Styled Sections","Colorful Style Sheets"],
        answer: "Cascading Style Sheets" }
    ];

    let currentQuestion = 0;
    let score = 0;

    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const nextBtn = document.getElementById("nextBtn");
    const scoreElement = document.getElementById("score");

    function loadQuestion() {
      const q = questions[currentQuestion];
      questionElement.textContent = q.question;
      optionsElement.innerHTML = "";

      q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => checkAnswer(option);
        optionsElement.appendChild(btn);
      });
    }

    function checkAnswer(selected) {
      const correct = questions[currentQuestion].answer;
      if (selected === correct) {
        score++;
        alert("Correct!");
      } else {
        alert("Wrong! Correct answer: " + correct);
      }
      nextBtn.style.display = "block";
    }

    nextBtn.addEventListener("click", () => {
      currentQuestion++;
      if (currentQuestion < questions.length) {
        loadQuestion();
        nextBtn.style.display = "none";
      } else {
        showScore();
      }
    });

    function showScore() {
      questionElement.textContent = "Quiz Completed!";
      optionsElement.innerHTML = "";
      nextBtn.style.display = "none";
      scoreElement.textContent = `Your Score: ${score} / ${questions.length}`;
    }

    loadQuestion();

    
    function getJoke() {
      fetch("https://v2.jokeapi.dev/joke/Programming")
        .then(response => response.json())
        .then(data => {
          if (data.type === "single") {
            document.getElementById("joke").innerText = data.joke;
          } else {
            document.getElementById("joke").innerText = data.setup + " - " + data.delivery;
          }
        })
        .catch(error => {
          document.getElementById("joke").innerText = "Oops! Could not fetch a joke.";
          console.error("Error fetching joke:", error);
        });
    }