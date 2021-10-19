import axios from 'axios'

export class Joke {
    static async getRandomJoke() {
        const res = await axios.get(
            `https://v2.jokeapi.dev/joke/Any?type=single`,
        )
        return res.data['joke']
    }

    static async getJokeByCategory(category: string) {
        const res = await axios.get(
            `https://v2.jokeapi.dev/joke/${category}?type=single`,
        )
        return res.data['joke']
    }
}
