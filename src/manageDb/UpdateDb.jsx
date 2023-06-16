import React from 'react'
import * as Yup from "yup"
import C_FormField from '../component/form/C_FormField';
import C_Form from '../component/form/C_Form';
import C_SubmitButton from '../component/form/C_SubmitButton';
const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
})
export default function UpdateDb({updatedDt}) {
  console.log("updated dt",updatedDt);
  return (
    <div>
     <C_Form
validationSchema={schema}
onSubmit={(values)=>{
   console.log(values)
   }}
initialValues={{
  email: '',
  password: '',
}}
>
<C_FormField
name="update"
type="text"
/>
<C_FormField
name="password"
type="password"
/>
<C_SubmitButton/>
</C_Form>
    </div>
  )
}
