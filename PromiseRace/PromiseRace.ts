const promiseRace = <T>(arrayOfPromise: Promise<T>[]) => {
  return new Promise((resolve, reject) => {
    arrayOfPromise.forEach((promise) => {
      promise.then((res) => resolve(res)).catch((err) => reject(err));
    });
  });
};

const to1 = new Promise((resolve) => {
  setTimeout(() => resolve("first"), 1);
});

const to2 = new Promise((resolve) => {
  setTimeout(() => resolve("second"), 2);
});

promiseRace([to1, to2])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.race([to1, to2])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
