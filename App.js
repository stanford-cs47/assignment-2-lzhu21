import React from 'react';
import { StyleSheet, Text, View, Platform, Image, Dimensions } from 'react-native';
import { Images, Profiles } from './App/Themes';

export default class App extends React.Component {
  constructor() {
    super();

    var haroldProfile = Profiles.harold;
    this.state = {
      profileImage: haroldProfile.image,
      name: haroldProfile.name,
      age: haroldProfile.age,
      occupation: haroldProfile.occupation
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
            <Image style={styles.setimg} source={Images.set}/>
            <Image style={styles.logoimg} source={Images.logo}/>
            <Image style={styles.chatimg} source={Images.chat}/>
        </View>

        <View style={styles.profile}>
          <View style={styles.img}>
            <Image style={styles.profileimg} source={Images.harold}/>
          </View>
          <View style={styles.imgcaption}>
            <Text style={styles.name}><Text style={{fontWeight: "bold"}}>Harold</Text>, 65</Text>
            <Text style={styles.desc}>Internet meme</Text>
          </View>
        </View>

        <View style={styles.icons}>

          <View style={styles.back1}>
            <Image style={styles.button1} source={Images.rewind}/>
          </View>

          <View style={styles.back2}>
            <Image style={styles.button2} source={Images.nope}/>
          </View>

          <View style={styles.back1}>
          <Image style={styles.button1} source={Images.boost}/>
          </View>

          <View style={styles.back2}>
          <Image style={styles.button2} source={Images.like}/>
          </View>

          <View style={styles.back1}>
          <Image style={styles.button1} source={Images.superLike}/>
          </View>

        </View>
      </View>
    );
  }
}

var { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
  },
  navbar: {
    flex: 1,
    height: (Platform.OS === 'ios') ? 50 + 25 : 50 + 30,
    borderBottomWidth: 3,
    borderColor: '#C5C5C5',
    top: 0,
    left: 0,
    position: 'absolute',
    width: '100%',
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logoimg: {
    flex: 4,
    height: (Platform.OS === 'ios') ? 35 : 40,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  chatimg: {
    flex: 1,
    height: (Platform.OS === 'ios') ? 40 : 35,
    resizeMode: 'contain',
    marginBottom: 5,
    tintColor: '#C5C5C5',
  },
  setimg: {
    flex: 1,
    height: (Platform.OS === 'ios') ? 35 : 30,
    resizeMode: 'contain',
    marginBottom: 10,
    tintColor: '#C5C5C5',
  },
  profile: {
    flex: 1,
    width: '90%',
    marginTop: 130,
  },
  profileimg: {
    backgroundColor: '#000000',
    resizeMode: 'contain',
    width: '100%',
    height: undefined,
    aspectRatio: 1/1,
  },
  img: {
    borderWidth: 2,
    borderBottomWidth: 0,
    borderColor: '#C5C5C5',
  },
  imgcaption: {
    paddingLeft: 15,
    paddingBottom: 8,
    paddingTop: 5,
    borderWidth: 2,
    borderTopWidth: 0,
    borderColor: '#C5C5C5',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: '#ffffff',
  },
  name: {
    fontSize: 24,
    marginBottom: -2
  },
  desc: {
    fontSize: 16,
    color: '#C5C5C5',
    marginTop: 0
  },
  icons: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    bottom: 15,
    position: 'absolute'
  },
  back1: {
    backgroundColor: '#ffffff',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: width / 7,
    marginRight: width / 7,
  },
  back2: {
    backgroundColor: '#ffffff',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button1: {
    flex: .55,
    height: (Platform.OS === 'ios') ? 30 : 30,
    resizeMode: 'contain',
  },
  button2: {
    flex: .5,
    height: (Platform.OS === 'ios') ? 40 : 40,
    resizeMode: 'contain',
  },
});
