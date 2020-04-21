const express = require('express');
const app = express();
const port = 3000;

app.get('/greeting', (req, res) => {
    res.send("Hello, stranger");
});

app.get('/greeting/:name', (req, res) => {
    res.send(`Hello ${req.params.name}. It's great to see you!`)
})

app.listen(port, () => {
    console.log('listening');
});

///////////////////////
// Tip Calculator
///////////////////////

app.get('/tipcalculator/:totalbill', (req, res) => {
    res.send(`A 20% tip is ${(req.params.totalbill) / 10 * 2}`)
});

///////////////////////
// Magic 8 Ball
//////////////////////

const answersArray = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

const answer = (answerArray) => {
    for (let i = 0; i <= answersArray.length; i++);
};

app.get('/magic', (req, res) => {
    res.send('What is your question?')
});

app.get('/magic/:question', (req, res) => {
    res.send(`${req.answersArray[i]}`)
});



