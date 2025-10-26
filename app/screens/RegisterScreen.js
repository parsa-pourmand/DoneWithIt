import { StyleSheet } from 'react-native'
import * as Yup from 'yup'
import {SubmitButton, FormComponent, FormFieldComponent, ErrorMessage} from '../components/forms'
import Screen from './Screen'
import userApi from '../api/users'
import useAuth from '../auth/useAuth'
import { useState } from 'react'
import authApi from '../api/auth'
import useApi from '../hooks/useApi'
import ActivityIndicator from '../components/ActivityIndicator'


const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),


})

export default function RegisterScreen() {
  const registerApi = useApi(userApi.register)
  const loginApi = useApi(authApi.login)
  const auth = useAuth()
  const [error, setError] = useState()

  const handleRegister = async (userInfo) => {
    const result = await registerApi.request(userInfo)

    if(!result.ok){
      if(result.data) setError(result.data.error)
      else{
        setError("An Unknown error occured!")
        console.log(result)
      }
      return
    }

    const {data:authToken} = await loginApi.request(
      userInfo.email,
      userInfo.password
    )
    auth.logIn(authToken)
  }
  return (
    <>
    <ActivityIndicator visible={registerApi.loading || loginApi.loading}/>
    <Screen style={styles.container}>
      
      <FormComponent initialValues={{name:'', email:'', password:''}} onSubmit={handleRegister} validationSchema={validationSchema}>
        <ErrorMessage error={error} visible={error}/>
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
    </>
  )
}
const styles = StyleSheet.create({
    container:{
        padding:20
    }
})