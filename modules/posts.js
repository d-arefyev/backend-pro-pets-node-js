import fs from 'fs';
import axios from 'axios';

const data = axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        // console.log(response.data)
        //             .json
        fs.writeFile('../database/posts.txt', JSON.stringify(response.data), (error) => {
            console.log(error);
        })
    })
    .catch()
// console.log()
