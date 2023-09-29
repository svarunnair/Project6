import { Button, Center, Input, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'


function Todo() {

    const[todo,setTodo]=useState('')
    const[data,setData]=useState([])


    const handleTodo=(e)=>{
        let value=e.target.value 
        setTodo(value)
    }
    const handleSubmit=()=>{
        setData([...data,todo])
    }
    
  return (
    <Stack><h1><b>Enter Todo</b></h1>
        <Input onChange={handleTodo} placeholder='Todo here'/>
        <Button onClick={handleSubmit} colorScheme='red' width={200} >Submit</Button>
        {data.map((item)=>(
            <h5>
            {item}
            </h5>
        ))}
    </Stack>
  )
}

export default Todo