const correctAnswers = ["C", "D", "A", "C", "B", "C", "A", "D", "B", "C"];
const form = document.querySelector(".quiz-form");
const results = document.querySelector("#results");
const startQuizBtn = document.querySelector(".take-quiz-btn");
console.log(scrollY);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
    form.q6.value,
    form.q7.value,
    form.q8.value,
    form.q9.value,
    form.q10.value,
  ];

  console.log(form.q2.value);

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 10;
    }
  });

  const totalScore = score;
  results.classList.remove("hide");
  //   results.querySelector(".result-percent").textContent = `${totalScore}%`;
  scroll({
    top: 900,
    behavior: "smooth",
  });

  let count = 0;

  const timer = setInterval(() => {
    results.querySelector(".result-percent").textContent = `${count}%`;
    if (count === totalScore) {
      clearInterval(timer);
    } else {
      count++;
    }
  }, 60);
});

startQuizBtn.addEventListener("click", function (e) {
  const quizArea = document.querySelector("#quiz");
  scroll({
    top: quizArea.offsetTop,
    behavior: "smooth",
  });
});
