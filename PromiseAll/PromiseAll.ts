const promiseAll = <T>(arrayOfPromise: Promise<T>[]) => {
  return new Promise(async (resolve, reject) => {
    const results: T[] = [];

    arrayOfPromise.forEach(async (promise) => {
      try {
        const result = await promise;
        results.push(result);
      } catch (err) {
        reject(err);
      }

      if (results.length === arrayOfPromise.length) {
        resolve(results);
      }
    });
  });
};

promiseAll([Promise.reject(3), Promise.resolve(1), Promise.resolve(2)])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error("promiseAll - ", err);
  });

Promise.all([Promise.reject(3), Promise.resolve(1), Promise.resolve(2)])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error("Promise.all -", err);
  });
