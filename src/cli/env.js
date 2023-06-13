const parseEnv = () => {
  const variables = Object.entries(process.env).filter(([variable]) => variable.startsWith('RSS_')).map((el) => `${el[0]}=${el[1]}`).join('; ')
  console.log(variables)
};

parseEnv();