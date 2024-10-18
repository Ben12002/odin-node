const fs = require('fs'); // For callback-based, along with synchronous API
const fsAsync = require('fs/promises'); // For promise-based API


// Callback-based API
// https://nodejs.org/docs/latest-v20.x/api/fs.html#fsrenameoldpath-newpath-callback
function callBackRename(name, newName) {
  fs.rename(name, newName, (err) => {
    if (err) { 
      console.error(err); // If there is an error
    } else {  
      console.log(`Done. File renamed to ${newName}`); // On successful completion
    }
  });
}

// Synchronous API
// https://nodejs.org/docs/latest-v20.x/api/fs.html#fsrenamesyncoldpath-newpath
function synchronousRename(name, newName) {
  try {
    fs.renameSync(name, newName); // This blocks the program
    console.log(`Done. File renamed to ${newName}`);  // On successful completion
  } catch (err) {
    console.error(err);
  }
}

// Promise-based API
// https://nodejs.org/docs/latest-v20.x/api/fs.html#fspromisesrenameoldpath-newpath
async function promiseRename(name, newName) {
  try {
    await fsAsync.rename(name, newName) // This doesn't block the program
    console.log(`Done. File renamed to ${newName}`); // On successful completion
  } catch(err) {
    console.error(err);
  }
}

// callBackRename('before.json', 'after.json');
// synchronousRename('before.json', 'after.json');
promiseRename('before.json', 'after.json');
