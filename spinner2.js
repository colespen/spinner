let str= "l/-\|/-l/-\|/-l/-\|/-l/-\|/-l/-\|/-l/-\|/-l/-\|/-"


const interval = setInterval(() => {

  process.stdout.write("\r" + str[0] + " ");
  str = str.slice(1);
  
  if (!str.length) {
    clearInterval(interval);
    console.log();
  }
}, 70);
