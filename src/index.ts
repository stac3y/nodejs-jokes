import { Command } from 'commander'

import { Joke } from './classes/joke'

const program = new Command()

program.version('1.0.0').description('Configuration files creator.')
program.option('-r, --random', 'output random joke')

program.parse(process.argv)

const options = program.opts()
if (options.random) {
    Joke.getRandomJoke().then((joke) => {
        console.log(joke)
    })
}
