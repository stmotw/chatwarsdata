const fs = require('fs');
const path = require('path');

const getJSON = f => JSON.parse(fs.readFileSync(path.join(__dirname, `${f}.json`)));

module.exports = {
    items: getJSON('items'),
    recipes: getJSON('recipes'),
    resources: getJSON('resources'),
};
