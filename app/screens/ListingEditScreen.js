import CategoryPickerItem from '../components/CategoryPickerItem';
import FormImageInputList from '../components/FormImageInputList';
import { FormComponent, FormFieldComponent, FormPickerComponent, SubmitButton } from '../components/forms'
import Screen from './Screen'
import * as Yup from 'yup'
import useLocation from '../hooks/useLocation';
import listingsApi from '../api/listings'
import { useState } from 'react';
import UploadScreen from './UploadScreen';



const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(1000).label("Price"),
    description: Yup.string().label("Description"),
    images: Yup.array().min(1, "Please select at least 1 image.")
})

const categories = [
    {icon:"floor-lamp", iconBackground:"#fc5c65", label:"Furniture", value:1},
    {icon:"car", iconBackground:"#fd9644", label:"Car", value:2},
    {icon:"camera", iconBackground:"#fed330", label:"Cameras", value:3},
    {icon:"cards", iconBackground:"#26de81", label:"Games", value:4},
    {icon:"shoe-heel", iconBackground:"#2bcbba", label:"Clothing", value:5},
    {icon:"basketball", iconBackground:"#45aaf2", label:"Sports", value:6},
    {icon:"headphones", iconBackground:"#4b7bec", label:"Movies & Music", value:6},
    {icon:"book-open-blank-variant", iconBackground:"#bc6bc7ff", label:"Books", value:7},
    {icon:"clipboard-outline", iconBackground:"#55617af5", label:"Other", value:8},
];
export default function ListingEditScreen() {
    const location = useLocation()
    const [uploadVisible, setUploadVisible] = useState(false)
    const [progress, setProgress] = useState()

    const handleSubmit = async (listing, {resetForm}) =>{
        setProgress(0)
        setUploadVisible(true)

        
        const result = await listingsApi.addListings({...listing, location},
            (progress)=>setProgress(progress))
        

        if(!result.ok){ 
            setUploadVisible(false)
            return alert("Could not save the new Listing!")
        }
        resetForm();
    }

  return (

    
    <Screen style={{padding:15}}>
        <UploadScreen onDone={()=> setUploadVisible(false)} visible={uploadVisible} progress={progress}/>
        <FormComponent initialValues={{title:"", price:"", description:"", category:null, images:[]}} onSubmit={handleSubmit} validationSchema={validationSchema}>
            
            <FormImageInputList name="images"/>

            <FormFieldComponent
                name="title"
                autoCorrect={false}
                placeholder="Title"
                maxLength={255}
            />

            <FormFieldComponent
                name="price"
                autoCorrect={false}
                placeholder="Price"
                keyboardType="numeric"
                maxLength={8}
                width='40%'
            />

            <FormPickerComponent
                name="category"
                placeholder="Category"
                items={categories}
                width='50%'
                PickerItemComponent={CategoryPickerItem}
                numOfColumns={3}
            />

            <FormFieldComponent
                name="description"
                autoCorrect={false}
                placeholder="Description"
                maxLength={255}
                multiline
                numberOfLines={3}
            />
             <SubmitButton title="POST"/>
        </FormComponent>
    </Screen>
  )
}