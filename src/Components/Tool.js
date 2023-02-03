import React from 'react'
import styled from 'styled-components'

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

const Tool = ({option}) => {
  return (
    <>
    <Title>{option.name}</Title>
    <Description>{option.description}</Description>
    <TextArea rows={10} cols={100} placeholder='Type something ...'/>
    </>
  )
}

export default Tool