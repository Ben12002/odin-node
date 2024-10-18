const fs = require('fs'); // For callback-based, along with synchronous API
const fsAsync = require('fs/promises'); // For promise-based API

function writeFileCallBack(file, data, options) {
  fs.writeFile(file, data, options, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('success with callback!');
    }
  });
}

function writeFileSync(file, data, options) {
  try{
    fs.writeFileSync(file, data, options);
    console.log('success with sync!');
  } catch (err) {
    console.error(err);
  }
}

async function writeFileAsync(file, data, options) {
  try {
    await fsAsync.writeFile(file, data, options);
    console.log('success with async!');
  } catch (err) {
    console.error(err);
  }
}

options = { flag: 'a' };

/*
  The following sequence of function calls writes:

        Hi, World sync!
        Hi, World async!
        Hi, World callback!

  to foo.txt. Note the order of operations.
*/
// writeFileAsync('foo.txt', 'Hi, World async!\n', options);
// writeFileCallBack('foo.txt', 'Hi, World callback!\n', options);
// writeFileSync('foo.txt', 'Hi, World sync!\n', options);


/*
  The following sequence of function calls writes:

        Hi, World sync!
        Hi, World callback!
        Hi, World async!

  to foo.txt. Note the order of operations.
*/
writeFileCallBack('foo.txt', 'Hi, World callback!\n', options);
writeFileAsync('foo.txt', 'Hi, World async!\n', options);
writeFileSync('foo.txt', 'Hi, World sync!\n', options);

