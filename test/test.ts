import { Command } from 'commander'

import { Joke } from '../src/classes/joke'

const program = new Command()

program.version('1.0.0').description('Console application for test.')
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
            Joke.asyncTest(n)
        } else if (mode === 'sync') {
            Joke.syncTest(n)
        } else console.log('There are only 2 modes: async and sync.')
    })

program.parse(process.argv)
