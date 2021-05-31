import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
 
const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View style={{ backgroundColor: 'black', padding: 10 }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 10 
                }}>
                    <View style={{
                        width: 50,
                        height: 50,
                        backgroundColor: '#cacaca',
                        borderRadius: 25,
                        marginRight: 10 
                    }} />
                    <View style={{ padding: 5 }}>
                        <Text style={{ color: 'white', fontSize: 16 }}>Phi Nguyen</Text>
                        <Text style={{ color: 'white' }}>5*</Text>
                    </View>
                </View>
                <View style={{
                    borderBottomColor: '#919191',
                    borderBottomWidth: 1,
                    borderTopColor: '#919191',
                    borderTopWidth: 1,
                    paddingVertical: 5
                }}>
                    <Pressable onPress={() => console.log('pressed')}>
                        <Text style={{ color: '#dddddd', paddingVertical: 5 }}>Messages</Text>
                    </Pressable>
                </View>
                <Pressable onPress={() => console.log('pressed')}>
                    <Text style={{ color: '#dddddd', paddingVertical: 5 }}>Do more with your account</Text>
                </Pressable>
                <Pressable onPress={() => console.log('pressed')}>
                    <Text style={{ color: 'white', paddingVertical: 5 }}>Make money driving</Text>
                </Pressable>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}

export default CustomDrawer