import React from 'react';
import defaultDataMainApi from '../../const/const-api'


class Api {


    getItem = (params) => {
        const apiUrl = this.generateQueryString(params);

        return fetch(`${defaultDataMainApi.url}?${apiUrl}`, {
            method: "GET",
            credentials: 'include',
        })
            .then((res) => this._returnJson(res))
    };

    generateQueryString = (params) => {

        let searchParams = new URLSearchParams();

        for (let keyParam in params) {
            if (keyParam === "params") {
                for (let key in params[keyParam]) {
                    searchParams.set("params."+key, params[keyParam][key])
                }
            } else{
                searchParams.set(keyParam, params[keyParam])
            }

        }
        return searchParams.toString();
    };

    createItem = (saveData) => {
        return fetch(defaultDataMainApi.url, {
            method: "POST",
            credentials: "include",
            headers: defaultDataMainApi.headers,
            body: JSON.stringify({
                name: saveData.name,
                description: saveData.description,
                params: saveData.params,

            }),
        })
            .then((res) => this._returnJson(res));
    };


    // removeItem = (id) => {
    //     return fetch(`${defaultDataMainApi.url}/${id}`, {
    //         method: 'DELETE',
    //         headers: defaultDataMainApi.headers,
    //
    //     })
    //         .then((res) => this._returnJson(res))
    //
    // };


    _returnJson = (res) => {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

export default Api;
