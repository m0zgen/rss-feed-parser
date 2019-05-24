const express = require('express');
const app = express();

let Parser = require('rss-parser');
let parser = new Parser();

(async () => {

    let feed = await parser.parseURL('https://sys-adm.in/?format=feed&type=rss');
    console.log(feed.title);

    feed.items.forEach(item => {
        console.log(item.title + ': ' + item.link)
    });

})();

var interval = setInterval(function(str1, str2) {
    console.log(str1 + " " + str2);
}, 1000, "Hello.", "How are you?");

// clearInterval(interval);

app.listen(4423);