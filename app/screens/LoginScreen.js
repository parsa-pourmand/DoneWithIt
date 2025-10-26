import {Image, StyleSheet } from 'react-native'
import Screen from './Screen'
import {SubmitButton, FormComponent, FormFieldComponent, ErrorMessage} from '../components/forms'
import * as Yup from 'yup'
import { useState } from 'react'
import authApi from '../api/auth'
import useAuth from '../auth/useAuth'


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")

})
export default function LoginScreen() {
    const [loginFailed, setLoginFailed] = useState(false)
    const auth = useAuth()

    const handleSubmit = async (LoginInfo) => {
        const result = await authApi.login(LoginInfo.email, LoginInfo.password)

        if(!result.ok) {
            return setLoginFailed(true)
        }
        setLoginFailed(false)

        auth.logIn(result.data)
    }
  return (
    <Screen style={styles.container}>
        <Image  style={styles.logo} source={require('../assets/logo.png')}/>
        <FormComponent initialValues={{email:'', password:''}} onSubmit={handleSubmit} validationSchema={validationSchema}>
                <ErrorMessage error="Invalid email address or password" visible={loginFailed}/>
                <FormFieldComponent 
                    icon="email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
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
                <SubmitButton title="Login"/>
            
        </FormComponent>
        
    </Screen>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:15
    },
    logo:{
        width:80,
        height:80,
        alignSelf:'center',
        marginTop:50,
        marginBottom:20
    },
})