const promise = new Promise((resolve, reject) => {
    const x = 4;
    if (x === 3)
        resolve('resolved');
    else
        reject('rejected');
});

promise
.then((response) => console.log(response))
.catch((err) => console.log(err));
