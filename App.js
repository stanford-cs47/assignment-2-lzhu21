import React from 'react';
import { StyleSheet, Text, View, Platform, Image, Dimensions, SafeAreaView, Button, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Images, Profiles } from './App/Themes';
import Tinder from './App/Components/Tinder'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    var num = 0;
    const profList = [
      Profiles.harold,
      Profiles.barbara,
      Profiles.james,
      Profiles.john,
      Profiles.linda,
      Profiles.liz,
      Profiles.mary,
      Profiles.michael,
      Profiles.patricia,
      Profiles.robert,
    ]
    // default state
    this.state = {
      prof: {
        profileImage: profList[0].image,
        name: profList[0].name,
        age: profList[0].age,
        occupation: profList[0].occupation
      },
      loading: false,
    }

    this.next = () => {
      this.setState({loading: true});

      num = num + 1
      if(num > 9) {
        num = 0
      }
      var resultProfile = profList[num];
      this.setState({
        prof: {
          profileImage: resultProfile.image,
          name: resultProfile.name,
          age: resultProfile.age,
          occupation: resultProfile.occupation
        },
        loading: false
      })
    }

    this.previous = () => {
      this.setState({loading: true});

      num = num - 1
      if(num < 0) {
        num = 9
      }
      var resultProfile = profList[num];
      this.setState({
        prof: {
          profileImage: resultProfile.image,
          name: resultProfile.name,
          age: resultProfile.age,
          occupation: resultProfile.occupation
        },
        loading: false
      })
    }

    this.boost = () => {
      this.setState({loading: true});
      var tempProf = profList[num];
      var newList = profList.slice(0, num).concat(profList.slice(num + 1, profList.length));
      newList = newList.concat(tempProf);
      profList = newList;
    }

    this.superLike = () => {

    }

  }

  render() {
    if(this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Tinder prof={this.state.prof} />

        <View style={styles.icons}>

          <TouchableOpacity onPress={this.previous}>
            <View style={styles.back1}>
              <Image style={styles.button1} source={Images.rewind}/>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.next}>
            <View style={styles.back2}>
              <Image style={styles.button2} source={Images.nope}/>
            </View>
          </TouchableOpacity>

          <View style={styles.back1}>
            <Image style={styles.button1} source={Images.boost}/>
          </View>

          <TouchableOpacity onPress={this.next}>
            <View style={styles.back2}>
              <Image style={styles.button2} source={Images.like}/>
            </View>
          </TouchableOpacity>

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
