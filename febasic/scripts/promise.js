// Promise API

// Promise
// - pending
// - fullfilled
// - rejected

const promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject('rejected');
    resolve('resolved');
  }, 1000)
});

promise
  .then((res) => { console.log(res) })
  .catch((err) => { console.log(err) });

async function fun() {
  const res = await promise;
  console.log(res);
  return true;
}

fun();
