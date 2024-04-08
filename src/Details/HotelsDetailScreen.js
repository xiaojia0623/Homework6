import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';
import TextStyles from '../Styles/TextStyles';
import buttonstyle from '../Styles/ButtonStyle';

export default function CeremicsDetailScreen(props) {
    const passProps = props.route.params.passProps || 'nothing get'
  return (
    <View style={styles.container}>
      <Image source={passProps.img} style={{width:"100%", height:200, borderRadius:10,}}  />
      <Text style={[TextStyles.titleFont, {marginBottom:10}]}>{passProps.note}</Text>
      <Text style={TextStyles.textContent}>{passProps.depiction}</Text>
      <Text style={[TextStyles.textContent, {textAlign:'left'}]}>地點: {passProps.location}</Text>

      <TouchableOpacity style={buttonstyle.backBtn} onPress={() => props.navigation.pop()}>
        <Text style={TextStyles.textBtn}>回飯店列表頁面</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE4C4',
    alignItems: 'center ',
    justifyContent: 'center',
    padding:20
  },
});