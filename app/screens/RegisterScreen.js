import { StyleSheet } from 'react-native'
import * as Yup from 'yup'
import {SubmitButton, FormComponent, FormFieldComponent} from '../components/forms'
import Screen from './Screen'


const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),


})

export default function RegisterScreen() {
  return (
    <Screen style={styles.container}>
      <FormComponent initialValues={{name:'', email:'', password:''}} onSubmit={values => console.log(values)} validationSchema={validationSchema}>
        <FormFieldComponent 
            name="name"
            icon="account"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Name"
        />

        <FormFieldComponent 
            name="email"
            icon="email"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email"
            keyboardType="email-address" 
            textContentType="emailAddress" 
        />
        <FormFieldComponent 
            icon="lock"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Password"
            name="password"
            secureTextEntry
            textContentType="password"
        />
        <SubmitButton title="Register"/>


      </FormComponent>
    </Screen>
  )
}
const styles = StyleSheet.create({
    container:{
        padding:20
    }
})