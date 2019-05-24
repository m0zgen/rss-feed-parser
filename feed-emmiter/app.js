const express = require('express');
const rssEmmiter = require('rss-feed-emitter');
const PORT = process.env.PORT || 4426;

let app = express();
let feeder = new rssEmmiter({ _userAgent: 'RSS FEED EMMITER' });

feeder.add({
    url: 'https://sys-adm.in/?format=feed&type=rss',
    refresh: 2000
});

feeder.add({
    url: 'https://forum.sys-adm.in/index.php?action=.xml;type=rss',
    refresh: 2000
})

feeder.on('new-item', function(item) {
    console.log(item.title + ": " + item.link);
});

feeder.list();

app.listen(PORT, console.log(`listening on ${PORT}`));