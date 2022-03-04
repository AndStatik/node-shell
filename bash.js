// const { required } = require("nodemon/lib/config");

const pwd = require('./pwd.js');
const list = require('./ls.js');
const cat = require('./cat.js');

process.stdout.write('prompt >');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  // process.stdout.write('You typed : ' + cmd);
  process.stdout.write('\nprompt >');

  // compare data if === to pwd
  if (cmd === 'pwd') {
    pwd();
  }
  if (cmd === 'ls') {
    list();
  }
  if (cmd.includes('cat ')) {
    cat(cmd.split(' ')[1]);
  }
});
