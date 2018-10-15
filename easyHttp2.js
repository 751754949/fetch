/**
 * 使用async await封装fetch
 * 这种请求数据的方式才是最优的
 *
 * @version 2.0.0
 * @author  Sadhu
 * @license MIT
 *
 **/

class EasyHttp{
    //get 
    async get(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    //POST
    async post(url,datas){
        const response = await fetch(url,{
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(datas)            
        })
        const data = await response.json();
        return data;
    }

    //PUT
    async put(url,datas){
        const response = await fetch(url,{
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(datas)            
        })
        const data = await response.json();
        return data;
    }

    //delete
    async delete(url){
        const response = await fetch(url,{
            method: "DELETE",
            headers: {
                'Content-type': 'application/json'
            }
        })
        const data = await "数据删除成功";   //await后面还可以直接跟字符串额 这操作666...
        return data;
    }
}