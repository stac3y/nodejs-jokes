import axios from 'axios'

export class Joke {
    /**
     * Function for geting a joke by category with async/await
     *
     * @param category - category of a joke
     * @returns promise with a joke
     */
    static async getJokeWithAsync(category: string = 'Any'): Promise<string> {
        const res = await axios.get(
            `https://v2.jokeapi.dev/joke/${category}?type=single`,
        )
        return res.data['joke']
    }

    /**
     *   Function for geting a joke by category with promise.then().catch()
     *
     * @param category - category of a joke
     * @returns promise with a joke
     */
    static getJokeWithPromise(category: string = 'Any'): Promise<string> {
        return axios
            .get(`https://v2.jokeapi.dev/joke/${category}?type=single`)
            .then((res) => {
                return res.data['joke']
            })
            .catch((err) => {
                console.log(err)
            })
    }

    /**
     * Function to check if a category matches the possible categories
     *
     * @param category - category of a joke
     * @returns true if category exists or false if don't
     */
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
