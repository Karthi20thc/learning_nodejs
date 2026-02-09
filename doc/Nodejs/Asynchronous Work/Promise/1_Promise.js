// https://nodejs.org/en/learn/asynchronous-work/discover-promises-in-nodejs

const myPromise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve('Operation was successful!');
    } else {
        reject('Something went wrong.');
    }
});

console.log(myPromise);
