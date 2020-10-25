function parseVars(prefix, text) {
  const parsedVars = []

  text.split(' ').forEach(word => {
    if (word.startsWith(prefix)) {
      parsedVars.push(word)
    }
  })

  return parsedVars
}

export default parseVars