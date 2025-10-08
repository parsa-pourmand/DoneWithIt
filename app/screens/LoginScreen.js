import {Image, StyleSheet } from 'react-native'
import Screen from './Screen'
import {SubmitButton, FormComponent, FormFieldComponent} from '../components/forms'
import * as Yup from 'yup'


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")

})
export default function LoginScreen() {
    
  return (
    <Screen style={styles.container}>
        <Image  style={styles.logo} source={require('../assets/logo.png')}/>
        <FormComponent initialValues={{email:'', password:''}} onSubmit={values => console.log(values)} validationSchema={validationSchema}>

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