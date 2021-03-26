const promiseIgnoreErrors = <T>(arrayOfPromise: Promise<T>[]) => {
  return new Promise((resolve, reject) => {
    const results: T[] = [];

    arrayOfPromise.forEach((promise) => {
      promise.then((result) => {
        results.push(result);
      });
    });
    resolve(results);
  });
};

promiseIgnoreErrors([Promise.reject(1), Promise.resolve(2)]).then((result) => {
  console.log(result); /* output: 2 */
});
