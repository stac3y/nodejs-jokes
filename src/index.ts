import { Command } from 'commander'

import { Joke } from './classes/joke'
import { asyncTest, syncTest } from '../test/test'

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
                    console.log('\x1b[32m%s\x1b[0m', joke)
                })
                .catch((err) => {
                    console.log(err)
                })
        } else if (mode === 'promise') {
            Joke.getJokeWithPromise(category)
                .then((joke) => {
                    console.log('\x1b[32m%s\x1b[0m', joke)
                })
                .catch((err) => {
                    console.log(err)
                })
        } else console.log('There are only 2 modes: async and promise.')
    })

program
    .command('test')
    .option(
        '-m, --mode <mode>',
        '2 modes: async and sync, async is default',
        'async',
    )
    .option('-n, --number <number>', 'number of iterations')
    .description('A command for getting jokes')
    .action((options) => {
        const mode = options.mode
        const n: number = options.number

        if (!n || n < 1) {
            console.log('Number of iterations must not be null or string!')
            return
        }
        if (mode === 'async') {
            asyncTest(n)
        } else if (mode === 'sync') {
            syncTest(n)
        } else console.log('There are only 2 modes: async and sync.')
    })

program.parse(process.argv)
