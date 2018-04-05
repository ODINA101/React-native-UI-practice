import React from 'react';
import { StyleSheet, Text,ListView, View,Image,ScrollView } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import Ripple from 'react-native-material-ripple';

export default class App extends React.Component {
constructor() {
super();


this.state = {
  data: [{name:"Leanne Graham",photo:"https://randomuser.me/api/portraits/women/31.jpg"},
  {name:"Lala Howell",photo:"https://randomuser.me/api/portraits/women/34.jpg"},
  {name:"Clementine Bauch",photo:"https://randomuser.me/api/portraits/men/42.jpg"},
  {name:"Patricia Lebsack",photo:"https://randomuser.me/api/portraits/women/12.jpg"}
  ,{name:"Levi Dat",photo:"https://randomuser.me/api/portraits/men/57.jpg"},
  {name:"Kurtis Weissnat",photo:"https://randomuser.me/api/portraits/men/67.jpg"},
  {name:"Glenna Reichert",photo:"https://randomuser.me/api/portraits/men/71.jpg"},
  {name:"Clementina DuBuque",photo:"https://randomuser.me/api/portraits/women/72.jpg"},
  {name:"Chaim McDermott",photo:"https://randomuser.me/api/portraits/men/27.jpg"}],
  colors:["#24C3B8","#CCAEAE","#BD67D6","#ED69B4","#FBD06F"]
}


}


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
    <FontAwesome name="address-card" size={30} color="white" style={styles.headerItem}/> 
    <Text style={styles.title}>Chat</Text>
    <Image source={{uri:"https://i.pinimg.com/originals/3b/7d/6f/3b7d6f60e2d450b899c322266fc6edfd.png"}}  style={styles.headerImg}  />

       </View>
       <Ripple style={{flex:1}} >
       <View style={styles.newmsg}>
    <FontAwesome name="edit" size={30} color="white" /> 
       
       <Text style={{color:"#FFF",marginLeft:10,fontSize:23}} >New message</Text>
       </View>
       </Ripple>
       
       <View style={styles.content}>
       <ScrollView>
    {
      this.state.data.map(data => {
        return (
        <Ripple>
        <View style={{flexDirection:"row",height:100}}>
        <Image source={{uri:data.photo}} style={{flex:1}}/>
        <View style={{flex:0.1,backgroundColor:this.state.colors[parseInt(Math.random()*this.state.colors.length)]}} />
        <View style={{backgroundColor:"#FFFFFF",flex:2,alignItems:"center",justifyContent:"center"}}>
        <Text style={{fontSize:20,color:"#63616B"}}>{data.name}</Text>
        </View>
        </View>
        </Ripple>
        )

      })
    }
</ScrollView>
       </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:"column"
  },
  list:{


  },
  header: {
 flex:1,
 backgroundColor:"#424566",
 flexDirection:"row",
 justifyContent:"space-between",
 alignItems: 'center' 
  },
  title: {
  
   fontSize:25,
   color:"#FFF"
  },
  headerImg:{
   
    width:35,
    height:35,
   marginRight:8   
  },
   
  headerItem: {
 
  padding:10,
 
  },
  newmsg: {
  flex:1,
  backgroundColor:"#7C9CFE",
  alignItems:"center",
  flexDirection:"row",
   color:"#FFF",
   justifyContent:"center"
},
  content: {
  flex:5,
  backgroundColor:"#FFF",
  flexDirection:"column"
  }


});
