const tick = Date.now()
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}`)

const codeBlocker = () => {

    // let i = 0;
    // while(i < 1000000) {i++;}


    // return 'million loop done'

    // return new Promise((resolve, reject) => {
        // let i = 0;
        // while(i < 1000000) {i++;}


        // return 'million loop done'
    // })

    return Promise.resolve().then(v => {
        let i = 0;
        while(i < 1000000) {i++;}


        return 'million loop done'
    })
}

log('Synch 1')

log(codeBlocker())

log('Synch 2')