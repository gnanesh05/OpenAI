import React from 'react'
import { array } from '../AIOptions'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
margin: 20px;
padding: 10px;
display: grid;
grid-template-columns: auto auto;
gap: 15px;
`

const Option = styled.div`
border: 2px solid whitesmoke;
border-radius: 15px;
padding: 5px;
&:hover {
    cursor: pointer;
    background-color: whitesmoke;
    color: #121212;
}
`
const Title =styled.h3`
font-weight: 700;
`
const Description = styled.p`
font-weight: 500;
font-size: small;
`
const GridOptions = () => {
    const navigate = useNavigate()
    const handleOption = (option)=>{
      localStorage.setItem('option', JSON.stringify(option));
      console.log(option)
      navigate("/AI-Tools")
    }
    

  return (
    <Container>
      {array.map((element,id)=>(
      <Option key={id} onClick={()=>handleOption(element)}>
        <Title>{element.name}</Title> 
        <Description>{element.description}</Description>
      </Option>
        ))}
    </Container>
  )
}

export default GridOptions
