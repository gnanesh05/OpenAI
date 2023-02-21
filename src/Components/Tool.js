import React, {useState,useEffect} from 'react'
import styled from 'styled-components'
import { Configuration, OpenAIApi } from 'openai'


const TextArea = styled.textarea`
border: 1px solid white;
color: white;
border-radius: 3px;
padding: 10px;
background-color: transparent;
`

const Title =styled.h3`
font-weight: 400;
`
const Description = styled.p`
font-weight: 300;
font-size: small;
`
const Button = styled.button`
`
const Response = styled.p`
`
const Tool = () => {
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY
  })

  const openai = new OpenAIApi(configuration)
  const[option, selectOption] = useState({})
  const[result, setResult] = useState('')
  const[input, setInput] = useState('')
  useEffect(() => {
    selectOption(JSON.parse(localStorage.getItem('option')))
  }, []);

  const performAI = async()=>{
   let object = {...option.option, prompt:input}
   console.log(object)
   const response = await openai.createCompletion(object)
   setResult(response.data.choices[0].text)
   //alert(response.data.choices[0].text)
   //console.log(response.data.choices[0].text)
   console.log(result)
  }

  return (
   
    <>
    <Title>{option.name}</Title>
    <Description>{option.description}</Description>
    <TextArea rows={10} cols={100} placeholder={`Type the AI magic you want and enter your input`} onChange={(e)=>setInput(e.target.value)}/>
    <br/>
    <Button onClick={performAI}>Perform AI Magic</Button>
    <br/>
    <Response>{result.length > 0 ? result : ""}</Response>
    </>
  )
}

export default Tool