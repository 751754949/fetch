/**
 * 封装fetch
 * 更快,更简单地请求数据
 *
 * @version 1.0.0
 * @author  Sadhu
 * @license MIT
 *
 **/

//https://jsonplaceholder.typicode.com/users 以这个url为API

class easyHttp {
    //get
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(date => resolve(date))
                .catch(err => reject('the error is:' + err))
        })
    }

    //post
    post(url, datas) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(datas)
                })
                .then(res => res.json())
                .then(date => resolve(date))
                .catch(err => reject('the error is:' + err))
        })
    }

    //put
    put(url, datas) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: "PUT",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(datas)
                })
                .then(res => res.json())
                .then(date => resolve(date))
                .catch(err => reject('the error is:' + err))
        })
    }

    //delete
    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "DELETE",
                headers: {
                    'Content-type': 'application/json'
                },
            })
                .then(res => res.json())
                .then(data => resolve('数据删除成功'))
                .catch(err => reject(err))
        })
    }
}