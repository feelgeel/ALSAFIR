import React from 'react';
import { useFormikContext } from 'formik';
import { Button } from 'react-bootstrap';

function C_SubmitButton({title}) {
const {handleSubmit}=useFormikContext()

return (
    <Button onClick={handleSubmit} type="submit">Submit form</Button>
 );
}
export default C_SubmitButton;