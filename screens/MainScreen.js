import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'

const MainScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'default'}></StatusBar>
      <Text>To Do App</Text>
      <View>
        <Text>할 일</Text>
      </View>
      <View>
        <Text>완료된 일</Text>
      </View>
    </SafeAreaView>
  )
}

export default MainScreen

const styles = StyleSheet.create({})
