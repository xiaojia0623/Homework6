import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,  FlatList , TouchableOpacity, Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';


var FAKE_DATA = [
    {
      id:1,
      note:'台中大毅老爺行旅',
      location:'台中市西區英才路601號',
      img:'https://www.funtime.com.tw/blog/wp-content/uploads/2019/06/ThePlaceTaichung.jpg',
      depiction:'在台中大毅老爺行旅徜徉草悟道綠意，走訪環繞四周的文創聚落與藝文展覽，獨特幾何窗景與空間設計讓旅人能以全新角度欣賞城市脈動與星光夜景，實現旅人對旅行的美好想像。',
    },
    {
      id:2,
      note:'台中綠宿行旅',
      location:'台中市西區民生北路126號',
      img:'https://www.funtime.com.tw/blog/wp-content/uploads/2019/06/GreenHotelWestDistrict-02.jpg',
      depiction:'以綠生活為概念，秉持友愛大地的心，打造充滿綠意、環保的休憩空間，將大量自然元素融入設計，與旅人一同體驗城市旅行的自在與溫暖。',
    },
    {
      id:3,
      note:'台中卡爾登飯店',
      location:'台中西區忠明南路61號',
      img:'https://www.funtime.com.tw/blog/wp-content/uploads/2019/06/TheCarltonTaichung.jpg',
      depiction:'為較平價的住宿，距離草悟道只有1公里， 旅館公設有免費洗衣烘衣及健身房，除此之外還有無限供應咖啡及茶水等，也有許多座位區很適合與朋友聊天，旅館附近還有很多酒吧可以去，也有巷弄小店可以探索。',
    },
    {
      id:4,
      note:'台南大飯店',
      location:'台南市中西區成功路一號',
      img:'https://www.hotel-tainan.com.tw/upload/room_b/eeacefb5aa07c5bd5029d07c3f956861.jpg',
      depiction:'擁有 152 間舒適客房及特色套房，是商務、旅遊府城的最佳落腳處。',
    },
    {
      id:5,
      note:'台南綉溪安平飯店',
      location:'台南市安平區古堡街136號',
      img:'https://res.klook.com/image/upload/fl_lossy.progressive,c_fill,f_auto,q_65/v1705463974/hotel/wmb8ew0qdbeqaecaws4n.jpg',
      depiction:'紀錄著過去的安平人們，在尚未填土之前，乘著方舟來往各鯤鯓之樣貌，於途中所見安平臨海地貌、夕日的華美。便以「休息」為念，期待人們踏進綉溪時，細嚐綉溪為您打造的每一分美好，而感受到真正的休養生息。這裡是家、是飯店、是一個悠然感受生活的好地方。',
    },
    {
      id:6,
      note:'台南康橋慢旅',
      location:'台南市中西區民生路二段416號',
      img:'https://pix8.agoda.net/hotelImages/11533708/-1/d4d5b5ccbb79277021d32b09f97b1439.jpg?ca=10&ce=1&s=1024x',
      depiction:'睡在舒適的床鋪、享受美味的宵夜、吃頓豐盛的早餐。「旅館」是旅人與旅程最重要的橋梁，康橋慢旅為你充飽能量，大步前行！',
    },
]






export default function CeremicsScreen(props) {
    const [fakeDataSource, setFakeDataSource] = useState([]);

    useEffect(()=> {
        var place = FAKE_DATA;
        setFakeDataSource(place);
    });
    
    const showHoteleDetail=(cases)=>{
        props.navigation.push('HotelDetail', {passProps:cases});
    };

    const renderPlace = (cases) => {
        return (
          <TouchableOpacity onPress={()=> showHoteleDetail(cases)}>
            <View>
              <View style={styles.MainView}>
                <Image source={cases.img} style={{width:60, height:50, borderRadius:5, marginEnd:10}}/>
                <View style={{flex:1}}>
                  <Text ellipsizeMode='tail' numberOfLines={3} style={{color:'black', fontSize:15, marginTop:8}}>
                    {cases.note}
                  </Text>
                  <Text ellipsizeMode='tail' numberOfLines={3} style={{color:'black', fontSize:13, marginBottom:8}}>
                  {cases.location}
                  </Text>
                </View>
                <AntDesign name="rightcircle" size={24} color="black" style={{marginLeft:30}} />
              </View>
              <View style={styles.seperator}></View>
            </View>
          </TouchableOpacity>
        )
    }

    return (
        <View>
            <FlatList data={fakeDataSource} renderItem={(cases) => renderPlace(cases.item)} keyExtractor={(cases) => cases.id} style={{backgroundColor:'white'}} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DEB887',
        alignItems: 'center ',
        justifyContent: 'center',
    },
    MainView:{
        height:80,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFE4C4',
        padding:15
    },
    seperator:{
        height:1,
        width:'100%',
        backgroundColor:'#D2691E',
    }
});
