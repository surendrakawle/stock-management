import axios from 'axios';

export default {
    get(url, data, instance) {
        try {
            return axios.get(url)
                .then(function(res) {
                    return res.data;
                })
                .catch(function(e) {
                    console.error(e);
                })
        } catch (e) {
            console.error(e)
        }
    },
    post(url, data, instance) {
        try {

            return axios.post(url, data)
                .then(function(res) {
                    if (!res.data.error) {
                        return res.data;
                    }
                    throw res.data.message;
                })
                .catch(function(e) {
                    console.error(e);
                })
        } catch (e) {
            console.error(e)
        }
    }
}