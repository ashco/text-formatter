import React from 'react'

import Container from './Container'
import Button from './Button'
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
    <main className="h-full sm:flex">
      <Container mode="input">
        <Textarea value={inputText} placeholder="Input template text here.." handleChange={handleTextareaChange}/>
        {Object.keys(variables).map(v => (
          <InputField key={v} name={v} placeholder={v} handleChange={handleInputChange} />
        ))}
      </Container>
      <Container mode="output">
        <Button onClick={handleCopyText}>
          COPY
        </Button>
        <Textarea type='output' placeholder="Formatted text outputs here.." disabled={true} value={outputText}/>
      </Container>
    </main>
  )
}

export default Main
