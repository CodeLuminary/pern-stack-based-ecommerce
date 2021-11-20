 class restApi{
    //Set domain name here
    static domain = "";
    static PostApi(url, requestObject, isDomainUsed=true,authorizationString=null){   
        if(!isDomainUsed){
            url = restApi.domain + url;
        }
        console.log("gogle")
        return fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: authorizationString !== null ? {
                'Authorization': authorizationString,
                'Content-Type': 'application/json'
            } : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestObject)
        });
    }
    static getApi(url,isDomainUsed = true,authorizationString=null){
        if(!isDomainUsed){
            url = restApi.domain + url;
        }

        return fetch(url,{
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            headers: authorizationString !== null ? {
                'Authorization': authorizationString,
            } : {
                'Content-Type': 'application/json'
            }
        })
    }
}
export default restApi;