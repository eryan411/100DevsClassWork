const getFruit = async(name) => {
    const fruits = {
        pineapple: '🍍',
        peach: '🍑',
        strawberry: '🍓'
    }

    return fruits[name];
}

//async equivalent to return Promise.resolve(fruits[name])

getFruit('peach').then(console.log)

const makeSmoothie = async() => {
    const a = getFruit('peach');
    const b = getFruit('strawberry');
    const smoothie = await Promise.all([a, b]);

    return smoothie
}

const badSmoothie = async() => {
    try{
        const a = getFruit('pineapple');
        const b = getFruit('strawberry');
        const smoothie = await Promise.all([a, b]);
        
        throw 'broken!'

        return smoothie
    } catch(err) {
        console.log(err)
    }
}


const fruits = ['peach', 'pineapple', 'strawberry'];

const smoothie = fruits.map(async v => {
    for await (const emoji of smoothie) {
        log(emoji);
    }
})

fruitLoop();