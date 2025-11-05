import { runGame } from '../index.js';


const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Алгоритм Евклида для нахождения НОД
const findGCD = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const generateQuestion = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  
  const correctAnswer = findGCD(num1, num2);
  const question = `${num1} ${num2}`;
  
  return { question, correctAnswer };
};

export default () => {
  const description = 'Find the greatest common divisor of given numbers.';
  runGame(generateQuestion, description);
};
