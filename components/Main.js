import React from 'react'

import Textarea from './Textarea'
import InputField from './InputField'

import { parseVars, formatter } from '../lib/helpers'

const Main = () => {
  let initInputText = '';
  if (typeof window !== "undefined") {
    initInputText = window.localStorage.getItem('inputText') || ''
  }

  const [inputText, setInputText] = React.useState(initInputText);
  const [outputText, setOutputText] = React.useState('');
  const [variables, setVariables] = React.useState({});
  const [copyStatus, setCopyStatus] = React.useState(null);

  const handleTextareaChange = (e) => {
    const { value } = e.target;

    setInputText(value);
    if (typeof window !== "undefined") {
      window.localStorage.setItem('inputText', value);
    }
  }

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setVariables({
      ...variables,
      [name]: value
    })
  }

  const handleCopyStatus = (statusText) => {
    setCopyStatus(statusText)
    setTimeout(() => {
      setCopyStatus(null)
    }, 1000)
  }

  const handleCopyText = () => {
    navigator.clipboard.writeText(outputText).then(
      (res) => handleCopyStatus('COPIED!'),
      (err) => handleCopyStatus('ERROR!')
    )
  }

  // Parse inputText for $VARIABLE
  React.useEffect(() => {
    const parsedVars = parseVars('{{', '}}', inputText)

    if (parsedVars.length) {
      parsedVars.forEach(v => {
        if (variables[v] === undefined) {
          variables[v] = '';
        }
      })
      Object.keys(variables).forEach(v => {
        if (!parsedVars.includes(v)) {
          delete variables[v];
        }
      })
    } else {
      setVariables({});
    }

    console.log(variables)
  }, [inputText])

  // Listen for value changes and update the output text field
  React.useEffect(() => {
    const newOutputText = formatter(inputText, variables)

    setOutputText(newOutputText)
  }, [inputText, variables])

  return (
    <main className="grid grid-rows-mobile sm:grid-rows-desktop sm:grid-cols-desktop">
      <Textarea value={inputText} placeholder="Input here.." handleChange={handleTextareaChange}/>
      <div className="min-h-30 flex flex-col justify-between sm:m-4">
        <span className="flex justify-center my-4 space-x-1">
          <a href="https://ashco.io" target="_blank"><img className="h-12 w-12" src="/ashco-icon-white.svg" alt="AshCo Icon"/></a>
          <h1 className="text-white font-medium text-2xl my-2">Text Formatter</h1>
        </span>
        <div className="flex flex-col">
          <div className="flex flex-col space-y-2">
            {Object.keys(variables).map(v => (
              <InputField key={v} name={v} placeholder={v} handleChange={handleInputChange} />
              ))}
          </div>
          <button onClick={handleCopyText} className="bg-orange-600 hover:bg-orange-700 focus:bg-orange-700 text-white flex items-center justify-around w-full h-12 font-medium text-lg my-3">
            {copyStatus || 'COPY'}
          </button>
        </div>
      </div>
      <Textarea type='output' placeholder="Output here.." disabled={true} value={outputText}/>
    </main>
  )
}

export default Main

