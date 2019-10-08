import React from 'react';
import { StyleSheet, Text, View, Platform, Image, Dimensions, SafeAreaView } from 'react-native';
import { Images, Profiles } from '../Themes';

export default class Tinder extends React.Component {
  constructor(props) {
    super(props);
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
            <Image style={styles.profileimg} source={this.props.prof.profileImage}/>
          </View>
          <View style={styles.imgcaption}>
            <Text style={styles.name}><Text style={{fontWeight: "bold"}}>{this.props.prof.name}</Text>, {this.props.prof.age}</Text>
            <Text style={styles.desc}>{this.props.prof.occupation}</Text>
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
    borderBottomWidth: 2,
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
});
