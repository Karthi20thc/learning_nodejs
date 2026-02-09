// async_await_multiple_promises.js

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("First task completed");
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Second task completed");
    }, 1500);
});

// const promise1 = new Promise((resolve) => {
//   setTimeout(() => resolve("First task completed"), 1000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("Second task failed"), 1500);
// });


async function performTasks() {
    try {

        const result1 = await promise1;
        console.log("sync operation")
        console.log(result1); // First task completed

        const result2 = await promise2;
        console.log(result2); // Second task completed
    } catch (error) {
        console.error(error); // Catches any rejection or error
    }
}

performTasks();

