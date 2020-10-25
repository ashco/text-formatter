﻿import React from 'react'

import Container from './Container'
import Button from './Button'
import Textarea from './Textarea'
import InputField from './InputField'

import parseVars from '../lib/parseVars'

const Main = () => {
  const [inputText, setInputText] = React.useState('');
  const [outputText, setOutputText] = React.useState('');

  const [varSet, setVarSet] = React.useState(new Set([]));

  const handleTextareaChange = (e) => {
    const { value } = e.target;
    setInputText(value);
  }

  // Parse inputText for $VARIABLE
  React.useEffect(() => {
    const parsedVars = parseVars('$$', inputText)
    if (parsedVars.length) {
      parsedVars.forEach(variable => {
        if (!varSet.has(variable)) varSet.add(variable)
      })
      Array.from(varSet).forEach(variable => {
        if (!parsedVars.includes(variable)) varSet.delete(variable)
      })
    } else {
      varSet.clear()
    }

    console.log(parsedVars, '|', varSet)
  }, [inputText])

  return (
    <main className="h-full sm:flex">
      <Container mode="input">
        <Textarea value={inputText} handleChange={handleTextareaChange}/>
        {Array.from(varSet).map(variable => (
          <InputField key={variable} placeholder={variable} />
        ))}
        <Button>
          TOGGLE
        </Button>
      </Container>
      <Container mode="output">
        <Textarea disabled={true} value={outputText}/>
        <Button type='primary'>
          COPY
        </Button>
      </Container>
    </main>
  )
}

export default Main