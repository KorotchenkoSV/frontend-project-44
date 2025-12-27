import { runGame } from '../index.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateQuestion = () => {
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 50);
  
  // Случайная операция
  const operations = ['+', '-', '*'];
  const operation = operations[getRandomInt(0, operations.length - 1)];
  
  let correctAnswer;
  switch (operation) {
  case '+':
    correctAnswer = num1 + num2;
    break;
  case '-':
    correctAnswer = num1 - num2;
    break;
  case '*':
    correctAnswer = num1 * num2;
    break;
  default:
    correctAnswer = 0;
  }
  
  const question = `${num1} ${operation} ${num2}`;
  return { question, correctAnswer };
};

const calcGame = () => generateQuestion();

export default () => {
  const description = 'What is the result of the expression?';
  runGame(calcGame, description);
};
