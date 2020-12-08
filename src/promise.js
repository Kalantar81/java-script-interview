console.log('Request data...');

// calback() way
// setTimeout(() => {
//     console.log('preparing data...');
//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }

//     setTimeout(() => {
//         backendData.modified = true;
//         console.log('data reseved ', backendData);
//     }, 2000);
// }, 2000);

// resolve() called, when async operation finished sucsessful
// const p = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('preparing data...');
//         const backendData = {
//                     server: 'aws',
//                     port: 2000,
//                     status: 'working'
//                 }
//     resolve(backendData);
//     }, 2000)
// });

// p.then((data) => {
//     // console.log('promise resolved', data);
//     const p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true;
//             resolve(data);
//         }, 2000)
//     })

//     p2.then(clientData => {
//         console.log('Data received', clientData);
//     })
// })

//==================================================================================================

// const p = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('preparing data...');
//         const backendData = {
//                     server: 'aws',
//                     port: 2000,
//                     status: 'working'
//                 }
//     resolve(backendData);
//     // reject(backendData);
//     }, 2000)
// });

// p.then((data) => {
//     // console.log('promise resolved', data);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true;
//             resolve(data);
//         }, 2000)
//     })
// }).then(clientData => {
//     console.log('Data resived', clientData);
//     clientData.fromPromise = true;
//     return clientData;
// }).then(data => {
//     console.log('Modified', data);
// })
// .catch(err => console.log('Error', err))
// .finally(() => {console.log('Finally')});
//==================================================================================================

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}

// sleep(2000).then(() => {console.log('After two seconds')});

// .then will be called only after all promises will returned
Promise.all([sleep(2000), sleep(3000)])
  .then(() => {
      console.log('All promises');
  });

  // In this example race() will work after 2000
  Promise.race([sleep(2000), sleep(3000)])
  .then(() => {
      console.log('Race promises');
  });