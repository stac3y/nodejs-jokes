import axios from 'axios'

export class Joke {
    static async getJokeWithAsync(category: string): Promise<string> {
        const res = await axios.get(
            `https://v2.jokeapi.dev/joke/${category}?type=single`,
        )
        return res.data['joke']
    }

    static getJokeWithPromise(category: string): Promise<string> {
        return axios
            .get(`https://v2.jokeapi.dev/joke/${category}?type=single`)
            .then((res) => {
                return res.data['joke']
            })
            .catch((err) => {
                console.log(err)
            })
    }

    static checkCategory(category: string): boolean {
        const categories = [
            'Any',
            'Programming',
            'Misc',
            'Dark',
            'Pun',
            'Spooky',
            'Christmas',
        ]
        const index = categories.indexOf(category)
        if (index === -1) {
            console.log(
                `There is no such category. Possible categories: ${categories}`,
            )
            return false
        } else return true
    }
}
