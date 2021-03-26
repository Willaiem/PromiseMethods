const promiseLast = <T>(arrayOfPromise: Promise<T>[]) => {
  return new Promise(async (resolve, reject) => {
    let lastResolved!: T;

    const promises = [...arrayOfPromise];

    while (promises.length !== 0) {
      const singlePromise = promises.shift() as Promise<T>;

      try {
        const value = await singlePromise;
        lastResolved = value;
      } catch (error) {
        reject(error);
      }
    }
    resolve(lastResolved);
  });
};

const timeout = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("timeout 100ms");
  }, 100);
});

promiseLast([Promise.reject(1), Promise.resolve(2), timeout])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err); /* output: 1 */
  });

promiseLast([Promise.resolve(1), Promise.resolve(2), timeout])
  .then((result) => {
    console.log(result); /* output: "timeout 100ms" */
  })
  .catch((err) => {
    console.log(err);
  });
