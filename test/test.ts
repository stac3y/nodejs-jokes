import { performance } from 'perf_hooks'

import { Joke } from '../src/classes/joke'

/**
 * Function for running async test with promises
 *
 * @param n - number of iterations
 */
export async function asyncTest(n: number) {
    let i: number = 0
    let promises: Array<Promise<string>> = []
    const beginTime = performance.now()
    for (i = 0; i < n; i++) {
        const promise = Joke.getJokeWithAsync()
        promises.push(promise)
    }
    Promise.all(promises).then((jokes) => {
        jokes.forEach((joke) => {
            console.log(`${joke}\n`)
        })
        const endTime = performance.now()
        const time = endTime - beginTime
        console.log(`${time}\n`)
    })
}

/**
 * Function for running sync test
 *
 * @param n - number of iterations
 */
export async function syncTest(n: number) {
    let i: number = 0
    const beginTime = performance.now()
    for (i = 0; i < n; i++) {
        const joke = await Joke.getJokeWithAsync()
        console.log(`${joke}\n`)
    }
    const endTime = performance.now()
    const time = endTime - beginTime
    console.log(`${time}\n`)
}
