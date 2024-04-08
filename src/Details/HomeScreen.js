import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,  FlatList , TouchableOpacity, Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';


var MOCKED_DATA = [
    {
      id:1,
      note:'清水美食第一站',
      date:'2022/04/01 11:00',
      img:'https://news.cnyes.com/_next/image?url=https%3A%2F%2Fcimg.cnyes.cool%2Fprod%2Fnews%2F5464943%2Fl%2Fe081035f9ce6dc5779cfa7f7cf4d097d.jpg&w=1920&q=75',
      dep:'服務區內的意象設計「清水夜明珠」，燈塔意象的精神地標，延伸出「清水光點、台灣飛帆」的主題概念，引領方向。服務區二樓則是絕佳的觀景平台，從日落到日出想像乘坐遊輪之中，遠瞭台中日夜風情。白天清晰明亮的大台中景緻，到了夜晚則成為觀星賞月、遠瞭台中點點星光亮起的絕佳高點，吸引許多遊客慕名而來，欣賞感受夜晚的寂靜之美。往返國道三號上，到了中台灣一定要進到清水服務區停歇，吃個飯、或是喝杯咖啡，靜靜感受、觀賞夜晚帶來的靜謚之美。',
    },
    {
      id:2,
      note:'台中outlet開逛',
      date:'2022/04/01 14:00',
      img:'https://photo.settour.com.tw/900x600/https://www.settour.com.tw/ss_img/info/location/TXG/G0/TXG0000149/TXG0000149_89344.jpg',
      dep:'OUTLET是1980年代後半誕生於美國的全新商務流通模式，品牌將過季、下架、零碼商品透過OUTLET進行銷售。現今OUTLET已經成為時下流行的購物方式。舒適的購物環境眾多世界頂級品牌，令人心動的超低折扣，是闔家享受購物、美食、遊樂的最佳去處。',
    },
    {
      id:3,
      note:'台中逢甲夜市吃起來',
      date:'2022/04/01 17:00',
      img:'https://photo.settour.com.tw/900x600/https://www.settour.com.tw/ss_img/info/location/TXG/G0/TXG0000083/TXG0000083_82085.jpg',
      dep:'逢甲文華夜市與其它臺中市夜市最大不同之處，在於其不單是以飲食著稱，也包含了各式各樣的商店，營業時間亦較長。近年來，市政府重新規劃商圈風貌，整修路面，街道造景，並規劃停車空間，努力解決停車的問題。現今逢甲文華夜市嶄新面貌更吸引了不少消費族群，商圈更有逐漸擴大的現象，並成為民眾心目中票選「臺中市十大觀光景點」之一。',
    },
    {
      id:4,
      note:'台南觀光工廠玩起來\n~go go',
      date:'2022/04/2 11:00',
      img:'https://www.tourismfactory.tw/manasystem/FileDate/TripsInfoFile/51972987-F8C4-7DA5-BE88-DAA0053DEDD7.jpg',
      dep:'東和蜂文化觀光工廠為南台灣第一家將蜂文化結合休憩、觀光的觀光工廠，提供遊客視覺、觸覺及味覺的饗宴。由認識東和蜂業說起，到蜂蜜的文化、蜂蜜的生產及相關知識等，讓您完整了解「蜂文化」！',
    },
    {
      id:5,
      note:'台南四草綠色隧道\n看看大自然',
      date:'2021/04/02 13:00',
      img:'https://www.twtainan.net/content/images/attractions/33195/1024x768_Filedata635654926337985732.jpg',
      dep:'兩旁的紅樹林向中央生長齊聚，交織出茂密的半圓綠頂，一層一層的向前方疊出深邃的廊道，不知盡頭而顯得神秘，四草綠隧也因此有了小亞馬遜之稱。',
    },
    {
      id:6,
      note:'品嘗台南美味甜點',
      date:'2021/04/02 15:00',
      img:'https://www.welcometw.com/wp-content/uploads/2021/10/%E6%A0%B8%E6%A1%83%E8%85%A6%E8%A2%8B@lishihnan.jpg',
      dep:'品嚐台南，就像是一場甜蜜的夢。這座城市不僅是台灣美食的樞紐，更是甜點愛好者的天堂。從古早味的花生糖麻糬到創意無限的法式甜點，每一口都是味蕾的享受。在這個歷史悠久的城市裡，你將發現許多令人驚嘆的美食寶藏，每一個甜點都蘊含著濃濃的情感與熱情。來台南，讓我們一起探索這片美食的樂園，品味每一個甜蜜的角落，感受台南的甜點魅力！',
    },
]



export default function HomeScreen(props){
    const [dataSource, setDataSource] = useState([]);


    useEffect(()=> {
        var book = MOCKED_DATA;
        setDataSource(book);
    });
    
    const showNoticeDetail=(cases)=>{
        props.navigation.push('HomeDetail', {passProps:cases});
    };

    const renderBook = (cases) => {
        return (
          <TouchableOpacity onPress={()=> showNoticeDetail(cases)}>
            <View>
              <View style={styles.MainView}>
                <Image source={cases.img} style={{width:60, height:50, borderRadius:5, marginEnd:10}}/>
                <View style={{flex:1}}>
                  <Text ellipsizeMode='tail' numberOfLines={3} style={{color:'black', fontSize:15, marginTop:8}}>
                    {cases.note}
                  </Text>
                  <Text ellipsizeMode='tail' numberOfLines={3} style={{color:'black', fontSize:13, marginBottom:8}}>
                  {cases.date}
                  </Text>
                </View>
                {/* <Image source={myIcon}/> */}
                <AntDesign name="rightcircle" size={24} color="black" style={{marginLeft:30}} />
              </View>
              <View style={styles.seperator}></View>
            </View>
          </TouchableOpacity>
        )
    }


    return (
        <View >
            <FlatList data={dataSource} renderItem={(cases) => renderBook(cases.item)} keyExtractor={(cases) => cases.id} style={{backgroundColor:'white'}} />
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFE4C4',
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