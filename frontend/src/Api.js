 class restApi{
    //Set domain name here
    static domain = "";
    static PostApi(url, requestObject, isDomainUsed=true,authorizationString=null){   
        if(!isDomainUsed){
            url = restApi.domain + url;
        }
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

    static PostFormData(url, requestObject, isDomainUsed=true,authorizationString=null){
        if(!isDomainUsed){
            url = restApi.domain + url;
        }

        return new Promise((resolve,reject)=>{
            let xhhtp = new XMLHttpRequest();
            xhhtp.onreadystatechange = function(){                  
                if (this.readyState == 4 && this.status == 200){
                    let res = JSON.parse(xhhtp.responseText)
                    if(res.isSuccessful){
                        resolve(res)                        
                    }
                    //can()
                    //alert(res.message);
                    console.log(res)  
                }
            }
            xhhtp.open("POST", url, true); 
            xhhtp.send(requestObject);
        })

    }
}
export default restApi;