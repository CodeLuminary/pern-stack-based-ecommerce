export default class restApi{
    //Set domain name here
    static domain = "";
    static fetchApi(url, methodType, requestObject, isDomainUsed=true,authorizationString=null){   
        if(!isDomainUsed){
            url = this.domain + url;
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
            body: JSON.stringify(requestObject)
        });
    }
}