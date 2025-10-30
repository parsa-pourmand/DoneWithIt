import { Alert, Keyboard } from "react-native"
import messageApi from "../../api/message"
import * as Notifications from 'expo-notifications';
import * as Yup from 'yup'
import FormComponent from "./FormComponent";
import FormFieldComponent from "./FormFieldComponent";
import SubmitButton from "./SubmitButton";
import logger from "../../utility/logger";

function ContactSellerForm({listing}){
    const handleSubmit = async({message}, {resetForm})=>{
        Keyboard.dismiss()
        const result = await messageApi.send(message, listing.id)

        if(!result.ok){
            logger.log('Error', result)
            return Alert.alert("Error", "Could not send the message to the seller!")
        }

        resetForm()

        await Notifications.scheduleNotificationAsync({
            content: {
                title: "Awesome!",
                body: "Your message was sent to the seller.",
            },
            trigger: null,
            
        });
    }
    const validationSchema = Yup.object().shape({
        message: Yup.string().required().min(1).label("Message"),
    });
    return(
        <FormComponent initialValues={{message:''}} onSubmit={handleSubmit} validationSchema={validationSchema}>
            <FormFieldComponent
                placeholder="Message..."
                name="message"
                maxLength={255}
                multiline
                numberOfLines={3}
            />
            <SubmitButton title="Contact Seller" />
        </FormComponent>
    )

}

export default ContactSellerForm