import { runGame } from '../index.js'

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

// Предикат: проверяет, является ли число простым
const isPrime = (num) => {
  if (num < 2) return false
  if (num === 2) return true
  if (num % 2 === 0) return false

  // Проверяем делители от 3 до √num
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false
  }
  return true
}

const generateQuestion = () => {
  const number = getRandomInt(2, 100) // числа от 2 до 100
  const correctAnswer = isPrime(number) ? 'yes' : 'no'

  return { question: number, correctAnswer }
}

export default () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'
  runGame(generateQuestion, description)
}
