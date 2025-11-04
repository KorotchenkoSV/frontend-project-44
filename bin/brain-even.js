#!/usr/bin/env node

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askQuestion = (number) => {
  console.log(`Question: ${number}`);
  return new Promise((resolve) => {
    rl.question('Your answer: ', (answer) => {
      resolve(answer.trim().toLowerCase());
    });
  });
};

const isEven = (num) => num % 2 === 0;

const playGame = async () => {
  console.log('Welcome to the Brain Games!');
  rl.question('May I have your name? ', async (name) => {
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let correctAnswers = 0;
    const requiredCorrect = 3;

    while (correctAnswers < requiredCorrect) {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      const userAnswer = await askQuestion(randomNumber);
      const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

      if (userAnswer === correctAnswer) {
        console.log('Correct!');
        correctAnswers++;
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${name}!`);
        rl.close();
        return;
      }
    }

    console.log(`Congratulations, ${name}!`);
    rl.close();
  });
};

playGame();
