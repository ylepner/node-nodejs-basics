const parseArgs = () => {
  const arrayArgs = process.argv.slice(2)
  const newArray = []
  for (let i = 0; i < arrayArgs.length; i++) {
    if (arrayArgs[i].startsWith('--')) {
      const arg = `${arrayArgs[i].slice(2)} is ${arrayArgs[i + 1]}`
      newArray.push(arg)
    }
  }
  console.log(newArray.join(', '))
};

parseArgs();
