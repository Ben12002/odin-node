const fs = require('node:fs');
const fsAsync = require('node:fs/promises');


function readCallback(file, options={encoding: 'utf8'}) {
  fs.readFile(file, options, (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}

function readSync(file, options={encoding: 'utf8'}) {
  try {
    data = fs.readFileSync(file, options);
    console.log(data);
  } catch (err) {
    console.err(err.message);
  }
  
  
}

async function readAsync(file, options={encoding: 'utf8'}) {
  try {
    const data = await fsAsync.readFile(file, options);
    console.log(data);
  } catch (err) {
    console.err(err.message);
  }
}


readCallback('bar.txt');
readSync('bar.txt');
readAsync('bar.txt');