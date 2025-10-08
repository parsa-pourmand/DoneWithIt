import { View, Text } from 'react-native'
import React from 'react'
import { Formik } from 'formik'


export default function FormComponent(props) {
  return (
    <Formik initialValues={props.initialValues} onSubmit={props.onSubmit} validationSchema={props.validationSchema}>
        {() => (
            <>
            {props.children}
            </>
        )}
            
    </Formik>
  )
}