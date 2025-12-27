import { runGame } from '../index.js'

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

// Генерирует арифметическую прогрессию
const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step)
  }
  return progression
}

const generateQuestion = () => {
  // Параметры прогрессии
  const start = getRandomInt(1, 20) // начальное число
  const step = getRandomInt(1, 10) // шаг прогрессии
  const length = getRandomInt(5, 10) // длина (5–10 чисел)

  const progression = generateProgression(start, step, length)

  // Выбираем случайную позицию для пропуска
  const hiddenIndex = getRandomInt(0, length - 1)
  const correctAnswer = progression[hiddenIndex]

  // Формируем вопрос: заменяем одно число на '..'
  const questionParts = progression.map((num, index) =>
    index === hiddenIndex ? '..' : num.toString(),
  )
  const question = questionParts.join(' ')

  return { question, correctAnswer }
}

export default () => {
  const description = 'What number is missing in the progression?'
  runGame(generateQuestion, description)
}
