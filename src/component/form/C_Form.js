import React from 'react';
import { Formik } from 'formik';
import Form from 'react-bootstrap/Form';

function C_Form({initialValues,onSubmit,validationSchema,children}) {
return (
<Formik
initialValues={initialValues}
onSubmit={onSubmit}
validationSchema={validationSchema}
>
{() => 
(<>
<Form noValidate onSubmit={onSubmit}>
{children}
</Form>
</>)
}
</Formik>
 );
}
export default C_Form;