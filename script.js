// const posts = [
//     {title: 'Post One', body: 'This is Post One'},
//     {title: 'Post Two', body: 'This is Post Two'}
// ];

// function getPosts()
// {
//     setTimeout(() => { // ES 6 style
//         let output = '';
//         posts.forEach((post, index) => {
//             output += `<li>${post.title} - ${post.body}</li>`;
//         });
//         document.body.innerHTML = output;
//     },1000);
// }

// // function createPosts(post, callback){
// //     setTimeout(() => {
// //         posts.push(post);
// //         callback();
// //     },2000);
// // }

// function createPosts(post){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push(post);
//             const error = true;
//             if(!error)
//             {
//                 resolve();
//             }
//             else{
//                 reject();
//             }
//         },2000);
//     });
// }

// createPosts({title: 'Post Three', body: 'This is Post Three'})
// .then(getPosts)
// .catch(err => console.log(err));


// const promise1 = Promise.resolve("I LOVE MY COUNTRY");
// const promise2 = 2;
// const promise3 = new Promise((resolve, reject) =>
// setTimeout(resolve, 2000, 'INDIA'));
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
// .then(data => data.json());

// Promise.all([promise1, promise2, promise3, promise4])
// .then(values => console.log(values));

function makeRequest(location){
    return new Promise((resolve, reject) => {
        console.log(`Making Request to ${location}`)
        if(location === 'INDIA')
        {
            resolve('Hello INDIA');
        }
        else{
            reject('We need a request from INDIA only');
        }
    })
}

function processRequest(response){
    return new Promise((resolve, reject) => {
        console.log('Response is processing')
        resolve(`Information + ${response}`)
    })
}

// makeRequest('INDIA').then(response => 
//     {
//     console.log('Received the Response')
//     return processRequest(response)
// })
// .then(processedResponse => 
//     {
//     console.log(processedResponse)
// })
// .catch(err => console.log(err))


async function completeWork(){
    try
    {
        const response = await makeRequest('INDIA')
        console.log('Response Received')
        const processedResponse = await processRequest(response)
        console.log(processedResponse)
    }
    catch(err)
    {
        console.log(err)
    }
}
completeWork()