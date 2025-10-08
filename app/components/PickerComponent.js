import { View, Text, StyleSheet, TextInput, Platform, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native'
import Icon from './Icon'
import colors from '../config/colors'
import defaultStyle from '../config/style';
import Screen from '../screens/Screen'
import PickerItem from './PickerItem';
import { useState } from 'react';

export default function PickerComponent({icon, width='100%', placeholder, PickerItemComponent=PickerItem,numOfColumns, items, selectedItem, onSelect}) {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <>
    <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>
      <View style={[styles.container, {width:width}]}>
        {icon && <Icon name={icon} iconColor={colors.medium} backgroundColor={colors.light} style={styles.Icon}/>}
        {selectedItem ? 
          (<Text style={styles.text}>{selectedItem.label}</Text>) 
          : 
          (<Text style={styles.placeholder}>{placeholder}</Text>)
        }
        
        <Icon name="chevron-down" iconColor={colors.medium} backgroundColor={colors.light}/>
      </View>
    </TouchableWithoutFeedback>
    <Modal visible={modalVisible} animationType='slide'>
      <Screen>
        <Button title="Close" onPress={()=>setModalVisible(false)}/>
        <FlatList
          data={items}
          keyExtractor={item => item.value.toString()}
          renderItem={({item}) => (
                                
                                  <PickerItemComponent 
                                      label={item.label}
                                      icon={item.icon}
                                      iconBackground={item.iconBackground} 
                                      onPress={()=>{onSelect(item); setModalVisible(false);}}
                                  />
                                
                                )
                      }

          numColumns={numOfColumns}
        />
      </Screen>
    </Modal>
    </>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:10,
        marginVertical:10,
        borderRadius:25,
        backgroundColor:defaultStyle.colors.light
    },
    text:{
        flex:1,
        alignSelf:'center',
        fontSize:18
    },
    placeholder:{
      alignSelf:'center',
      color: defaultStyle.colors.medium,
      flex:1,
      fontSize:18
    },

})