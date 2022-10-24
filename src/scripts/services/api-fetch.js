import  BASE_URI  from "../core/config.js";

async function ApiFetch(endpoint, {method, headers, body} = {}){
    if(body){
        headers = {
            "Content-Type": "application/json",
            ...headers,
        }
    }

    const requestConfig = {
        method: method || (body ? "POST" : "GET"),  // Without definition, method will be inferred based on body data
        headers: headers,
        body: body ? JSON.stringify(body) : null, // Note: Future fork
    }

    const response = await fetch(BASE_URI + endpoint, requestConfig);
    let data;

    if(!response.ok){
        try {
            data = await response.json();
        } catch (error) {
            throw new Error(response.statusText)
        }
        throw new Error(data.messages);
    }

    try {
        data = await response.json();
    }catch(e){
        data = response.statusText;
    }
    return data;
}

export default ApiFetch;