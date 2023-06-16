import React from 'react'
import Form from 'react-bootstrap/Form';
let errorStytle={
  color:"red"
}
export default function C_ErrorMessage({error,visible,name}) {
  // console.log(name,visible)
    if(visible) return null
  return (
    <div >
       <Form.Control.Feedback style={errorStytle} type="invalid">
                {error}
        </Form.Control.Feedback>
    </div>
  )
}