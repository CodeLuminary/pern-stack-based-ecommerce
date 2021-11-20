 class restApi{
    //Set domain name here
    static domain = "";
    static fetchApi(url, methodType, requestObject=null, isDomainUsed=true,authorizationString=null){   
        if(!isDomainUsed){
            url = restApi.domain + url;
        }

        return fetch(url, {
            method: methodType,
            mode: 'cors',
            cache: 'no-cache',
            headers: authorizationString !== null ? {
                'Authorization': authorizationString,
                'Content-Type': 'application/json'
            } : {
                'Content-Type': 'application/json'
            },
            body: requestObject===null ? "" : JSON.stringify(requestObject)
        });
    }
}
export default restApi;