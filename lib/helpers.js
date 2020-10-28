export function parseVars(str) {
  const parsedVars = []
  const prefix = '{';
  const postfix = '}';

  let startIndex = -1;

  // // str = str.replace('\n', ' ');
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (startIndex == -1 && char == prefix) {
      startIndex = i;
    } else if (startIndex > -1) {
      if (char == '\n' || char == ' ') {
        startIndex = -1;
      } else if (char == postfix) {
        parsedVars.push(str.substring(startIndex, i + postfix.length));
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