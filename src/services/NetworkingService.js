/**
 * Copyright (c) 2017 Yuhogyun - portfolio
 * All rights reserved
 *
 * @flow
 * @author Yuhogyun
 */

export default class NetworkingService {
    constructor() {

    }
    static async get(url) {
        try {
            const headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');

            const Options = {
                method: 'GET',
                headers: headers,
            };

            const response = await fetch(url, Options);
            const responseJson = await response.json();
            return responseJson;
        } catch(error) {
            console.log('GET Method Error ', url, error);
            return Promise.reject(error);
        }
    }

    static async post(url, body) {
        try {
            const headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');

            const Options = {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(body)
            };

            // console.log(url);
            // console.log('post Data body is: ',body)

            const response = await fetch(url, Options);
            const responseJson = await response.json();
            return responseJson;
        } catch(error) {
            console.log('Post Method Error ', url, body, error);
            return Promise.reject(error);
        }
    }

}
