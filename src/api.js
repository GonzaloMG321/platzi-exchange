const url = 'https://api.coincap.io/v2'

function getAssets(){
    return fetch(`${url}/assets?limit=20`)
    .then(data => data.json())
    .then(json => json.data)
}

export default { 
    getAssets
}