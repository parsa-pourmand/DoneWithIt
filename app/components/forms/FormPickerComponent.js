import { useFormikContext } from 'formik'
import PickerComponent from '../PickerComponent'
import ErrorMessage from './ErrorMessage'
import colors from '../../config/colors'

export default function FormPickerComponent({name, width, placeholder, PickerItemComponent,numOfColumns, items}) {
    const {errors, setFieldValue, touched, values} = useFormikContext() 
  return (
    <>
    <PickerComponent 
        placeholder={placeholder} numOfColumns={numOfColumns} width={width} items={items} PickerItemComponent={PickerItemComponent} selectedItem={values[name]} onSelect={(item)=>setFieldValue(name,item)} color={colors.medium}
    />
    <ErrorMessage error={errors[name]} visible={touched[name]}/>
    </>
)
}