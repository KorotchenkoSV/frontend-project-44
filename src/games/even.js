import { runGame } from '../index.js';


const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateQuestion = () => {
  const number = getRandomInt(1, 100);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return { question: number, correctAnswer };
};

export default () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(generateQuestion, description);
};
