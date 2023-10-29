console.log("1");

setTimeout(() => {
    console.log("2");
},3000);

setTimeout(() => {
    console.log("3");
},0);


const isServerReady = true;

const promise = new Promise((resolve, reject) => {
    console.log("4");

    if (isServerReady) {
        resolve("success");
    } else {
        reject();
    }
});

promise
  .then((message) => {
    console.log(message);
  })
  .catch(() => {
    console.log("7");

  });

// результаты
//     1 
//     4
//     success
//     3
//     2
