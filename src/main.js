const FortuneTeller = require('galvanize-game-mechanics').FortuneTeller

/*
  `questions` will be a comma separated list of questions. For example:
  -> 'Will it rain?,Should I bring an umbrella?,Will I find $10 today?'

  You should separate the questions and use the FortuneTeller to
  return a response for each one as an array. For example, the final
  result might be:
  [ 'Yes', 'Outlook good', 'My reply is no' ]

  You do not need to `.catch()` any errors.
*/

function answerQuestions( questions ) {
  let result = [];
  let questionArray = questions.split( "," )
  let promises = questionArray.map(question=>{
    return FortuneTeller.ask(question)
  })

  return Promise.all(promises).then((res)=>{
     return res.map((item)=>{
       return item.response;
     })
   })
}


module.exports = {
  answerQuestions
}
