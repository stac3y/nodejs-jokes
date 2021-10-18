import axios from 'axios'

export class Joke {
    static getRandomJoke() {
        axios.get('https://v2.jokeapi.dev/joke/Any?type=single').then((res) => {
            return res.data
        })
        
    }
}
