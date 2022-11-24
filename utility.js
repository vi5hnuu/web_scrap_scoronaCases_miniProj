const https = require('https')

const getDataAsync = (URL) => {
    return new Promise((res, rej) => {
        let content = ''
        const req = https.get(URL,
            (res) => {
                if (res.statusCode == 200) {
                    res.on('data', (chunk) => {
                        content += chunk
                    })
                }
            })
        req.on('error', (err) => {
            rej(err)
        }).on('close', () => {
            res(content)
        })
    })
}

module.exports = getDataAsync