import express from 'express'
import axios from 'axios'

const app = express();
const port = 3000;

app.get('/', ((req, res) => {
    let data : object;
    axios.get('https://v2.jokeapi.dev/joke/Any')
        .then(res => {
           data = <object>res.data;
            console.log(data)
        });
    res.send(data)
}))

app.listen(port, () => console.log(`Running on port ${port}`));