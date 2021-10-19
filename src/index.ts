import { Command } from 'commander'

import { Joke } from './classes/joke'

const program = new Command()

program.version('1.0.0').description('Console application for jokes.')
program.option('-r, --random', 'output random joke')
program.option('-c, --category <category>')

program.parse(process.argv)

const options = program.opts()

if (options.random) {
    Joke.getRandomJoke().then((joke) => {
        console.log(joke)
    })
}

if (options.category) {
    Joke.getJokeByCategory(options.category).then((joke) => {
        console.log(joke)
    })
}
