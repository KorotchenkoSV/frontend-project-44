import readline from 'readline'

export const runGame = (game, description) => {
  console.log('Welcome to the Brain Games!')

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  rl.question('May I have your name? ', (name) => {
    console.log(`Hello, ${name}!`)
    console.log(description)

    let correctAnswers = 0
    const requiredCorrect = 3

    const askQuestion = async () => {
      const { question, correctAnswer } = game()
      console.log(`Question: ${question}`)

      rl.question('Your answer: ', async (userAnswer) => {
        const userAnswerTrimmed = userAnswer.trim()

        if (userAnswerTrimmed === correctAnswer.toString()) {
          console.log('Correct!')
          correctAnswers++

          if (correctAnswers < requiredCorrect) {
            await askQuestion()
          }
          else {
            console.log(`Congratulations, ${name}!`)
            rl.close()
          }
        }
        else {
          console.log(`'${userAnswerTrimmed}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
          console.log(`Let's try again, ${name}!`)
          rl.close()
        }
      })
    }

    askQuestion()
  })
}
