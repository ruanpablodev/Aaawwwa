const openai = require('openai-client');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

openai.apiKey = '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';

async function askQuestion(question) {
  const response = await openai.Completion.create({
    prompt: question,
    model: 'text-davinci-002',
  });

  console.log(response.text);
}

readline.question('Qual é a sua pergunta? ', (question) => {
  askQuestion(question).catch(console.error);

  readline.close();
});
