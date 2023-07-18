import react from 'react'
import {View,Text} from 'react-native'

export default function Variables(){
    let x = 10
    let y = 18.6543
    let z = -12
    const name ='Likit'
    const tel = '123'


  return(
    <View>
     <Text>แสดงค่าจากตัวแปร</Text>
     <Text>X = {x}</Text>
     <Text>y = {y}</Text>
     <Text>z = {z}</Text>
     <Text>Name = {name}</Text>
     <Text>Tel = {tel}</Text>
    </View>
   )
}