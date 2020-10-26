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

  const handleCopyText = () => {
    navigator.clipboard.writeText(outputText).then(
      (res) => console.log('Copy success!'),
      (err) => console.log('Copy failure!')
    )
  }

  // Parse inputText for $VARIABLE
  React.useEffect(() => {
    const parsedVars = parseVars('#', inputText)



    if (parsedVars.length) {
      parsedVars.forEach(v => {
        if (!variables[v] && variables[v] != '') {
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
        <h1 className="text-white font-medium text-2xl text-center my-2">TRANSFORMER</h1>
        <div className="flex flex-col space-y-2">
            {Object.keys(variables).map(v => (
              <InputField key={v} name={v} placeholder={v} handleChange={handleInputChange} />
            ))}
          <button onClick={handleCopyText} className="bg-orange-600 hover:bg-orange-700 focus:bg-orange-700 text-white flex items-center justify-around w-full h-12 font-medium text-lg">
            COPY
          </button>
        </div>
      </div>
      <Textarea type='output' placeholder="Output here.." disabled={true} value={outputText}/>
    </main>
  )
}

export default Main
