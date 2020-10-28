export function parseVars(prefix, postfix, text) {
  const parsedVars = []

  text.split(' ').forEach(word => {
    if (word.includes(prefix) && word.includes(postfix)) {
      const startIndex = word.indexOf(prefix);
      const endIndex = word.indexOf(postfix) + 2;
      const variable = word.substring(startIndex, endIndex);

      if (variable.length > 4) {
        parsedVars.push(variable.toUpperCase());
      }
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
  const re_date = new RegExp('{{DATE}}', 'gi');
  text = text.replace(re_date, getFormattedDate());

  return text;
}

function getFormattedDate() {
  const now = new Date();

  return `${now.getMonth()}/${now.getDate()}/${now.getFullYear()}`;
}