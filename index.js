let readlineSync = require("readline-sync");
let kuler = require("kuler");
let score = 0;

// Welcome message
let userName = readlineSync.question("Enter your name: ");
console.log(kuler(`Welcome ${userName} to the Dev Doom Quiz`, "#ff0000"));

// Dark Humor Web Dev Questions
const database = {
  data: [
    {
      question: "💥 Why did the developer go broke?",
      options: {
        a: "Too many SaaS subscriptions",
        b: "Used ChatGPT to negotiate salary",
        c: "Spent it all on Tailwind typography plugin",
        d: "Because he deployed on Vercel and thought that was 'the job'",
      },
      correctAnswer: "d",
    },
    {
      question: "🧠 What’s a developer’s favorite debugging strategy?",
      options: {
        a: "console.log('why') everywhere",
        b: "Sacrifice a rubber duck",
        c: "Blame the backend dev",
        d: "Stare at the screen until the bug feels guilty",
      },
      correctAnswer: "a",
    },
    {
      question: "🪦 What happens if you open 1,000 Chrome tabs during dev?",
      options: {
        a: "You unlock ultra instinct mode",
        b: "Your PC achieves sentience, then dies",
        c: "VS Code starts lagging like a Unity game",
        d: "Your fan becomes a jet engine and takes off",
      },
      correctAnswer: "d",
    },
    {
      question: "⚰️ What’s the most dangerous line of code?",
      options: {
        a: "`rm -rf /`",
        b: "`git push --force`",
        c: "`eval()` inside user input",
        d: "`position: absolute;` with no context",
      },
      correctAnswer: "d",
    },
    {
      question: "💤 What’s the real purpose of `npm install`?",
      options: {
        a: "To get work done faster",
        b: "To download 700MB of stuff you’ll never use",
        c: "To trigger dependency hell",
        d: "To take a coffee break while it builds",
      },
      correctAnswer: "b",
    },
  ],
};

// 🧟‍♂️ Brainrot Leaderboard
let leaderboard = {
  data: [
    { name: "Chopped Chin", score: 2 },
    { name: "Playboi Carti (2016)", score: 3 },
    { name: "Elon Tusk", score: 1 },
    { name: "Sigma Coder 9000", score: 4 },
    { name: "Mr. Worldwide Web", score: 3 },
  ],
};

// Start Quiz
function startQuiz() {
  for (let i = 0; i < database.data.length; i++) {
    console.log(`\n\nQ${i + 1} - ${database.data[i].question} \n`);
    for (let key in database.data[i].options) {
      console.log(`${key} - ${database.data[i].options[key]}`);
    }
    let userAnswer = readlineSync.question("Enter your answer: ").toLowerCase();

    checkAnswer(userAnswer, database.data[i].correctAnswer);
  }

  leaderboard.data.push({
    name: userName,
    score: score,
  });

  showLeaderboard(leaderboard);
}

function checkAnswer(userAnswer, correctAnswer) {
  if (userAnswer == correctAnswer) {
    console.log(kuler("✅ Correct Answer", "#059669"));
    score++;
  } else {
    console.log(kuler("❌ Incorrect Answer", "#b91c1c"));
    console.log(kuler(`Correct Answer is ${correctAnswer}`, "#1d4ed8"));
  }
}

// Show Leaderboard
function showLeaderboard(leaderboard) {
  let sortedLeaderboard = leaderboard.data.sort((a, b) => b.score - a.score);
  console.log(kuler("\nLeaderboard 📊", "#fde047"));

  for (let i = 0; i < sortedLeaderboard.length; i++) {
    console.log(
      `${i + 1} - ${sortedLeaderboard[i].name} - score: ${sortedLeaderboard[i].score}`,
    );
  }

  if (score >= sortedLeaderboard[0].score) {
    console.log(
      kuler(
        `👑 Congrats ${userName}, you just dethroned Chopped Chin.`,
        "#84cc16"
      )
    );
  } else {
    console.log(
      kuler("You tried. Like Internet Explorer. RIP.", "#facc15")
    );
  }
}

startQuiz();

console.log(kuler(`\nYour final score is: ${score}`, "#5eead4"));
