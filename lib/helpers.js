export function parseVars(prefix, text) {
  const parsedVars = []

  text.split(' ').forEach(word => {
    if (word.startsWith(prefix)) {
      parsedVars.push(word)
    }
  })

  return parsedVars
}

export function formatter(text, variables) {
  for (let key in variables) {
    const re = new RegExp(key, 'gi');
    text = text.replace(re, variables[key]);
  }

  return text;
}
