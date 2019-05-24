const express = require('express');
const Parser = require('rss-parser');
const PORT = process.env.PORT || 4422;

// feeds list
const feeds = [
    'https://sys-adm.in/?format=feed&type=rss',
    'https://forum.sys-adm.in/index.php?action=.xml;type=rss'
]

let app = express();

app.get('/', (req, res)=>{

    let parser = new Parser();

    const feedRequest = feeds.map(feed => {
        return parser.parseURL(feed);
    });

    Promise.all(feedRequest).then(response => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET');
        res.json(response);
        console.log(response);
    })

}).listen(PORT, () => console.log(`Listening on ${PORT}`));