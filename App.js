import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
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
        <View style={[styles.navbar]}>
          <Text>Hewwo! OwO</Text>
          //<Image
          //  source={ require('/App/Images/tinder-logo@2x.png') }
          ///>
        </View>
        <View style={[styles.profile]} />
        <View style={[styles.icons]} />
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
    height: (Platform.OS === 'ios') ? 44 : 56,
    borderBottomWidth: 3,
    borderColor: '#C5C5C5',
    top: 0,
    position: 'absolute',
    width: '100%',
  }
});
