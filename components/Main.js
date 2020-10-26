import React from 'react'

import Container from './Container'
import Button from './Button'
import Textarea from './Textarea'
import InputField from './InputField'

import { parseVars, formatter } from '../lib/helpers'


const Main = () => {
  const [inputText, setInputText] = React.useState('Starter text to save $$time for me.');
  const [outputText, setOutputText] = React.useState('');

  const [variables, setVariables] = React.useState({
    "$$VAR1": ''
  });

  const handleTextareaChange = (e) => {
    const { value } = e.target;
    setInputText(value);
  }

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setVariables({
      ...variables,
      [name]: value
    })

  }

  // Parse inputText for $VARIABLE
  React.useEffect(() => {
    const parsedVars = parseVars('!', inputText)

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
        <Textarea value={inputText} handleChange={handleTextareaChange}/>
        {Object.keys(variables).map(v => (
          <InputField key={v} name={v} placeholder={v} handleChange={handleInputChange} />
        ))}
      </Container>
      <Container mode="output">
        <Button type='primary'>
          COPY
        </Button>
        <Textarea type='output' disabled={true} value={outputText}/>
      </Container>
    </main>
  )
}

export default Main
