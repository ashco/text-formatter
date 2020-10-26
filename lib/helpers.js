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
  text = addDynamicVars(text)

  for (let key in variables) {
    const re = new RegExp(key, 'gi');
    text = text.replace(re, variables[key]);
  }

  return text;
}

function addDynamicVars(text) {
  const re_date = new RegExp('!DATE', 'gi');
  text = text.replace(re_date, getFormattedDate());

  return text;
}

function getFormattedDate() {
  const now = new Date();

  return `${now.getMonth()}/${now.getDate()}/${now.getFullYear()}`;
}