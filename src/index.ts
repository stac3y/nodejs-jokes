import { Command } from 'commander'

import { Joke } from './classes/joke'

const program = new Command()

program.version('1.0.0').description('Console application for getting jokes.')
program
    .command('get-joke')
    .option('-c, --category <category>', 'category selection', 'Any')
    .option(
        '-m, --mode <mode>',
        '2 modes: async and promise, async is default',
        'async',
    )
    .description('A command for getting jokes')
    .action((options) => {
        const category = options.category
        const mode = options.mode

        if (!Joke.checkCategory(category)) return

        if (mode === 'async') {
            Joke.getJokeWithAsync(category)
                .then((joke) => {
                    console.log(joke)
                })
                .catch((err) => {
                    console.log(err)
                })
        } else if (mode === 'promise') {
            Joke.getJokeWithPromise(category)
                .then((joke) => {
                    console.log(joke)
                })
                .catch((err) => {
                    console.log(err)
                })
        } else console.log('There are only 2 modes: async and promise.')
    })

program.parse(process.argv)
