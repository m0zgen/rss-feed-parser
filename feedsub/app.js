const express = require('express');
const app = express();

const FeedSub = require('feedsub', {emitOnStart: true});

let reader = new FeedSub('https://sys-adm.in/?format=feed&type=rss', {
    interval: 1 // Check feed every 1 minutes.
});

reader.on('item', (item) => {
    console.log('Got item!');
    console.dir(item);
});

reader.start();

app.listen(4424);