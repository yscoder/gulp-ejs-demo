var fs = require('fs');

var root = './templates';

module.exports = function (url, res, template) {
    var path = root + url,
        dataPath = path +'.json',
        contentPath = path +'.html';

    if(url != '/' && fs.existsSync(dataPath)) {
        
        data = JSON.parse(fs.readFileSync(dataPath));
        data.filename = contentPath;
        content = fs.readFileSync(contentPath, 'utf8');

        res.end(template.render(content, data));
        console.log('Get:' + data.filename);
    } else {
        var error = url + '  Not found!';
        console.log(error);
        if(!url.match('ico')) {
            res.end(error);
        }
    }
           
}