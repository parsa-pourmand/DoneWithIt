import { useFormikContext } from 'formik'
import ErrorMessage from './ErrorMessage'
import TextInputComponent from '../TextInputComponent';

export default function FormFieldComponent({name, width, ...otherProps}) {
    const {handleChange, errors, setFieldTouched, touched} = useFormikContext();
  return (
    <>
      <TextInputComponent 
          onChangeText={handleChange(name)}
          onBlur={()=>setFieldTouched(name)}
          width={width}
          {...otherProps}
      />
        <ErrorMessage error={errors[name]} visible={touched[name]}/>
    </>
  )
}