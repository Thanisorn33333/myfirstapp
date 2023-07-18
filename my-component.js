import react from "react";
import {View,Text,StyleSheer} from 'react-native'

export default function MyComponet(){
   return(
       <View style={styles.container}>
          <Text style={styles.textTitle}>Hello My Comment</Text>
          <Text style={styles.textPara}>React Native JavaScript Feamework....</Text>
       
          <Text style={{color:'red',fontWeight:'bold'}}>Contact React Native</Text>
       </View>
       )
}
const styles = StyleSheet.create({
    container: {
        paddingTop:30,
        pudding:20,
        backgroundColor:'lightgray'
    },
    textTitle:{
        color:'buie',
        fontSize:20,
        fontWeight:'bold',
        marginTop:15
    },
    textPara:{
        fontSize:16
    }
})


