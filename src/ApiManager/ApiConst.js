export const BASE_URL = 'https://time-table12.herokuapp.com/';

export const GetFetch = async (fetchURL) => {

    let headers = null;
    headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };

    const fetchCall = await fetch(fetchURL, {
        method: "GET",
        headers: headers,
    })

    const response = await fetchCall.json();
    console.log("response---------->", response);
    return response;
}


export const PostFetch = async (fetchURL, fetchBodyData) => {
    let headers = null;
    let fetchData = null;

    headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    fetchData = JSON.stringify(fetchBodyData)

    const fetchCall = await fetch(fetchURL, {
        method: "POST",
        headers: headers,
        body: fetchData
    })

    const response = await fetchCall.json();
    console.log("response---------->", response);
    return response;
}

export const PutFetch = async (fetchURL, fetchBodyData) => {
    let headers = null;
    let fetchData = null;

    headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    fetchData = JSON.stringify(fetchBodyData)

    const fetchCall = await fetch(fetchURL, {
        method: "PUT",
        headers: headers,
        body: fetchData
    })

    const response = await fetchCall.json();
    console.log("response---------->", response);
    return response;
}