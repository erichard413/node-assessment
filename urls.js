const fs = require('fs');
//fs is filesystem - we use this to read/write files
const axios = require('axios');
const psl = require('psl');

const args = process.argv.slice(2)

let urls = fs.readFileSync(args[0]).toString().split("\n")

urls = (urls.filter(s => s.length > 0))

//Accept-Encoding header is required to convert data to HTML content -> https://stackoverflow.com/questions/74548514/axios-request-to-google-api-v3-returns-encrypted-data

async function getUrlData(url){
    try {
        const res = await axios.get(url, {headers: {'Accept-Encoding': 'application/json'}});
        fs.writeFile(`./${extractHostName(url)}`, `${res.data}`, "utf8", function(err) {
            if (err) {
                console.log(`ERROR! COULD NOT WRITE FILE`)
            }
                console.log("Successfully wrote to file!")
        })
    } catch(e) {
        console.log(`ERROR - could not connect to ${url}`)
    }
    
}

function extractHostName(url) {
    let hostname;

    if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2];
    } else {
        hostname = url.split('/')[0];
    }
    return psl.get(hostname)
}

for (let url of urls){
        getUrlData(url)
}

