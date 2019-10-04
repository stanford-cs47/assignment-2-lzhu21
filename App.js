import React from 'react';
import { StyleSheet, Text, View, Platform, Image } from 'react-native';
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
          <Image style={styles.profileimg} source={Images.harold}/>
          <Text style={styles.name}>name, age</Text>
          <Text style={styles.desc}>occupation</Text>
        </View>

        <View style={styles.icons}>
          <View style={styles.button1}>
            <Image style={styles.oneimg} source={Images.rewind}/>
          </View>
          <Image style={styles.button2} source={Images.nope}/>
          <Image style={styles.button3} source={Images.boost}/>
          <Image style={styles.button4} source={Images.like}/>
          <Image style={styles.button5} source={Images.superLike}/>
        </View>
      </View>
    );
  }
}

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
    height: (Platform.OS === 'ios') ? 44 + 18 : 56 + 30,
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
    height: (Platform.OS === 'ios') ? 30 : 45,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  chatimg: {
    flex: 1,
    height: (Platform.OS === 'ios') ? 25 : 35,
    resizeMode: 'contain',
    marginBottom: 5,
    tintColor: '#C5C5C5',
  },
  setimg: {
    flex: 1,
    height: (Platform.OS === 'ios') ? 20 : 30,
    resizeMode: 'contain',
    marginBottom: 10,
    tintColor: '#C5C5C5',
  },
  profile: {
    flex: 2,
    marginTop: 100,
  },
  icons: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  button1: {
    flex: 1,
    height: (Platform.OS === 'ios') ? 10 : 30,
    width: 30,
    borderColor: '#ff0000',
    borderWidth: 3,
    marginBottom: 10,
  },
  oneimg: {
    backgroundColor: '#ffffff',
    height: (Platform.OS === 'ios') ? 10 : 30,
    width: 30,
    padding: 30,
    resizeMode: 'contain',
  },
  button2: {
    flex: 1.5,
    height: (Platform.OS === 'ios') ? 10 : 40,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  button3: {
    flex: 1,
    height: (Platform.OS === 'ios') ? 10 : 30,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  button4: {
    flex: 1,
    height: (Platform.OS === 'ios') ? 10 : 40,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  button5: {
    flex: 1,
    height: (Platform.OS === 'ios') ? 10 : 30,
    resizeMode: 'contain',
    marginBottom: 10,
  }
});
