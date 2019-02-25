// This file will be used to build a generic way to an ajax request
import axios from 'axios';

export function apiCall(method, path, data) {
    // This promise will be resolved when actions are resolved
    // For that, I'm using promise constructor that take a function as parameter
    return new Promise((resolve, reject) => {
        return axios[method](path, data)
        .then(res => {
            return resolve(res.data);
        })
        .catch(err => reject(err.response.data.error));
    });
    
}