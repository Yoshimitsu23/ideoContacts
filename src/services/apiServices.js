export const doGetApi = async (_url) => {
    let res = await fetch(_url);
    let data = await res.json();
    return data;
}

export const doApiPost = async (_url, _body) => {
    let resp = await fetch(_url, {
        method: "POST",
        body: JSON.stringify(_body),
        headers: {
            'content-type': "application/json"
        }
    })
    let data = await resp.json()
    console.log("service say:", data)
    return data;
}