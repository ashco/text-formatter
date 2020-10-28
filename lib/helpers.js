export function parseVars(prefix, postfix, str) {
  const parsedVars = []
  let startIndex = 0;


  while (startIndex > -1) {
    str = str.substr(startIndex)

    startIndex = str.indexOf(prefix);
    const endIndex = str.indexOf(postfix);

    if (startIndex == -1 || endIndex == -1) {
      break;
    } else {
      const variable = str.substring(startIndex, endIndex + postfix.length);
      parsedVars.push(variable);
      startIndex = endIndex + postfix.length;
    }
  }

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