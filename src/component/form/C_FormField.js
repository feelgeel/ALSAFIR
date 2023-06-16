import React, { useState } from 'react';
import { useFormikContext } from 'formik';
import Form from 'react-bootstrap/Form';
import C_ErrorMessage from '../form/C_ErrorMessage';
function C_FormField({name,
    type
// , handleChange,
// handleBlur,values,touched,isValid,errors
}) {
    const {setFieldTouched,handleChange,errors,touched,values}=useFormikContext()
const [visible,setvisible]=useState(false)
// console.log(name,visible)
return (
<div>
<Form.Group  controlId={name}>
              <Form.Label>{name}</Form.Label>
              <Form.Control
                type={type}
                placeholder={name}
                name={name}
                value={values[name]}
                onChange={handleChange(name)}
                isInvalid={!!errors[name]}
                onBlur={()=>setvisible(false)}
                onFocus={()=>setvisible(true)}
              />
             {/* <C_ErrorMessage 
                    error={errors[name]} 
                    visible={visible}
                    name={name}
            /> */}
               {visible&&<Form.Control.Feedback type="invalid">
                {errors[name]}
              </Form.Control.Feedback>}
            </Form.Group>
</div>
 );
}
export default C_FormField;