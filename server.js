APP.get('/manifest.json', function(req, res) {
    res.append('Content-Type', 'text/javascript');
    res.sendFile(path.join(root, "https://raw.githubusercontent.com/qkhnsmsk/depo/master/manifest.json"));
});

APP.get('/sw.js', function(req, res) {
    res.append('Content-Type', 'text/javascript');
    res.sendFile(path.join(root, "https://raw.githubusercontent.com/qkhnsmsk/depo/master/sw.js"));
});
