import express from 'express';
import chalk from 'chalk';
import cors from 'cors';

const servidor = express();

servidor.use(cors());
servidor.use(express.json())

const usuarios = [];
const tweets = [];

servidor.post('/sign-up' , (req, res) => {
    const inf = req.body    

    usuarios.push(inf);

    res.send('OK!');
});

servidor.post('/tweets' , (req,res) =>{
    const infTweet = {
        username: req.body.username,
        tweet: req.body.tweet,
        avatar: usuarios.find((user) => user.username === req.body.username).avatar,
    };

    tweets.push(infTweet);
    res.send("OK!");
})

servidor.get('sign-up', (req, res) => {
    res.send(usuarios);
});

servidor.get('/tweets', (req,res) => {
    res.send(tweets.slice(tweets.length -10, tweets.length));
})

servidor.listen(5000, () => {
    console.log(chalk.red('Entrou no servidor'))
});