import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform } from 'react-native'
import React from 'react'

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'default'}></StatusBar>
      <Text style={styles.title}>To Do App</Text>
      <View style={styles.listView}>
        <Text style={styles.subTitle}>할 일</Text>
      </View>
      <View style={styles.listView}>
        <Text style={styles.subTitle}>완료된 일</Text>
      </View>
    </SafeAreaView>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  listView: {
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    ...Platform.select({
        ios: {
          color: 'blue',
        },
        android: {
          color: 'red',
        },
    }),
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
