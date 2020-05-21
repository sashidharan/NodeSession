try {
    throw new Error('Throw Error object');
} catch(err) {
    console.log('err------>', err);
}

let err = new Error('error message');
console.error(err);


try {
    setTimeout(() => {
        throw new Error('Time out Error');
    }, 2000);
} catch(e) {
    console.log(e); // Nothing, nada, zero, zilch, not even a sound
}   