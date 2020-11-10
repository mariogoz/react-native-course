/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

const App = () => {
  const name = 'Mario Gonzalez';
  const age = '30';
  const occupation = 'Software Engineer';
  const loremIpsumOne =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
  const loremIpsumTwo =
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.viewFirst}>
          <Text style={styles.info}>
            {name}
            {'\n'}
            {age}
          </Text>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://picsum.photos/seed/picsum/200',
            }}
          />
        </View>
        <View style={styles.viewSecond}>
          <Text style={styles.title}>{'Bio:'}</Text>
          <Text style={styles.marginText}>{occupation}</Text>
        </View>

        <View style={styles.viewThird}>
          <Text style={styles.title}>{'Descripción:'}</Text>
          <View style={[styles.frankenstein, styles.marginText]}>
            <View>
              <Text>{loremIpsumOne}</Text>
            </View>
            <View>
              <Text>{loremIpsumTwo}</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#2f4f4f',
  },
  viewFirst: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'red',
    borderWidth: 1,
    margin: 5,
  },
  info: {
    color: 'white',
    fontWeight: 'bold',
  },
  avatar: {
    width: 66,
    height: 66,
    borderRadius: 100,
    borderColor: 'red',
    borderWidth: 1,
  },
  viewSecond: {
    flexDirection: 'column',
    margin: 5,
    borderColor: 'red',
    borderWidth: 1,
  },
  title: {
    color: '#9c9c9c',
  },
  viewThird: {
    margin: 5,
    borderColor: 'red',
    borderWidth: 1,
    flex: 2,
    flexDirection: 'column',
  },
  marginText: {
    marginTop: 7,
  },
  frankenstein: {
    width: '50%',
    flexDirection: 'row',
    flex: 1,
  },
});

export default App;
