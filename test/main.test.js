const main = require('../src/main')
const chai = require('chai')
const expect = chai.expect

chai.use(require('chai-as-promised'))

describe('answerQuestions', function () {
  it('should answer the questions from a comma separated list of questions', function () {
    const questions = 'Will it rain?,Should I bring an umbrella?,Will I find $10 today?'
    const result = main.answerQuestions(questions)

    return expect(result).to.eventually.be.an('array')
    return expect(result).to.eventually.have.lengthOf(3)
  })

  it('should answer a single question', function () {
    const questions = 'Will it rain?'
    const result = main.answerQuestions(questions)

    return expect(result).to.eventually.be.an('array')
    return expect(result).to.eventually.have.lengthOf(1)
  })

  it('should return a single error as an object questions', function () {
    const questions = 'Will it rain?,,Will I find $10 today?'
    const result = main.answerQuestions(questions)

    return expect(result).to.eventually.be.rejected
    return expect(result).to.eventually.have.property('error')
  })
})
