/*

CodeDojo
    https://www.youtube.com/watch?v=5kAPExqSZ1I&list=PLqHlAwsJRxAOQHISGoznJbhmv2sL7KXc7
    JavaScript - Асинхронные функции (async/await)

    - асинхронные ф-ции созданы на основе Обещаний и Генераторав
    - await ставится перед ф-цие, котороая возвращает Promise
        это НЕ обязательно должна быть асинхронная ф-ция (08:15)

*/

let sampleNr = 0;
let user;

// // --------------- #001 ---------------
//
// sampleNr = 1;
// function getUser1(id){
//     return {id: 123}    // {id: 123} <- Object
// }
//
// user = getUser1(1);
//
// console.log(`<<< sample # ${sampleNr} >>> result is ${user}`);
// console.log(user);
//
//
//  result is [object Object][object Object]
// { id: 123 }
//
// // // --------------- #002 ---------------
// sampleNr = 2;
// async function getUser2(id){
//     return {id: 123}    // {id: 123} <- Promise
// }
//
// user2 = getUser2(1);
//
// console.log(`<<< sample # ${sampleNr} >>> result is ${user2}`);
// console.log(user2);
//
//  <<< sample # 2 >>> result is [object Promise]
//  Promise { { id: 123 } }
//
// // --------------- #003 ---------------
// sampleNr = 3;
// async function getUser3(id){
//     return {id: 123}    // {id: 123} <- Object
// }
//
// getUser3(1).then(user3 => {
//     console.log(`<<< sample # ${sampleNr} >>> result is ${user3}`);
//     console.log(user3);
// });
//
//  <<< sample # 3 >>> result is [object Object]
// { id: 123 }
//
// // --------------- #004 ---------------
// sampleNr = 4;
// async function getUser4(id){
//     return Promise.resolve({id: 123});   // {id: 123} <- Object
// }
//
// getUser4(1).then(user => {
//     console.log(`<<< sample # ${sampleNr} >>> result is ${user}`);
//     console.log(user);
// });

// <<< sample # 4 >>> result is [object Object]
// { id: 123 }

// --------------- #005 ---------------
// sampleNr = 5;
// async function getUser5(id){
//     throw new Error('error into Promise')
// }

// getUser5(1).then(user => {
//     console.log(`<<< sample # ${sampleNr} >>> result is ${user}`);
//     console.log(user);
// });

// (node:15016) UnhandledPromiseRejectionWarning: Error: error into Promise
// .....
// (node:15016) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 2)
// (node:15016) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.

// --------------- #006 ---------------
// sampleNr = 6;
// async function getUser6(id){
//     throw new Error('error into Promise')
// }
//
// getUser6(1).catch(error => {
//     console.log(`<<< sample # ${sampleNr} >>> result is '${error}'`);
//     console.log(error);
// });
// <<< sample # 6 >>> result is 'Error: error into Promise'
// Error: error into Promise
// at getUser6 (D:\workspaces\node\amfg_js_core\amfg_jscore\async_await.js:101:11)

// --------------- #007 ---------------
// sampleNr = 7;
// async function getUser7(id){
//     return {id: 127};    // <-
// }
//
// let user7 = await getUser7(1); // <-  ERROR
//
// console.log(`<<< sample # ${sampleNr} >>> result is ${user7}`);
// console.log(user7);

// let user7 = await getUser7(1); // <-  ERROR
//             ^^^^^
//
// SyntaxError: await is only valid in async function


// --------------- #008 time 08:00---------------
sampleNr = 8;
async function getUser8(id){  // <- async
    return {id: 127};
}
function getUser9(id){
    return Promise.resolve({id: 127});    // <- Promise
}
async function main() {
     let user8 = await getUser8(1); // <- await
        console.log(`<<< sample # ${sampleNr}/1 >>> result is ${user8}`);
        console.log(user8);
    let user9 = await getUser9(1); // <- await
    console.log(`<<< sample # ${sampleNr}/2 >>> result is ${user9}`);
    console.log(user9);
}

main();

        // <<< sample # 8 >>> result is [object Object]
        // { id: 127 }











