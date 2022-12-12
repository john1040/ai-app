

export default function handler(req, res) {
    const method = req.method;
    if (method === 'POST') {
        console.log('qwe')
        res.status(200)
    }
}



// const request = require('request');

// // Set the API endpoint and model name
// const endpoint = 'https://api.runpod.ai/v1/stable-diffusion-v1/run';

// // Set the API key and input data
// const apiKey = 'TZGE6NATUCJTCKKVTYG77S2LSN57LE52DVEDQDQL';
// const inputData = {
//     input: {
//         prompt: 'My creative vision.',
//     },
// };

// // Set the headers for the request
// const headers = {
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${apiKey}`,
// };

// // Make the request
// request.post(
//     {
//         url: endpoint,
//         json: inputData,
//         headers,
//     },
//     (err, response) => {
//         if (err) {
//             console.error(err);
//             return;
//         }

//         // Print the response
//         console.log(response.body);
//     },
// );