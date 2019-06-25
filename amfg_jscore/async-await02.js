/*

CodeDojo
    https://www.youtube.com/watch?v=5kAPExqSZ1I&list=PLqHlAwsJRxAOQHISGoznJbhmv2sL7KXc7
    JavaScript - Асинхронные функции (async/await)

    - асинхронные ф-ции созданы на основе Обещаний и Генераторав
    - await ставится перед ф-цие, котороая возвращает Promise
        это НЕ обязательно должна быть асинхронная ф-ция (08:15)

*/

//import {fetch} from 'node-fetch';
const fetch = require ('node-fetch');

// --------------- #010 09:30 ---------------

sampleNr = 10;
function getUser10(id){
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
}

async function main10() {
    let user = await getUser10(10);

    console.log(`<<< sample # ${sampleNr} >>> result is ${user}`);
    console.log(user);
}

//main10();

        // <<< sample # 1 >>> result is [object Response]
        // Response {
        //     .....)

// --------------- #011 10:40 ---------------

sampleNr = 11;
function getUser11(id){
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json());
}

async function main11() {
    let user = await getUser11(1);

    console.log(`<<< sample # ${sampleNr} >>> result is ${user}`);
    console.log(user);
}

//main11();
        // <<< sample # 11 >>> result is [object Object]
        // { id: 10,
        //     name: 'Clementina DuBuque',
        //     username: 'Moriah.Stanton',


// --------------- #012 10:40 ---------------

sampleNr = 12;
async function getUser12(id){
    let response =  await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return await response.json();

}

async function main12() {
    let user = await getUser12(10);

    console.log(`<<< sample # ${sampleNr} >>> result is ${user}`);
    console.log(user);
}

//main12();

        // <<< sample # 12 >>> result is [object Object]
        // { id: 10,
        //     name: 'Clementina DuBuque',


// --------------- #013 13:00 ---------------

sampleNr = 13;
async function getUser13(id){
    let response =  await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return await response.json();

}

async function main13() {
    try{
        let user = await getUser13(10);

        console.log(`<<< sample # ${sampleNr} >>> result is ${user}`);
        console.log(user);
    }catch(e){
        console.error(user);
    }


}

main13();