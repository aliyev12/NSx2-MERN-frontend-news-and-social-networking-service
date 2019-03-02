// This file will be used to build a generic way to an ajax request
import axios from 'axios';

export function setTokenHeader(token) {
    if (token) {
        // If token has been passed to this function, then attach that token to all future requests
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        // If this function received false instead of a token, go ahead and delete the token and don't include it with any future requests
        delete axios.defaults.headers.common["Authorization"];
    }
}

export function apiCall(method, path, data) {
    // This promise will be resolved when actions are resolved
    // For that, I'm using promise constructor that take a function as parameter
    return new Promise((resolve, reject) => {
        return axios[method.toLowerCase()](path, data)
        .then(res => {
            return resolve(res.data);
        })
        .catch(err => {
            return reject(err.response.data.error);
        });
    });
}



