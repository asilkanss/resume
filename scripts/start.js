const concurrently = require('concurrently');
const upath = require('upath');

const browserSyncPath = upath.resolve(upath.dirname(__filename), '../node_modules/.bin/browser-sync');

concurrently([
    { command: 'node scripts/sb-watch.js', name: 'SB_WATCH', prefixColor: 'bgBlue.bold' },
    {
        command: `"${browserSyncPath}" --reload-delay 500 --reload-debounce 500 docs -w --no-online`,
        name: 'SB_BROWSER_SYNC',
        prefixColor: 'bgGreen.bold',
    }
], {
    prefix: 'name',
    killOthers: ['failure', 'success'],
}).then(success, failure);

function success() {
    console.log('Success');
}

function failure() {
    console.log('Failure');
}
