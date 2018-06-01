const updateJSON = require('./update.json');
let packageJSON = require('./package.json');
const fs = require('fs');

let newVersion = updateJSON.version;
let oldVersion = packageJSON.version;

if (newVersion !== oldVersion) {
    /**
     * Update Version
     * @type {[type]}
     */
    packageJSON.version = newVersion;
    /**
     * Update Manifest
     */
    packageJSON.manifest.push(updateJSON);

    fs.writeFileSync('package.json', JSON.stringify(packageJSON));
    fs.unlinkSync('update.json');
    console.log('版本Tag更新成功！');
}