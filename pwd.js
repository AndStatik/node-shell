const pwd = () => {
  console.log(process.cwd());
  process.stdout.write('\nprompt >');
}

module.exports = pwd;
