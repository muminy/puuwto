import React from 'react';
import { TaboWord } from "../constant/TaboWords"

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

export default (request, response) => {
    // request status code 
    // all request method allowed
    
    const { API_KEY } = request.body;
    if ( request.method === 'POST' && API_KEY === process.env.API_KEY ) {
        response.status(200).json(shuffle(TaboWord));
    } else {
        response.status(200).json({
            code: 10010, 
            message: 'Bad Request'
        });
    }
    
}