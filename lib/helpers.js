export function parseVars(str) {
  const parsedVars = []
  const dict = {
    "{": "}",
  }

  let startIndex = -1;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (startIndex == -1 && Object.keys(dict).includes(char)) {
      startIndex = i;
    } else if (startIndex > -1) {
      if (char == '\n') {
        startIndex = -1;
      } else if (char == dict[str[startIndex]]) {
        const variable = str.substring(startIndex, i + 1)
        parsedVars.push(variable);
        startIndex = -1
      }
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
  const re_date = new RegExp('!DATE', 'gi');
  text = text.replace(re_date, getFormattedDate());

  return text;
}

function getFormattedDate() {
  const now = new Date();

  return `${now.getMonth()}/${now.getDate()}/${now.getFullYear()}`;
}