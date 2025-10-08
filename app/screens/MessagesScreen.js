import { FlatList } from 'react-native'
import ListItem from '../components/lists/ListItem'
import Screen from '../screens/Screen'
import ListItemSeparator from '../components/lists/ListItemSeparator'
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction'
import {useState} from "react"

const initialMessages=[
        {
            id:1,
            title:"T1",
            description:"d1",
            image:require("../assets/mosh.jpg")
        },
        {
            id:2,
            title:"T2",
            description:"d2",
            image:require("../assets/mosh.jpg")
        },
]

export default function MessagesScreen() {
    
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false)

    const handleDelete = (message) => {
        setMessages(messages.filter(m => m.id !== message.id));
    }
  return (
    <Screen>
    <FlatList 
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ListItem  image ={item.image} title={item.title} subTitle={item.description} onPress={()=>console.log(item)} chevrons renderRightActions={()=><ListItemDeleteAction onPress={()=>{handleDelete(item)}}/>}/>}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
            setMessages([
            {
                id:2,
                title:"T2",
                description:"d2",
                image:require("../assets/mosh.jpg")
            },
            ])
        }}
    />
    </Screen>
  )
}